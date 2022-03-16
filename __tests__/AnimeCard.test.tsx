import { render, screen } from "@testing-library/react";
import AnimeCard from "../components/AnimeCard/AnimeCard";
import "whatwg-fetch";
import userEvent from "@testing-library/user-event";

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
        <AnimeCard
          id={anime.id}
          autor={anime.autor}
          name={anime.name}
          image={anime.image}
          deleteAnime
        />
      );

      const animeImage = screen.getByRole("img", { name: "naruto" });

      expect(animeImage).toBeInTheDocument();
    });
  });
});

describe("Given AnimeCard component", () => {
  test("Then it should a button click action", () => {
    const mock = jest.fn();
    const anime = {
      id: "2",
      autor: "tupac",
      image: "image.png",
      name: "naruto",
    };

    render(
      <AnimeCard
        id={anime.id}
        autor={anime.autor}
        name={anime.name}
        image={anime.image}
        deleteAnime={mock}
      />
    );

    const expectedElement = screen.getByTitle("deleteButton");
    userEvent.click(expectedElement);

    expect(mock).toHaveBeenCalled();
  });
});
