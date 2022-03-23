import { render, screen } from "@testing-library/react";
import "whatwg-fetch";
import Home, { getServerSideProps } from "../pages";
import { wrapper } from "../redux/store";

describe("Given a AnimeCard component", () => {
  describe("When it's rendered component", () => {
    test("Then it should display autor 'tupac' and image name naruto", async () => {
      const props = {
        props: {
          initialState: {
            anime: {},
            animes: [
              {
                autor: "tupac",
                id: "1",
                image: "image.png",
                name: "naruto",
              },
              {
                autor: "tupac",
                id: "2",
                image: "image.png",
                name: "naruto",
              },
            ],
            user: {},
            users: [],
          },
        },
      };

      const context: any = {
        params: {},
      };

      const getSSR = await getServerSideProps(context);
      expect(getSSR).toEqual(props);
    });
  });
});

describe("Given the navigation layout", () => {
  describe("When rendered", () => {
    test("It should find 3 links", async () => {
      const WrappedComponent = wrapper.withRedux(Home);
      render(<WrappedComponent />);

      const images = await screen.getAllByRole("img", { name: /naruto/i });

      expect(images[0]).toBeInTheDocument();
    });
  });
});
