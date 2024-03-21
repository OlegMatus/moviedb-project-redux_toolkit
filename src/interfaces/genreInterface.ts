export interface IGenre extends IGenres{
    id: number,
    name: string
}

export interface IGenres {
    genres: IGenre []
}

