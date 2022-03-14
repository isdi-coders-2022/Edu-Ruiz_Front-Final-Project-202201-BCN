import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import NewAnime from "../components/newAnime/newAnime";
import store from "../redux/store";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test.only("Then it should show three anchors", () => {
      render(
        <Provider store={store}>
          <NewAnime />
        </Provider>
      );

      const newAnime = screen.getByRole("heading", { name: "New Anime" });

      expect(newAnime).toBeInTheDocument();
    });
  });
});
