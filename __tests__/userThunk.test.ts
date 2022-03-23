import {
  loadProfileThunk,
  loadUsersThunk,
  registerThunk,
  userThunk,
} from "../redux/thunks/userThunk";
import { server } from "../mocks/server";
import "whatwg-fetch";
import { useRouter } from "next/router";

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

jest.mock("jwt-decode", () => () => ({ token: "uwu" }));
jest.mock("next/router", () => {
  const router = {
    query: {},
    push: jest.fn(),
  };
  return {
    useRouter: () => router,
  };
});

describe("Given a userThunk", () => {
  describe("When it recive a username and password", () => {
    test("Then it should return a dispatch has been called", async () => {
      const router = useRouter();

      const usernameToken = "uwu";
      const dispatch = jest.fn();
      const user = { username: usernameToken, password: "uwu" };

      const loginUser = userThunk(user, router);
      await loginUser(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadUsersThunk", () => {
  describe("When it recive a username and password", () => {
    test("Then it should return a dispatch has been called", async () => {
      const usernameToken = "uwu";
      const dispatch = jest.fn();
      const users = [{ username: usernameToken, password: "uwu" }];

      const loginUser = loadUsersThunk(users);
      await loginUser(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadUsersThunk", () => {
  describe("When it recive a username and password", () => {
    test("Then it should return a dispatch has been called", async () => {
      const usernameToken = "uwu";
      const dispatch = jest.fn();
      const user = { username: usernameToken, password: "uwu" };

      const loginUser = loadProfileThunk(user);
      await loginUser(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a createReviewThunk", () => {
  describe("When its invoked with a singleReview", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      const createUser = {
        id: "2",
        autor: "tupac",
        image: "image.png",
        name: "naruto",
      };
      const createThunk = registerThunk(createUser);

      await createThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
