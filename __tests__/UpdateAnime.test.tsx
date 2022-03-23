import { render, screen } from "@testing-library/react";
import UpdateAnime, {
  getAllPostIds,
  getStaticProps,
} from "../pages/anime/edit/[id]";
import { wrapper } from "../redux/store";
import "whatwg-fetch";

describe("when its rendered", () => {
  test("then it should be find the heading '404 - Page Not Found'", async () => {
    const WrappedComponent = wrapper.withRedux(UpdateAnime);
    render(<WrappedComponent />);

    await screen.getByRole("textbox", { name: /name/i });
  });
});

describe("Given getStaticProps from [id]", () => {
  describe("When called with context containing a valid taskID and projectId", () => {
    test("it should return that task", async () => {
      const id = "622cdb2eaa2f5a4e7dd16917";

      const expectedReturn = {
        props: {
          id: "622cdb2eaa2f5a4e7dd16917",
          initialState: {
            anime: {
              autor: "tupac",
              id: "622cdb2eaa2f5a4e7dd16917",
              image: "image.png",
              name: "naruto",
            },
            animes: [],
            user: {},
            users: [],
          },
        },
        revalidate: 5,
      };

      const context = {
        params: {
          id,
        },
      };

      const result = await getStaticProps(context);
      expect(result).toEqual(expectedReturn);
    });
  });
});

describe("Given a getAllPostIds function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await getAllPostIds(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
