/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
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

  & h2 {
    margin-top: 20px;
    font-family: "Readex Pro";
    color: #ff006b;
    cursor: pointer;
    display: inline-block;
    position: relative;
  }

  & h2:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom;
    transition: transform 0.3s ease-out;
  }

  & h2:hover:after {
    transform: scaleX(1);
    transform-origin: bottom center;
  }

  @media (max-width: 600px) {
    & img {
      height: 170px;
      width: 300px;
    }
  }
`;

const NotFound = () => {
  return (
    <ContainerError>
      <img
        src="https://c.tenor.com/5zFETC6vg_AAAAAC/anime-girl-get-hit-by-car-k-iller-h-ase.gif"
        alt="404 image"
      />
      <h1>404 - Page Not Found</h1>
      <Link href="/" passHref>
        <h2>return to home</h2>
      </Link>
    </ContainerError>
  );
};

export default NotFound;
