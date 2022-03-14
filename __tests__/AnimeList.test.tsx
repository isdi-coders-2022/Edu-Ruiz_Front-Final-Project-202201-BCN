import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import AnimeList from "../components/AnimeList/AnimeList";
import store from "../redux/store";

describe("Given a AnimeCard component", () => {
  describe("When it's rendered component", () => {
    test("Then it should display autor 'tupac' and image name naruto", async () => {
      render(
        <Provider store={store}>
          <AnimeList />
        </Provider>
      );

      const test = await screen.findAllByText("naruto");

      expect(test[0]).toBeInTheDocument();
    });
  });
});
