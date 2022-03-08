import Link from "next/link";
import styled from "styled-components";

const ContainerNav = styled.section`
  background-color: #ff006b;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & a {
    font-size: 18px;
    font-family: "Readex Pro";
  }
`;

const Navigation = (): JSX.Element => {
  return (
    <ContainerNav>
      <Link href="/my-anime">my Anime</Link>
      <Link href="/new-anime">new Anime</Link>
      <Link href="/" passHref>
        <a>
          <h1 className="title">Anime4me</h1>
        </a>
      </Link>
      <Link href="/profile">profile</Link>
      <Link href="/login">sign out</Link>
    </ContainerNav>
  );
};

export default Navigation;
