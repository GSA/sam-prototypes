import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fileExtractData } from './downloads.data';


let idCounter: number = 0;
let currentFileId: string = "";
let found: boolean = false;

let setCurrentFile = function(fileId: string): any  {
      found = false;
      currentFileId = fileId;
      return fileExtractData.map(initFileData);
}

let initFileData = function(fileData: any): any {
    let selectedFile:any = null;

    fileData.id = '0000' + idCounter;
    idCounter++;
    if(fileData.children && fileData.children.length > 0 && !found) {
      let files = fileData.children.map(initFileData);    
      if(fileData.id === currentFileId) {
          return fileData;
      }
    }

}

@Component({
  selector: 'app-data-services',
  templateUrl: './downloads.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class DownloadsComponent implements OnInit, AfterViewInit {

    breadcrumbs: string[] = [
    ];

    currentFolder: any = null;

    public subheader = {
      buttons: [],
      actions: [
        { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
      ]
    };

    public searchModel: {};

    public searchSettings = {
      placeholder: 'Enter an filename'
    }

    constructor(private route: ActivatedRoute) {
        this.currentFolder = fileExtractData.map(initFileData)[0];
        this.breadcrumbs.push(this.currentFolder);
    }

    ngOnInit() {
        this.route.queryParams.subscribe(
        data => {
          let fileId = typeof data['index'] === "string" ? decodeURI(data['index']) : 'all';
          setCurrentFile(fileId);
        });
    }

    ngAfterViewInit() {

    }

    search() {

    }

    log(value) {
      console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
    }
}
