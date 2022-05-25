import { Member } from "./member";

export interface Room {
    id: number;
    roomName: string;
    roommates: Member[];
    currentMales: number;
    currentFemales: number;
    neededMales: number;
    neededFemales: number;
    heatStatus: boolean;
    city: string;
    type: string;
  }