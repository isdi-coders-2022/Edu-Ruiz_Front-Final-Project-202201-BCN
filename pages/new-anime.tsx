import styled from "styled-components";
import NewAnime from "../components/newAnime/newAnime";

const ContNewAnime = styled.section`
  min-height: 100vh;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a0e17;
`;

const newAnime = () => {
  return (
    <>
      <ContNewAnime>
        <NewAnime />
      </ContNewAnime>
    </>
  );
};

export default newAnime;
