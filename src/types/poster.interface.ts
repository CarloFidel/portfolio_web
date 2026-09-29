export interface Poster {
    id: string
    title: string;
    year: string,
    categories: string;
    description: string;
    largeDescription: string;
    director: string
    img: string;
    alt?: string;
    tracks?: { title: string; src: string }[];
    videoUrl?: string;
}