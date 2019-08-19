

export class HierarchyData {


  constructor(public level: number, public id: string, public name: string, public shortname?: string, public children?: HierarchyData[], public parent?: HierarchyData) {

  }

}