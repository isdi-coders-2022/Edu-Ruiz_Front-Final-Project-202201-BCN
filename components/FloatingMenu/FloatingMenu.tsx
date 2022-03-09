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

  & .floating {
    margin-top: 20px;
    color: white;
    display: block;
  }

  @media (min-width: 600px) {
    & .floating {
      color: white;
      display: none;
    }
  }
`;

interface FloatingMenuProps {
  isActive: boolean;
}

const FloatingMenu = ({ isActive }: FloatingMenuProps): JSX.Element => {
  return isActive ? (
    <Menu>
      <section>
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
  ) : (
    <div></div>
  );
};

export default FloatingMenu;
