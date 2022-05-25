import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ROOMS } from '../_data/mock-rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getRooms(){
    return of(ROOMS);
  }

  
}
