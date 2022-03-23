import { HYDRATE } from "next-redux-wrapper";
import Anime from "../interfaces/Anime";
import actionsTypes from "../redux/actions/actionsTypes";
import singleAnimeReducer from "../redux/reducer/singleReducer";

describe("Given singleAnimeReducer", () => {
  describe("When given a current obejct and action", () => {
    test("Then should return a  with current objects and actions", () => {
      const anime = {
        id: "1",
        name: "naruto",
        autor: "tupac",
        image: "image.png",
      };

      const current = {
        id: "",
        name: "",
        autor: "",
        image: "",
      };

      const currentAnime: Anime = current;
      const action = {
        type: actionsTypes.loadAnime,
        anime,
      };

      const newAnime = singleAnimeReducer(currentAnime, action);

      expect(newAnime).toStrictEqual(anime);
    });
  });

  describe("When given a current obejct and action", () => {
    test("Then should return a  with current objects and actions", () => {
      const anime = {
        id: "1",
        name: "naruto",
        autor: "tupac",
        image: "image.png",
      };

      const current = {
        id: "1",
        name: "one piece",
        autor: "tupac",
        image: "image.png",
      };

      const currentAnime: Anime = current;
      const action = {
        type: actionsTypes.updateAnime,
        anime,
      };

      const newAnime = singleAnimeReducer(currentAnime, action);

      expect(newAnime).toStrictEqual(anime);
    });
  });

  describe("When called HYDRATE case", () => {
    test("Then should return the elements passed by HYDRATE payload", () => {
      const initAnime = {
        id: "",
        name: "",
        autor: "",
        image: "",
      };

      const anime = {
        id: "1",
        name: "naruto",
        autor: "tupac",
        image: "image.png",
      };

      const action = {
        type: HYDRATE,
        payload: { anime: anime },
      };

      const newAnime = singleAnimeReducer(initAnime, action);

      expect(newAnime).toEqual(anime);
    });
  });
  describe("When given empty state and action", () => {
    test("Then should return an empty product", () => {
      const initAnime = {};

      const expectedAnime = singleAnimeReducer();

      expect(expectedAnime).toEqual(initAnime);
    });
  });
});
