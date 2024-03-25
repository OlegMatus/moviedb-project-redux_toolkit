export interface IVideo extends IVideos{
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}
export interface IVideos {
    results: IVideo[]
}