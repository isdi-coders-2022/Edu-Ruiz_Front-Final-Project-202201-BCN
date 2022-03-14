import { Animes } from "../interfaces/AnimeProps";
import TypeOfAction from "../interfaces/TypeOfAction";
import {
  createAnimeAction,
  deleteAnimeAction,
} from "../redux/actions/actionsCreator";
import actionsTypes from "../redux/actions/actionsTypes";
import animeReducer from "../redux/reducer/animeReducer";

describe("Given a cryptoReducer function", () => {
  describe("When it receives an action with an array of crytos", () => {
    test("Then it should return a newCryptoState with the new array", () => {
      const newState: Animes = [
        {
          autor: "tupac",
          image: "image.png",
          name: "naruto",
        },
      ];

      const currentState: Animes = [
        {
          autor: "tupac",
          image: "image.png",
          name: "naruto",
        },
      ];

      const action: TypeOfAction = {
        type: actionsTypes.loadAnimes,
        payload: newState,
      };
      const expectedOutput = animeReducer(currentState, action);
      expect(expectedOutput).toEqual(newState);
    });
  });

  describe("When it doesn't receive a valid action", () => {
    test("Then it should return the current state with the anime", () => {
      const currentState: Animes = [
        {
          autor: "tupac",
          image: "image.png",
          name: "naruto",
        },
      ];

      const action: TypeOfAction = {
        type: actionsTypes.loadAnimes,
        payload: undefined,
      };
      const expectedOutput = animeReducer(currentState, action);

      expect(expectedOutput).toEqual(currentState);
    });
  });

  describe("When it doesn't receives an action", () => {
    test("Then it should return the same array", () => {
      const currentState: [] = [];

      const action = {
        type: actionsTypes,
      };

      const newState = animeReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });

  describe("When it render", () => {
    test("Then it should return length 0", () => {
      const action = {
        type: actionsTypes,
      };

      const newProjects = animeReducer(undefined, action);

      expect(newProjects).toHaveLength(0);
    });
  });
});

describe("When it gets 2 reviews and use deleteReviewAction with id 2", () => {
  test("Then it should delete it and not to fain in reviews", () => {
    const animes = [
      {
        id: "2",
        autor: "tupac",
        image: "image.png",
        name: "naruto",
      },
    ];
    const idToDelete = "2";
    const expectedLength = 0;
    const expectedRemovedReview = { id: "2" };
    const action = deleteAnimeAction(idToDelete);

    const newReviews = animeReducer(animes, action);

    expect(newReviews).not.toContain(expectedRemovedReview);
    expect(newReviews).toHaveLength(expectedLength);
  });
});

describe("When it gets 2 reviews and use deleteReviewAction with id 2", () => {
  test("Then it should delete it and not to fain in reviews", () => {
    const animes = [
      {
        id: "2",
        autor: "tupac",
        image: "image.png",
        name: "naruto",
      },
    ];

    const expectedLength = 2;
    const expectedNewAnime = {
      id: "3",
      autor: "tupac",
      image: "image.png",
      name: "naruto",
    };
    const action = createAnimeAction(expectedNewAnime);

    const newReviews = animeReducer(animes, action);

    expect(newReviews).toContain(expectedNewAnime);
    expect(newReviews).toHaveLength(expectedLength);
  });
});
