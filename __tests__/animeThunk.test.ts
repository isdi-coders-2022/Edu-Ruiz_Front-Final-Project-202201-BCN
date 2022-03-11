import { Animes } from "../interfaces/AnimeProps";
import actionsTypes from "../redux/actions/actionsTypes";
import { loadAnimeListThunk } from "../redux/thunks/animeThunks";
import "whatwg-fetch";

describe("Given a loadAnimeListThunk", () => {
  describe("When it's invoked", () => {
    test("Then it should call the dispatch function", async () => {
      const animes: Animes = [
        {
          autor: "tupac",
          image: "image.png",
          name: "naruto",
        },
      ];

      const dispatch = jest.fn();
      const action = {
        type: actionsTypes.loadAnimes,
        payload: animes,
      };

      await loadAnimeListThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
