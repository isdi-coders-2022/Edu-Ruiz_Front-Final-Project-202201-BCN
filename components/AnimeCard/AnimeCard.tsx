/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Anime from "../../interfaces/Anime";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const AnimeCardStyle = styled.section`
  border-radius: 5px;
  transition: 0.3s;

  & .images {
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
    height: 250px;
    min-height: 250px;
    width: 180px;
    min-width: 180px;
  }

  & .autor {
    display: none;
  }

  & .buttons {
    display: none;
  }

  :hover {
    background-color: #ff006b;
    display: flex;
    flex-direction: column;
    padding: 2px;
    align-items: center;

    box-shadow: 3px 3px 6px 0px #000;

    & .images {
      border-radius: 5px;
    }

    & section {
      display: flex;
      align-items: center;

      & .autor {
        padding-left: 5px;
        display: block;
        color: #fff;
        font-size: 14px;
        font-family: "Readex Pro";
      }

      & .line {
        background-color: #fff;
        width: 2px;
        height: 30px;
        margin: 10px;
      }

      & .buttons {
        display: block;
        color: #fff;
        font-family: monospace;
        padding: 5px;
        background: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      & .buttons:hover {
        background-color: #0006;
        color: #fff;
      }

      & .buttons:active {
        background-color: #0008;
      }
    }
  }

  @media (max-width: 600px) {
    background-color: #ff006b;
    display: flex;
    flex-direction: column;
    padding: 2px;
    align-items: center;
    justify-content: center;
    width: 130px;

    & .autor {
      padding: 10px;
      display: block;
      color: #fff;
      font-family: "Readex Pro";
    }

    & .images {
      border-radius: 5px;
      height: 170px;
      min-height: 170px;
      width: 120px;
      min-width: 120px;
    }
  }
`;

const AnimeCard = ({ id, name, image, deleteAnime }: Anime): JSX.Element => {
  return (
    <>
      <AnimeCardStyle>
        <Link href={`/anime/${id}`} passHref>
          <img className="images" src={image} alt={name} />
        </Link>
        <section>
          <p className="autor">{name}</p>
          <span className="line"></span>
          <button onClick={deleteAnime} className="buttons">
            <FontAwesomeIcon icon={faTrash} title="deleteButton" />
          </button>
        </section>
      </AnimeCardStyle>
    </>
  );
};

export default AnimeCard;
