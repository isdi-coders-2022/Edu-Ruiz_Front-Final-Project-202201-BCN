import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Anime from "../../interfaces/Anime";
import AnimeCard from "../AnimeCard/AnimeCard";
import { RootState } from "../../redux/store";
import { loadAnimeListThunk } from "../../redux/thunks/animeThunks";

const ContainerAnime = styled.div`
  height: 260px;
  min-height: 260px;
  margin: 10px;
  width: 180px;
  min-width: 180px;
  background-color: #ff006a;

  @media (max-width: 600px) {
    height: 150px;
    min-height: 150px;
    margin: 10px;
    width: 100px;
    min-width: 100px;
  }
`;

const AnimeList = (): JSX.Element => {
  const animesList = useSelector((state: RootState) => state.animes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAnimeListThunk);
  }, [dispatch]);

  return (
    <>
      {animesList.map((anime: Anime) => (
        <ContainerAnime key={anime.id}>
          <AnimeCard
            autor={anime.autor}
            name={anime.name}
            image={anime.image}
          />
        </ContainerAnime>
      ))}
    </>
  );
};

export default AnimeList;
