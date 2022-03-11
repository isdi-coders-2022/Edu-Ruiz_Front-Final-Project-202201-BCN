/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Anime from "../../interfaces/Anime";

const AnimeCardStyle = styled.section`
  border-radius: 5px;
  transition: 0.2s;

  & .images {
    border-radius: 5px;
    height: 250px;
    min-height: 250px;
    width: 180px;
    min-width: 180px;
  }

  & .autor {
    display: none;
  }

  :hover {
    background-color: #ff006b;
    display: flex;
    flex-direction: column;
    padding: 2px;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px 6px 0px #000;
    & .autor {
      padding: 10px;
      display: block;
      color: #fff;
      font-family: "Readex Pro";
    }

    & .images {
      border-radius: 5px;
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

const AnimeCard = ({ autor, name, image }: Anime): JSX.Element => {
  return (
    <>
      <AnimeCardStyle>
        <img className="images" src={image} alt={name} />
        <p className="autor">{autor}</p>
      </AnimeCardStyle>
    </>
  );
};

export default AnimeCard;
