import { Member } from "../_models/member";

export const MEMBERS: Member[] = [
    {
        id: 1,
        username: 'Ken',
        photoUrl: './assets/Kenneth.jpg',
        age: 28,
        lastActive: new Date("2022-01-26"),
        gender: 'Male',
        introduction: 'gagmay pero yayay',
        city: 'Davao City',
        country: 'Philippines',
        photos: [{id: 1, url: './assets/Kenneth.jpg', isMain: true}]
    },
    {
        id: 2,
        username: 'Chito',
        photoUrl: './assets/Chito.jpg',
        age: 26,
        lastActive: new Date("2022-03-26"),
        gender: 'Male',
        introduction: 'Any goal is a hole',
        city: 'Davao City',
        country: 'Philippines',
        photos: [{id: 1, url: './assets/Chito.jpg', isMain: true}]
    },
    {
        id: 3,
        username: 'Dan',
        photoUrl: './assets/Dan.jpg',
        age: 24,
        lastActive: new Date("2022-04-25"),
        gender: 'Male',
        introduction: 'buotan pag naka logout',
        city: 'Davao City',
        country: 'Philippines',
        photos: [{id: 1, url: './assets/Dan.jpg', isMain: true}]
    },
    {
        id: 4,
        username: 'Yumi',
        photoUrl: './assets/Yumi.jpg',
        age: 24,
        lastActive: new Date("2022-04-25"),
        gender: 'Male',
        introduction: 'buotan pag naka logout',
        city: 'Davao City',
        country: 'Philippines',
        photos: [{id: 1, url: './assets/Dan.jpg', isMain: true}]
    }



]