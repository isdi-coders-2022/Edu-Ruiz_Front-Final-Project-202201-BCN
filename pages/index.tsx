import styled from "styled-components";
import AnimeList from "../components/AnimeList/AnimeList";

const ContainerMain = styled.section`
  min-height: 100vh;
  margin-top: 60px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #1a0e17;
`;

const Home = (): JSX.Element => {
  return (
    <ContainerMain>
      <AnimeList />
    </ContainerMain>
  );
};

export default Home;
