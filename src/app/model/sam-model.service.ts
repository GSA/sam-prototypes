import { Injectable, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToolItem } from '../sam-ui-elements/tools';
import { GlobalTools, SearchTools } from './tools.config';

@Injectable({
  providedIn: 'root'
})
export class SamModelService {

  /**
   * Sign in 
   */
  isSignedIn: boolean = false;

  /**
   * Toolbar configuration and state 
   */
  globalTools: ToolItem[] = GlobalTools;
  localTools: ToolItem[];
  defaultTool: ToolItem;
  selectedTool: ToolItem;

  toolTemplates: Map<string, ElementRef<any>>;
  selectedToolTemplate: ElementRef<any>;


  router: Router;

  /**
   * Constructor
   */
  constructor(router: Router) {
      this.router = router;
      this.toolTemplates = new Map<string, ElementRef<any>>();
  }

  signIn(redirectUrl?: string) {
    this.isSignedIn = true;
    if(redirectUrl) {
      this.router.navigateByUrl(redirectUrl);
    }
  }

  signOut(redirectUrl?: string) {
    this.isSignedIn = false;
    if(redirectUrl) {
      this.router.navigateByUrl(redirectUrl);
    }
  }

  closeTools() {
      this.selectedTool = null;
  }

  setToolTemplate(key: string, template: ElementRef<any>) {
      this.toolTemplates.set(key, template);
  }

  setLocalTools(localTools: ToolItem[]) {
      this.localTools = localTools;
      this.defaultTool = localTools[0];
      this.selectedTool = localTools[0];
  }

  setSelectedTool(selectedTool: ToolItem) {
      this.selectedTool = selectedTool;
      if(this.toolTemplates) {
        this.selectedToolTemplate = this.toolTemplates.get(this.selectedTool.eventID);
      }
  }
}
