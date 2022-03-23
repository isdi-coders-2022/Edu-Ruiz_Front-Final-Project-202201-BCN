import { render, screen } from "@testing-library/react";
import Details, { getAllPostIds, getStaticProps } from "../pages/anime/[id]";
import { wrapper } from "../redux/store";

describe("when its rendered", () => {
  test("then it should be find the heading '404 - Page Not Found'", async () => {
    const WrappedComponent = wrapper.withRedux(Details);
    render(<WrappedComponent />);

    await screen.getByRole("img", { name: /404 image/i });
  });
});

const mockLocalStorage = {
  getItem: () =>
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGVwZSIsInVzZXJuYW1lIjoicGVwZSIsImlkIjoiNjIzMzFkZjQ3NDMzMGZiZDI4ZDU5NWUxIiwiaWF0IjoxNjQ3NTE3Mjg4fQ.suBLCba7CxFLfXRDudmvdL1uRzVFGAlnWxkOngW0i1A",
};
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

describe("when its rendered", () => {
  test("then it should be find the heading '404 - Page Not Found'", async () => {
    const props = {
      props: {
        id: "622cdb2eaa2f5a4e7dd16917",
        initialState: {
          anime: [
            {
              autor: "tupac",
              id: "622cdb2eaa2f5a4e7dd16917",
              image: "image.png",
              name: "naruto",
            },
          ],
          user: {},
          users: [],
        },
      },
      revalidate: 5,
    };

    const id = "622cdb2eaa2f5a4e7dd16917";

    const context: any = {
      params: {
        id,
      },
    };

    await getStaticProps(context);

    const WrappedComponent = wrapper.withRedux(Details);
    render(<WrappedComponent />);

    await screen.getByRole("img", { name: /naruto/i });
  });
});

describe("Given a getAllPostIds function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      const returnGetAll = await getAllPostIds(dispatch());

      expect(dispatch).toHaveBeenCalled();

      expect(returnGetAll).toEqual([
        { params: { id: "1" } },
        { params: { id: "2" } },
      ]);
    });
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
        revalidate: 2,
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
