import { render, screen } from "@testing-library/react";
import AnimeCard from "../components/AnimeCard/AnimeCard";

describe("Given a AnimeCard component", () => {
  describe("When it's rendered component", () => {
    test("Then it should display autor 'tupac' and image name naruto", () => {
      const anime = {
        autor: "tupac",
        image: "image.png",
        name: "naruto",
      };

      render(
        <AnimeCard autor={anime.autor} name={anime.name} image={anime.image} />
      );

      const animeAutor = screen.getByText("tupac");
      const animeImage = screen.getByRole("img", { name: "naruto" });

      expect(animeAutor).toBeInTheDocument();
      expect(animeImage).toBeInTheDocument();
    });
  });
});
