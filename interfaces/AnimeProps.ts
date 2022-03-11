import Anime from "./Anime";

export type Animes = Anime[];

export interface AnimesArray {
  animes: Animes;
}

export interface AnimeProps {
  type: string;
  payload: Anime[];
}
