import { Injectable } from '@angular/core';
import { SystemAccount } from './system-account.model';
import { Accounts } from './system-account.data';

@Injectable({
  providedIn: 'root'
})
export class SystemAccountsService {

  public currentAccount: SystemAccount = Accounts[0];

  constructor() { }


}
