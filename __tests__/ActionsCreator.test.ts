import actionsTypes from "../redux/actions/actionsTypes";
import { AnimeProps, Animes } from "../interfaces/AnimeProps";
import {
  createAnimeAction,
  deleteAnimeAction,
  loadAnimeAction,
  loadAnimesAction,
  loadProfileAction,
  loadUsersAction,
  loginAction,
  registerAction,
  updateAnimeAction,
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

describe("Given a createAnimeAction action", () => {
  describe("When its recives a action", () => {
    test("Then it should return a newAnime", () => {
      const newAnime: Object = {
        autor: "tupac",
        image: "image.png",
        name: "naruto",
      };

      const action = {
        type: actionsTypes.createAnime,
        newAnime,
      };

      const expectedOutput = createAnimeAction(newAnime);

      expect(expectedOutput).toEqual(action);
    });
  });
});

describe("Given a createAnimeAction action", () => {
  describe("When its recives a action", () => {
    test("Then it should return a newAnime", () => {
      const newAnime: Object = {
        autor: "tupac",
        image: "image.png",
        name: "naruto",
      };

      const action = {
        type: actionsTypes.createAnime,
        newAnime,
      };

      const expectedOutput = createAnimeAction(newAnime);

      expect(expectedOutput).toEqual(action);
    });
  });
});

describe("Given a loadAnimesAction", () => {
  describe("When it receives a list of animes", () => {
    test("Then it should return an object with type loadAnimes and animes", () => {
      const anime = {
        autor: "tupac",
        image: "image.png",
        name: "naruto",
      };

      const action = {
        type: actionsTypes.loadAnime,
        anime,
      };

      const expectedOutput = loadAnimeAction(anime);

      expect(expectedOutput).toStrictEqual(action);
    });
  });

  describe("When it receives a list of animes", () => {
    test("Then it should return an object with type loadAnimes and animes", () => {
      const anime = {
        autor: "tupac",
        image: "image.png",
        name: "naruto",
      };

      const action = {
        type: actionsTypes.updateAnime,
        anime,
      };

      const expectedOutput = updateAnimeAction(anime);

      expect(expectedOutput).toStrictEqual(action);
    });
  });

  describe("When it receives a list of animes", () => {
    test("Then it should return an object with type loadAnimes and animes", () => {
      const user = {
        user: "tupac",
      };

      const action = {
        type: actionsTypes.login,
        user,
      };

      const expectedOutput = loginAction(user);

      expect(expectedOutput).toStrictEqual(action);
    });
  });

  describe("When it receives a list of animes", () => {
    test("Then it should return an object with type loadAnimes and animes", () => {
      const newUser = {
        user: "tupac",
      };

      const action = {
        type: actionsTypes.register,
        newUser,
      };

      const expectedOutput = registerAction(newUser);

      expect(expectedOutput).toStrictEqual(action);
    });
  });

  describe("When it receives a list of animes", () => {
    test("Then it should return an object with type loadAnimes and animes", () => {
      const users = [
        {
          user: "tupac",
        },
      ];

      const action = {
        type: actionsTypes.loadUsers,
        users,
      };

      const expectedOutput = loadUsersAction(users);

      expect(expectedOutput).toStrictEqual(action);
    });
  });
  describe("When it receives a list of animes", () => {
    test("Then it should return an object with type loadAnimes and animes", () => {
      const user = {
        user: "tupac",
      };
      const action = {
        type: actionsTypes.loadProfile,
        user,
      };

      const expectedOutput = loadProfileAction(user);

      expect(expectedOutput).toStrictEqual(action);
    });
  });
});
