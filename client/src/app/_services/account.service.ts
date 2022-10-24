import { Injectable } from '@angular/core';
import { Account } from '../_models/account';
import { ACCOUNTS } from '../_data/mock-account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  login(inputAccount: Account){
    for(var a of ACCOUNTS){
      if(a.username === inputAccount.username){
        
      }
    }
  }
}
