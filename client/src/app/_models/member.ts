import { Photo } from "./photo";

export interface Member {
    id: number;
    username: string;
    photoUrl: string;
    age: number;
    lastActive: Date;
    gender: string;
    introduction: string;
    city: string;
    country: string;
    photos: Photo[];
  }