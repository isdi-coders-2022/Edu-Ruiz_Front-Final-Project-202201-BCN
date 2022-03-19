/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Anime from "../../interfaces/Anime";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

const AnimeCardStyle = styled.section`
  border-radius: 5px;
  transition: 0.3s;
  position: relative;

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

  & .iconDOT {
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
      text-align: center;
      padding: 6px;

      & .iconDOT {
        display: block;
      }

      & .autor {
        padding-left: 5px;
        display: block;
        color: #fff;
        font-size: 14px;
        font-family: "Readex Pro";
      }

      & .container-button {
        position: absolute;
        background-color: #ff006b;
        top: 10px;
        right: 0;
        height: 25px;
        width: 25px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border: 0.5px solid #000;
        transition: 0.2s;

        :hover {
          padding-right: 60px;
          top: 10px;
          right: 0;
          & .iconDOT {
            display: none;
          }

          & .buttons {
            display: block;
            background: none;
            color: #000;
            border: none;
            padding: 5px;
            transition: 0.3s;
          }
          & .buttons:active {
            color: #fff;
            background-color: #000;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    transition: 0.4s;
    & section {
      display: flex;
      align-items: center;
      text-align: center;
      padding: 6px;
      & .container-button {
        display: none;
      }

      & .autor {
        padding: 10px;
        display: block;
        color: #fff;
        font-family: "Readex Pro";
      }
    }

    & .images {
      object-fit: cover;
      object-position: center;
      border-radius: 5px;
      height: 200px;
      min-height: 200px;
      width: 120px;
      min-width: 150px;
      background-color: #ff006b;
      display: flex;
      flex-direction: column;
      padding: 2px;
      align-items: center;
    }
  }
`;
const ButtonStyle = styled.button`
  display: none;
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
          <section className="container-button">
            <FontAwesomeIcon className="iconDOT" icon={faEllipsis} />
            <Link href={`/anime/${id}`} passHref>
              <ButtonStyle className="buttons">
                <FontAwesomeIcon className="icon" icon={faEye} />
              </ButtonStyle>
            </Link>
            <ButtonStyle
              onClick={() => deleteAnime(id as string)}
              className="buttons"
            >
              <FontAwesomeIcon className="icon" icon={faTrash} />
            </ButtonStyle>
          </section>
        </section>
      </AnimeCardStyle>
    </>
  );
};

export default AnimeCard;
