import Anime from "./Anime";

interface TypeOfAction {
  type: string;
  payload: Anime[] | Anime | undefined;
}

export default TypeOfAction;
