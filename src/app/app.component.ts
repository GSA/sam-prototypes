import { Component, ElementRef, ViewChild } from "@angular/core";
import {
  NavigationStart,
  Router,
  ActivatedRoute,
  NavigationEnd
} from "@angular/router";
import { SamModelService } from "./model/sam-model.service";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "sam-gov";
  @ViewChild("header") header;

  public constructor(
    private route: ActivatedRoute,
    private router: Router,
    public modelService: SamModelService
  ) {}
  setSelection() {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.route.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data["id"]) {
              return child.snapshot.data["id"];
            } else {
              return null;
            }
          }
          return null;
        })
      )
      .subscribe((customData: any) => {
        this.header.select(customData);
        console.log(customData);
      });
  }

  ngAfterViewInit() {}

  ngOnDestroy() {}
}
