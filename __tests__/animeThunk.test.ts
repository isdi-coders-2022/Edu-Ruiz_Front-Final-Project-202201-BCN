import {
  createAnimeThunk,
  deleteAnimeThunk,
  loadAnimeListThunk,
} from "../redux/thunks/animeThunks";

describe("Given a loadTasksThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await loadAnimeListThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deletedArticleThunk function", () => {
  describe("When it's called with a id=3", () => {
    test("Then it should dispatch and delete the task with id 3", async () => {
      const dispatch = jest.fn();
      const id = "2";

      const deleteThunk = deleteAnimeThunk(id);

      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe("When it's called with a id=10", () => {
    test("Then it should dispatch and delete the task with id 10", async () => {
      const dispatch = jest.fn();
      const id = "10";

      const deleteThunk = deleteAnimeThunk(id);

      await deleteThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given a createReviewThunk", () => {
  describe("When its invoked with a singleReview", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      const singleReview = {
        id: "2",
        autor: "tupac",
        image: "image.png",
        name: "naruto",
      };
      const createThunk = createAnimeThunk(singleReview);

      await createThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
