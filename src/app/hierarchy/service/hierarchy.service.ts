import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { SDSHiercarchicalServiceResult } from '@gsa-sam/components';
import { SDSAutocompleteServiceInterface } from '@gsa-sam/components';
import { AgencyPickerModule } from '../agency-picker/agency-picker.module';
import { HierarchyData } from './hierarchy-data';
import { TheFederalHierarchy } from './fh.data';
import { SwitchView } from '@angular/common/src/directives/ng_switch';

@Injectable()
export class HierarchyService implements SDSAutocompleteServiceInterface {

  public level: number = 0;


  public filter: any;
  /**
   * 
   * @param currentItems 
   * @param searchValue 
   */
  getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
    let itemIncrease = 25;
    let result: HierarchyData[] = [];
    let source = this.determineSource();
    if (searchValue) {
      for (let i = 0; i < source.length; i++) {
        let item = source[i];
        if (item.name.indexOf(searchValue.toUpperCase()) !== -1 || item.id.indexOf(searchValue) !== -1) {
          result.push(item);
        }
      }
    } else {
      result = source;
    }

    result.sort(this.sort);
    let totalItemCount = result.length;

    let maxSectionPosition = currentItems + itemIncrease;
    if (maxSectionPosition > totalItemCount) {
      maxSectionPosition = totalItemCount;
    }
    let subItemsitems = result.slice(currentItems, maxSectionPosition);

    let returnItem = {
      items: subItemsitems,
      totalItems: totalItemCount
    };
    return of(returnItem);
  }

  getDataSearchTerms(filterParams: any, currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
    this.filter = filterParams;

    let itemIncrease = 25;
    let result: HierarchyData[] = [];
    let source = this.determineFilteredSource();

    if (searchValue) {
      for (let i = 0; i < source.length; i++) {
        let item = source[i];
        if (item.name.indexOf(searchValue.toUpperCase()) !== -1 || item.id.indexOf(searchValue) !== -1) {
          result.push(item);
        }
      }
    } else {
      result = source;
    }

    result.sort(this.sort);
    let totalItemCount = result.length;

    let maxSectionPosition = currentItems + itemIncrease;
    if (maxSectionPosition > totalItemCount) {
      maxSectionPosition = totalItemCount;
    }
    let subItemsitems = result.slice(currentItems, maxSectionPosition);

    let returnItem = {
      items: subItemsitems,
      totalItems: totalItemCount
    };
    return of(returnItem);

  }
  private determineFilteredSource() {
    let matchFound = false;
    let matchedItems = [];
    if (this.filter) {
      for (let i = 7; i > 0 && !matchFound; i--) {
        let tempFilter = this.filter[i];
        if (tempFilter !== undefined) {
          if (tempFilter.items.length > 0) {
            for (let j = 0; j < tempFilter.items.length; j++) {
              let item = tempFilter.items[j];
              matchedItems = matchedItems.concat(this.findItemsDecendents(item));
            }

          }
        }
      }
    }
    if (matchedItems.length === 0) {
      matchedItems = this.flatData;
    }
    return matchedItems;

  }

  private determineSource() {
    let source: HierarchyData[];
    switch (this.level) {
      case 0:
        source = this.flatData;
        break;
      case 1:

        source = this.level1Items;
        break;
      case 2:
        source = this.level2Items;
        break;
      case 3:
        source = this.level3Items;
        break;
      case 4:
      case 5:
      case 6:
        source = this.level456Items;
        break;
      case 7:
        source = this.level7Items;
        break;
      default:
        break;
    }
    if (this.level !== 0) {
      let children = this.findItemsFromAboveLevel();
      if (children.length !== 0) {
        source = children;
      }
    }
    return source;

  }
  private flatData: HierarchyData[] = [];

  findItemsFromAboveLevel() {
    let matchFound = false;
    let matchedItems = [];
    if (this.filter) {
      for (let i = this.level; i > 0 && !matchFound; i--) {
        let tempFilter = this.filter[i];

        if (tempFilter !== undefined) {

          if (tempFilter.items.length > 0) {
            for (let j = 0; j < tempFilter.items.length; j++) {
              let item = tempFilter.items[j];
              let children = this.parentChildren[item.id];
              let childMatches = this.findChildrenOfLevel(children);
              matchedItems = matchedItems.concat(childMatches);
            }
          }
        }
      }
    }
    return matchedItems;
  }

  findItemsDecendents(parent: HierarchyData) {
    let decendents = [];
    if (parent.children) {
      for (let i = 0; i < parent.children.length; i++) {
        let child = parent.children[i];
        decendents.push(child);
        decendents = decendents.concat(this.findItemsDecendents(child));
      }
    }
    return decendents;
  }

  findChildrenOfLevel(children: HierarchyData[]) {
    let foundChildren = [];
    if(!children) {
      return foundChildren;
    }
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      let childLevel = child.level;
      if (childLevel === 5 || childLevel === 6) {
        childLevel = 4;
      }
      if (childLevel === this.level) {
        foundChildren.push(child);
      }
      if (child.level > this.level) {
        if (child.children) {
          let childrensChildren = this.findChildrenOfLevel(child.children);
          if (childrensChildren.length > 0) {
            foundChildren = foundChildren.concat(childrensChildren);
          }
        }
      }

    }
    return foundChildren;
  }




  // level0: HierarchyData;
  // level1: HierarchyData[];
  // level2: HierarchyData[];
  // level3: HierarchyData[];
  // level4: HierarchyData[];
  // level7: HierarchyData[];

  level1Items: HierarchyData[] = [];
  level2Items: HierarchyData[] = [];
  level3Items: HierarchyData[] = [];
  level456Items: HierarchyData[] = [];
  level7Items: HierarchyData[] = [];
  parentChildren = {};
  searchResult: HierarchyData[] = [];

  constructor() {
    this.loadData();

    // this.reset();
    // this.initHierarchy(TheFederalHierarchy)
  }

  // initHierarchy(node: HierarchyData) {
  //   for (let child of node.children) {
  //     child.parent = node;
  //     if (child.children) {
  //       this.initHierarchy(child);
  //     }
  //   }
  // }

  private loadData() {
    let fh = TheFederalHierarchy.children;
    let parentId: string = '0000';
    let children = fh;
    this.processChildren(children, parentId);
  }







  private processChildren(children: HierarchyData[], parentId: string) {
    for (let i = 0; i < children.length; i++) {
      let item = children[i];
      this.flatData.push(item);
      switch (item.level) {
        case 1:
          this.level1Items.push(item);
          break;
        case 2:
          this.level2Items.push(item);
          break;
        case 3:
          this.level3Items.push(item);
          break;
        case 4:
        case 5:
        case 6:
          this.level456Items.push(item);
          break;
        case 7:
          this.level7Items.push(item);
          break;
        default:
          console.log('Unknown Item');
          console.log(item.name);
          break;
      }


      if (!this.parentChildren[parentId]) {
        this.parentChildren[parentId] = [];
      }
      this.parentChildren[parentId].push(item);
      if (item.children) {
        this.processChildren(item.children, item.id);
      }
    }
  }

  // reset() {
  //   this.level0 = TheFederalHierarchy;
  //   this.level1 = [];
  //   this.level2 = [];
  //   this.level3 = [];
  //   this.level4 = [];
  //   this.level7 = [];
  // }

  // selectNodes(nodes: HierarchyData[]) {
  //   if (!nodes || nodes.length == 0) return;
  //   let level: number = nodes[0].level;
  //   if (level == 1) {
  //     this.level1 = nodes;
  //   } else if (level == 2) {
  //     this.level2 = nodes;
  //   } else if (level == 3) {
  //     this.level3 = nodes;
  //   } else if (level == 4 || level == 5 || level == 6) {
  //     this.level4 = nodes;
  //   } else if (level == 7) {
  //     this.level7 = nodes;
  //   }
  // }

  // resolveNodes(level: number): HierarchyData[] {
  //   if (this.level7.length > 0 && level > 7) return this.level7;
  //   if (this.level4.length > 0 && level > 6) return this.level4;
  //   if (this.level3.length > 0 && level > 3) return this.level3;
  //   if (this.level2.length > 0 && level > 2) return this.level2;
  //   if (this.level1.length > 0 && level > 1) return this.level1;
  //   let result: HierarchyData[] = [];
  //   result.push(this.level0);
  //   return result;
  // }

  // parseData(node: HierarchyData, level: number, result: HierarchyData[]) {
  //   for (let next of node.children) {
  //     if (level < 0 || next.level == level) {
  //       result.push(next);
  //     }
  //     if (next.children) {
  //       this.parseData(next, level, result)
  //     }
  //   }
  // }

  // loadData(level: number, input: HierarchyData[], output: HierarchyData[]) {
  //   for (let data of input) {
  //     if (level == 4) {
  //       if (data.level == 4 || data.level == 5 || data.level == 6) {
  //         output.push(data);
  //       }
  //     } else if (level <= 0 || level == data.level) {
  //       output.push(data);
  //     }
  //     if (data.children) {
  //       this.loadData(level, data.children, output);
  //     }
  //   }
  // }

  sort(a: HierarchyData, b: HierarchyData): number {
    if (a.level - b.level == 0) {
      return (a.name < b.name) ? -1 : 1;
    } else {
      return a.level - b.level;
    }
  }


  // getDataByText(level: number, currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
  //   let itemIncrease = 25;
  //   let selectedNodes = this.resolveNodes(level);
  //   let result: HierarchyData[] = [];
  //   this.loadData(level, selectedNodes, result);
  //   result.sort(this.sort);

  //   let data = of(result);
  //   let itemsOb: Observable<Object[]>;

  //   if (searchValue) {
  //     searchValue = searchValue.toUpperCase();
  //     itemsOb = data.pipe(map(items => items.filter(itm =>
  //       (itm.name.indexOf(searchValue) !== -1 ||
  //         itm.id.indexOf(searchValue) !== -1
  //       ))));
  //   } else {
  //     itemsOb = data;
  //   }

  //   let items: object[];
  //   itemsOb.subscribe(
  //     (result) => {
  //       items = result;
  //     }
  //   );
  //   let totalItemCount = items.length;

  //   let maxSectionPosition = currentItems + itemIncrease;
  //   if (maxSectionPosition > totalItemCount) {
  //     maxSectionPosition = totalItemCount;
  //   }
  //   let subItemsitems = items.slice(currentItems, maxSectionPosition);

  //   let returnItem = {
  //     items: subItemsitems,
  //     totalItems: totalItemCount
  //   };
  //   return of(returnItem);

  // }


}
