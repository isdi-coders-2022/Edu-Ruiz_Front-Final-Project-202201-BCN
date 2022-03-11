import loadAnimesAction from "../redux/actions/actionsCreator";
import actionsTypes from "../redux/actions/actionsTypes";
import { AnimeProps, Animes } from "../interfaces/AnimeProps";

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
