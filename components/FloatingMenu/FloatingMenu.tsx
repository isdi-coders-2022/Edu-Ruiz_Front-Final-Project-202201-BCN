import Link from "next/link";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 60px;
  right: 0;
  position: absolute;
  background-color: black;
  border: 2px solid #ff006b;
  height: 80vh;
  width: 200px;
  padding: 10px;
  font-family: "Readex Pro";
  z-index: 999;

  & .floating {
    margin-top: 20px;
    color: white;
    display: block;
  }

  @media (min-width: 600px) {
    display: none;
    position: absolute;
    z-index: -99;

    & .floating {
      color: white;
      display: none;
    }
  }
`;

const TouchDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
`;

const Blanc = styled.section`
  display: none;
`;
interface FloatingMenuProps {
  isActive: boolean;
  actionOnClick: React.MouseEventHandler<HTMLDivElement>;
}

const FloatingMenu = ({
  isActive,
  actionOnClick,
}: FloatingMenuProps): JSX.Element => {
  return isActive ? (
    <>
      <TouchDiv onClick={actionOnClick} className="touch"></TouchDiv>
      <Menu>
        <section>
          <Link href="/">
            <a>
              <p className="floating">home</p>
            </a>
          </Link>
          <Link href="/profile">
            <a>
              <p className="floating">profile</p>
            </a>
          </Link>
          <Link href="/my-anime">
            <a>
              <p className="floating">my Anime</p>
            </a>
          </Link>
          <Link href="/new-anime">
            <a>
              <p className="floating">new Anime</p>
            </a>
          </Link>
        </section>
        <Link href="/login">
          <a>
            <p className="floating">sign out</p>
          </a>
        </Link>
      </Menu>
    </>
  ) : (
    <Blanc className="blanc"></Blanc>
  );
};

export default FloatingMenu;
