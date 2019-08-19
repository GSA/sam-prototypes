import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { SDSHiercarchicalServiceResult } from '@gsa-sam/components';

import { AgencyPickerModule } from '../agency-picker/agency-picker.module';
import { HierarchyData } from './hierarchy-data';
import { TheFederalHierarchy } from './fh.data';

@Injectable({
  providedIn: AgencyPickerModule
})
export class HierarchyService {

  private flatData: HierarchyData[];

  level0: HierarchyData;
  level1: HierarchyData[];
  level2: HierarchyData[];
  level3: HierarchyData[];
  level4: HierarchyData[];
  level7: HierarchyData[];

  searchResult: HierarchyData[] = [];

  constructor() { 
     this.reset();
     this.initHierarchy(TheFederalHierarchy)
  }

  initHierarchy(node: HierarchyData) {
  	for(let child of node.children) {
  		child.parent = node;
  		if(child.children) {
  			this.initHierarchy(child);
  		}
  	}
  }

  reset() {
      this.level0 = TheFederalHierarchy;
      this.level1 = [];
      this.level2 = [];
      this.level3 = [];
      this.level4 = [];
      this.level7 = [];
  }

  selectNodes(nodes: HierarchyData[]) {
      if(!nodes || nodes.length == 0) return;
      let level: number = nodes[0].level;
      if(level == 1) {
      	this.level1 = nodes;
      } else if(level == 2) {
      	this.level2 = nodes;
      } else if(level == 3) {
      	this.level3 = nodes;
      } else if(level == 4 || level == 5 || level == 6) {
        this.level4 = nodes;
      } else if(level == 7) {
        this.level7 = nodes;
      }
  }

  resolveNodes(level: number) : HierarchyData[] {
    if(this.level7.length > 0 && level > 7) return this.level7;
    if(this.level4.length > 0 && level > 6) return this.level4;
    if(this.level3.length > 0 && level > 3) return this.level3;
    if(this.level2.length > 0 && level > 2) return this.level2;
    if(this.level1.length > 0 && level > 1) return this.level1;
    let result: HierarchyData[] = [];
    result.push(this.level0);
    return result;
  }

  parseData(node: HierarchyData, level: number, result: HierarchyData[]) {
     for(let next of node.children) {
     	if(level < 0 || next.level == level) {
            result.push(next);
     	}
     	if(next.children) {
     		this.parseData(next, level, result)
     	}
     }
  }

  loadData(level: number, input: HierarchyData[], output: HierarchyData[]) {
       for(let data of input) {
           if(level == 4) {
               if(data.level == 4 || data.level == 5 || data.level == 6) {
                   output.push(data);
               }
      	   } else if(level <= 0 || level == data.level) {
             output.push(data);
           }
           if(data.children) {
           		this.loadData(level, data.children, output);
           }
       }
  }

  sort(a: HierarchyData, b: HierarchyData) : number {
    if(a.level - b.level == 0) {
		return (a.name < b.name) ? -1 : 1;
    } else {
      return a.level - b.level;
    }
  }


   getDataByText(level: number, currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let itemIncrease = 25;
        let selectedNodes = this.resolveNodes(level);
        let result: HierarchyData[] = [];
        this.loadData(level, selectedNodes, result);
        result.sort(this.sort);

        let data = of(result);
        let itemsOb: Observable<Object[]>;

        if (searchValue) {
            searchValue = searchValue.toUpperCase();
            itemsOb = data.pipe(map(items => items.filter(itm =>
                (itm.name.indexOf(searchValue) !== -1 ||
                    itm.id.indexOf(searchValue) !== -1
                ))));
        } else {
            itemsOb = data;
        }

        let items: object[];
        itemsOb.subscribe(
            (result) => {
                items = result;
            }
        );
        let totalItemCount = items.length;

        let maxSectionPosition = currentItems + itemIncrease;
        if (maxSectionPosition > totalItemCount) {
            maxSectionPosition = totalItemCount;
        }
        let subItemsitems = items.slice(currentItems, maxSectionPosition);

        let returnItem = {
            items: subItemsitems,
            totalItems: totalItemCount
        };
        return of(returnItem);

    }


}
