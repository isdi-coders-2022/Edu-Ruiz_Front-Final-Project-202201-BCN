import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import AnimeCard from "../components/AnimeCard/AnimeCard";
import store from "../redux/store";
import userEvents from "@testing-library/user-event";
import "whatwg-fetch";

describe("Given a AnimeCard component", () => {
  describe("When it's rendered component", () => {
    test("Then it should display autor 'tupac' and image name naruto", () => {
      const anime = {
        id: "2",
        autor: "tupac",
        image: "image.png",
        name: "naruto",
      };
      render(
        <Provider store={store}>
          <AnimeCard
            id={anime.id}
            autor={anime.autor}
            name={anime.name}
            image={anime.image}
          />
        </Provider>
      );

      const animeAutor = screen.getByText("tupac");
      const animeImage = screen.getByRole("img", { name: "naruto" });

      expect(animeAutor).toBeInTheDocument();
      expect(animeImage).toBeInTheDocument();
    });
  });
});

describe("When actionOnClick", () => {
  test("then it should render a action", async () => {
    const anime = {
      id: "2",
      autor: "tupac",
      image: "image.png",
      name: "naruto",
    };

    render(
      <Provider store={store}>
        <AnimeCard
          id={anime.id}
          autor={anime.autor}
          name={anime.name}
          image={anime.image}
        />
      </Provider>
    );

    const deleteButton = await screen.findByText("delete");
    userEvents.click(deleteButton);
    expect(deleteButton).toBeInTheDocument();
  });
});
