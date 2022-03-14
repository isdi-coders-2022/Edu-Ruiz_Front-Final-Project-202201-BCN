/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Anime from "../../interfaces/Anime";
import { deleteAnimeThunk } from "../../redux/thunks/animeThunks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

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

const AnimeCard = ({ id, name, image }: Anime): JSX.Element => {
  const dispatch = useDispatch();

  const deleteAnime = (id: string) => {
    toast(`${name} is deleted 💀`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    dispatch(deleteAnimeThunk(id));
  };

  return (
    <>
      <AnimeCardStyle>
        <img className="images" src={image} alt={name} />
        <section>
          <p className="autor">{name}</p>
          <span className="line"></span>
          <button onClick={() => deleteAnime(id as string)} className="buttons">
            <FontAwesomeIcon icon={faTrash} title="delete-icon" />
          </button>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme={"dark"}
          />
        </section>
      </AnimeCardStyle>
    </>
  );
};

export default AnimeCard;
