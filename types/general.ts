export interface IMovie {
    type: "cartoon" | 'movie',
    title: string,
    description: string,
    videoUrl: string,
    thumbnailUrl: string,
    genre: string
    duration: string
}


export interface IUser {
    name: string;
    surname: string;
    email: string;
    avatar: string
}