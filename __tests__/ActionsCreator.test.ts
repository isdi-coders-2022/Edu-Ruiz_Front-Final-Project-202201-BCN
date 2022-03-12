import actionsTypes from "../redux/actions/actionsTypes";
import { AnimeProps, Animes } from "../interfaces/AnimeProps";
import {
  deleteAnimeAction,
  loadAnimesAction,
} from "../redux/actions/actionsCreator";

describe("Given a loadAnimesAction", () => {
  describe("When it receives a list of animes", () => {
    test("Then it should return an object with type loadAnimes and animes", () => {
      const animes: Animes = [
        {
          autor: "tupac",
          image: "image.png",
          name: "naruto",
        },
      ];

      const action: AnimeProps = {
        type: actionsTypes.loadAnimes,
        payload: animes,
      };

      const expectedOutput = loadAnimesAction(animes);

      expect(expectedOutput).toStrictEqual(action);
    });
  });
});

describe("Given a deleteReviewAction action", () => {
  describe("When it receives an object review with name, image, score and review", () => {
    test("Then it should make deleteReviewAction and compare it with the expected action", () => {
      const id = "2";

      const expectedAction = {
        type: actionsTypes.deleteAnime,
        payload: id,
      };

      const action = deleteAnimeAction(id);
      expect(action).toEqual(expectedAction);
    });
  });
});
