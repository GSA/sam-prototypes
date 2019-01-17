import { Injectable, ElementRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
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

  isMainNavigationVisible: boolean = true;

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
      router.events.subscribe((event) => {
        if(event instanceof NavigationStart) {
          this.localTools = null;
          this.selectedTool = null;
          this.isMainNavigationVisible = true;
        }
      });
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

  goTo(url: string) {
    this.router.navigateByUrl(url);
  }

  setMainNavigationVisible(isVisible: boolean) {
    this.isMainNavigationVisible = isVisible;
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
