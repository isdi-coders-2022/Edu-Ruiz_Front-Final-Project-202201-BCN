/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const ContainerError = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1 {
    margin-top: 20px;
    font-family: "Readex Pro";
    color: #ff006b;
  }
`;

const Custom404 = () => {
  return (
    <ContainerError>
      <img
        src="https://c.tenor.com/5zFETC6vg_AAAAAC/anime-girl-get-hit-by-car-k-iller-h-ase.gif"
        alt="404 image"
      />
      <h1>404 - Page Not Found</h1>
    </ContainerError>
  );
};

export default Custom404;
