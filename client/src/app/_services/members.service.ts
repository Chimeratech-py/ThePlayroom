import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MEMBERS } from '../_data/mock-members';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() { }

  getMember(username: string){
    const first = MEMBERS.find((obj) => {
      return obj.username === username;
    })

    return of(first);
  }
}
