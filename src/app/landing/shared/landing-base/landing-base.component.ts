import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-landing-base',
  template: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingBaseComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public getContentByKey(dynamicContent: any[], key: string): any[] {
     for(let i = 0; i<dynamicContent.length; i++) {
         if(dynamicContent[i].key && dynamicContent[i].key == key) {
             return dynamicContent[i].contents;
         }
     }
     return null;
  }

}
