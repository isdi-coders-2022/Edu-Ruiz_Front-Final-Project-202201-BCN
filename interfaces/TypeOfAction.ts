import Anime from "./Anime";

interface TypeOfAction {
  type: string;
  payload: Anime[] | Anime | string | undefined;
}

export default TypeOfAction;
