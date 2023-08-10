import { Injectable } from '@angular/core';
import { Account } from '../_models/account';
import { ACCOUNTS } from '../_data/mock-account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accountsAvailable: Account[] = ACCOUNTS;
  constructor() { }

  login(inputAccount: Account){
    this.accountsAvailable.forEach( (item) => {
      if(item.username === inputAccount.username && item.password === inputAccount.password){
       
      }
    })
  }
}
