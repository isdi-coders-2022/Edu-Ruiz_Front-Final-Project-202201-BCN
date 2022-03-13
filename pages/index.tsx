import styled from "styled-components";
import AnimeList from "../components/AnimeList/AnimeList";

const ContainerMain = styled.section`
  min-height: 100vh;
  background-color: #1a0e17;
  margin-bottom: 100px;
`;

const ContainerAnime = styled.section`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Home = (): JSX.Element => {
  return (
    <ContainerMain>
      <ContainerAnime>
        <AnimeList />
      </ContainerAnime>
    </ContainerMain>
  );
};

export default Home;
