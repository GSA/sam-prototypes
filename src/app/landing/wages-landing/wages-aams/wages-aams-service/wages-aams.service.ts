import { memorandums } from './wages-aams.data';
import { Injectable } from "@angular/core";

@Injectable()
export class WagesAamsService {

  public memorandumData: any[] = memorandums;

  constructor() { }
}
