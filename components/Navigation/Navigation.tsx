import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Burguer from "../Burguer/Burguer";
import FloatingMenu from "../FloatingMenu/FloatingMenu";

const ContainerNav = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ff006b;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 2px 3px 0px #000;
  z-index: 999;

  & .navigation {
    font-size: 18px;
    font-family: "Readex Pro";
    text-decoration: underline #0000;
    transition: 0.2s;
    display: inline-block;
    position: relative;
  }

  & .navigation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  & .navigation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  & .title {
    font-family: "Readex Pro";
    display: inline-block;
    position: relative;
  }

  & .title:after {
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

  & .title:hover:after {
    transform: scaleX(1);
    transform-origin: bottom center;
  }

  @media (max-width: 600px) {
    & .navigation {
      display: none;
    }
  }
`;

const Navigation = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleActive = () => {
    setIsActive(isActive ? false : true);
  };

  return (
    <ContainerNav>
      <Link href="/my-anime">
        <a>
          <p className="navigation">my Anime</p>
        </a>
      </Link>
      <Link href="/new-anime">
        <a>
          <p className="navigation">new Anime</p>
        </a>
      </Link>
      <Link href="/" passHref>
        <a>
          <h1 className="title">Anime4me</h1>
        </a>
      </Link>
      <Link href="/profile">
        <a>
          <p className="navigation">profile</p>
        </a>
      </Link>
      <Link href="/login">
        <a>
          <p className="navigation">sign out</p>
        </a>
      </Link>

      <FloatingMenu actionOnClick={toggleActive} isActive={isActive} />
      <Burguer actionOnClick={toggleActive} isActive={isActive} />
    </ContainerNav>
  );
};

export default Navigation;
