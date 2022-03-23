import actionsTypes from "../redux/actions/actionsTypes";
import usersReducer from "../redux/reducer/userReducer";

describe("Given a animeReducer function", () => {
  describe("When it receives an action with an array of crytos", () => {
    test("Then it should return a NewAnimeReducer with the new array", () => {
      const users = [
        {
          autor: "tupac",
          image: "image.png",
          name: "naruto",
        },
      ];

      const currentState = [
        {
          autor: "tupac",
          image: "image.png",
          name: "naruto",
        },
      ];

      const action = {
        type: actionsTypes.loadUsers,
        users,
      };

      const expectedOutput = usersReducer(currentState, action);
      expect(expectedOutput).toEqual(users);
    });
  });

  describe("When it doesn't receives an action", () => {
    test("Then it should return the same array", () => {
      const currentState: [] = [];

      const action = {
        type: actionsTypes,
      };

      const newState = usersReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });
});

describe("When it render", () => {
  test("Then it should return length 0", () => {
    const newProjects = usersReducer();

    expect(newProjects).toHaveLength(0);
  });
});
