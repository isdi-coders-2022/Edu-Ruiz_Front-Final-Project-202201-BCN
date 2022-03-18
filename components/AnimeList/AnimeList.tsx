import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Anime from "../../interfaces/Anime";
import AnimeCard from "../AnimeCard/AnimeCard";
import {
  deleteAnimeThunk,
  loadAnimeListThunk,
} from "../../redux/thunks/animeThunks";

const ContainerAnime = styled.div`
  margin: 10px;
  height: 299px;
  min-height: 299px;
  width: 184px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 600px) {
    margin: 10px;
    border-radius: 5px;
    height: 170px;
    min-height: 170px;
    width: 120px;
    min-width: 120px;
  }
`;

const AnimeList = ({ animesList }: any): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAnimeListThunk);
  }, [dispatch]);

  const deleteAnime = (id: string) => {
    dispatch(deleteAnimeThunk(id));
  };

  return (
    <>
      {animesList.map((anime: Anime) => (
        <ContainerAnime key={anime.id}>
          <AnimeCard
            deleteAnime={() => deleteAnime(anime.id as string)}
            id={anime.id}
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
