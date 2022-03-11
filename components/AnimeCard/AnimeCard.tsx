/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Anime from "../../interfaces/Anime";

const ContImg = styled.section`
  & .images {
    height: 260px;
    min-height: 260px;
    width: 180px;
    min-width: 180px;
  }

  @media (max-width: 600px) {
    & .images {
      height: 150px;
      min-height: 150px;
      width: 100px;
      min-width: 100px;
    }
  }
`;

const AnimeCardStyle = styled.section`
  & .autor {
    display: none;
  }

  :hover {
    background-color: #ff006a;
    & .autor {
      display: block;
      color: #fff;
      font-family: "Readex Pro";
    }
  }
`;

const AnimeCard = ({ autor, name, image }: Anime): JSX.Element => {
  return (
    <>
      <AnimeCardStyle>
        <ContImg>
          <img className="images" src={image} alt={name} />
        </ContImg>
        <p className="autor">{autor}</p>
      </AnimeCardStyle>
    </>
  );
};

export default AnimeCard;
