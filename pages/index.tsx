import styled from "styled-components";
import AnimeList from "../components/AnimeList/AnimeList";
import { wrapper } from "../redux/store";
import { loadAnimeListThunk } from "../redux/thunks/animeThunks";
import "whatwg-fetch";
import { NextPage } from "next";

const ContainerMain = styled.section`
  min-height: 100vh;
  background-color: #1a0e17;
  margin-bottom: 100px;
`;

const ContainerAnime = styled.section`
  min-height: 80vh;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Home: NextPage = () => {
  return (
    <ContainerMain>
      <ContainerAnime>
        <AnimeList />
      </ContainerAnime>
    </ContainerMain>
  );
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch<any>(loadAnimeListThunk());
    return { props: {} };
  }
);
