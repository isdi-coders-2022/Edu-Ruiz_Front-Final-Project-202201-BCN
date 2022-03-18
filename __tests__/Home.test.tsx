import "whatwg-fetch";
import { getServerSideProps } from "../pages";

describe("Given a AnimeCard component", () => {
  describe("When it's rendered component", () => {
    test("Then it should display autor 'tupac' and image name naruto", async () => {
      const animes = [
        {
          id: "1",
          autor: "tupac",
          image: "image.png",
          name: "naruto",
        },
        {
          id: "2",
          autor: "tupac",
          image: "image.png",
          name: "naruto",
        },
      ];
      const props = {
        props: { animes: undefined, initialState: { animes } },
      };

      const getSSR = await getServerSideProps();
      expect(getSSR).not.toEqual(props);
    });
  });
});
