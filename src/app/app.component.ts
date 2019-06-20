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
  ) { }
  setSelection() { }

  ngOnInit() {

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let itemCode = 'id';
          let child = this.route.firstChild;
          let searchedValue = null;
          if (this.route.snapshot.data && this.route.snapshot.data[itemCode]) {
            searchedValue = this.route.snapshot.data[itemCode];
          }
          while (child) {
            if (child.snapshot.data && child.snapshot.data[itemCode]) {
              searchedValue = child.snapshot.data[itemCode];
            }
            if (child.firstChild) {
              child = child.firstChild;
            } else {
              child = null;
            }
          }
          return searchedValue;
        })
      )
      .subscribe((customData: any) => {
        this.header.select(customData);
      });
  }

  ngAfterViewInit() { }

  ngOnDestroy() { }
}
