import styled from "styled-components";
import AnimeList from "../components/AnimeList/AnimeList";

const ContainerMain = styled.section`
  min-height: 92.2vh;
  margin-top: 60px;
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: #000;
`;

const Home = (): JSX.Element => {
  return (
    <ContainerMain>
      <AnimeList />
    </ContainerMain>
  );
};

export default Home;
