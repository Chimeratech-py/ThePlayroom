import { Room } from "../_models/room";

export const ROOMS: Room[] = [
    {
        id: 1,
        roomName: "Kenneth's party",
        roommates: [
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
                photos: [{ id: 1, url: './assets/Kenneth.jpg', isMain: true }]
            },
            {
                id: 2,
                username: 'Rachel',
                photoUrl: '',
                age: 28,
                lastActive: new Date("2022-01-26"),
                gender: 'Female',
                introduction: '',
                city: 'Davao City',
                country: 'Philippines',
                photos: [{ id: 1, url: './assets/Kenneth.jpg', isMain: true }]
            },
        ],
        currentMales: 1,
        currentFemales: 4,
        neededMales: 1,
        neededFemales: 5,
        heatStatus: true,
        city: 'Davao',
        type: 'harem'
    },
    {
        id: 2,
        roomName: "Putukan sa downtown",
        roommates: [
            {
                id: 2,
                username: 'Chito',
                photoUrl: './assets/Chito.jpg',
                age: 26,
                lastActive: new Date("2022-03-26"),
                gender: 'Male',
                introduction: 'Any hole is a goal',
                city: 'Davao City',
                country: 'Philippines',
                photos: [{id: 1, url: './assets/Chito.jpg', isMain: true}]
            },
            {
                id: 3,
                username: 'Mina',
                photoUrl: '',
                age: 28,
                lastActive: new Date("2022-01-26"),
                gender: 'Female',
                introduction: '',
                city: 'Davao City',
                country: 'Philippines',
                photos: [{ id: 1, url: './assets/Kenneth.jpg', isMain: true }]
            },
        ],
        currentMales: 3,
        currentFemales: 1,
        neededMales: 5,
        neededFemales: 5,
        heatStatus: false,
        city: 'Davao',
        type: 'orgy'
    },
    {
        id: 3,
        roomName: "Yumi's so yummy",
        roommates: [
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
            },
            {
                id: 2,
                username: 'Rachel',
                photoUrl: '',
                age: 28,
                lastActive: new Date("2022-01-26"),
                gender: 'Female',
                introduction: '',
                city: 'Davao City',
                country: 'Philippines',
                photos: [{ id: 1, url: './assets/Kenneth.jpg', isMain: true }]
            },
        ],
        currentMales: 4,
        currentFemales: 1,
        neededMales: 5,
        neededFemales: 1,
        heatStatus: true,
        city: 'Davao',
        type: 'gangbang'
    },
]