/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Custom404 from "../../pages/404";
import { deleteAnimeThunk } from "../../redux/thunks/animeThunks";

const ContainerDetail = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    height: 500px;
    width: 600px;
    background-color: #ff006a;

    & .container-top {
      display: flex;
      justify-content: space-around;
      padding: 10px;
      margin-top: 20px;

      & .contimg {
        & .images {
          object-fit: cover;
          margin-right: 50px;
          height: 200px;
          width: 150px;
          transition: 0.4s;
        }
      }
    }

    & .container-mid {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 50px;
      & .param {
        font-size: 20px;
        font-weight: bold;
        font-family: "Readex Pro";
      }
      & .text {
        margin-bottom: 30px;
        font-size: 15px;
        font-family: "Readex Pro";
      }
    }

    & .container-bottom {
      display: flex;
      justify-content: space-between;
      padding: 30px;
    }
  }

  @media (max-width: 600px) {
    height: 200vh;

    & .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 10px;
      background-color: #ff006a;
      & .container-top {
        & .contimg {
          & .images {
          }
        }
      }

      & .container-mid {
        & .param {
        }
        & .text {
        }
      }

      & .container-bottom {
      }
    }
  }
`;

const ButtonStyle = styled.button`
  background: none;
  border: none;
  background-color: #000;
  width: 260px;
  height: 30px;
  color: #fff;
  border-radius: 5px;
  transform: 1s;
  cursor: pointer;
  transition: 0.2s;

  :active {
    color: #000;
    background-color: #fff;
  }
`;

const AnimeDetail = ({ animeDetail }: any): JSX.Element => {
  const router = useRouter();

  const dispatch = useDispatch();
  const deleteAnime = (id: string) => {
    router.push("/");
    dispatch(deleteAnimeThunk(id));
  };

  if (router.isFallback) {
    return (
      <>
        <Custom404 />
      </>
    );
  }

  return (
    <>
      <ContainerDetail>
        <section className="container">
          <section className="container-top">
            <div className="contimg">
              <img
                className="images"
                src={animeDetail.image}
                alt={animeDetail.name}
              />
            </div>
            <ButtonStyle className="buttons">edit anime</ButtonStyle>
          </section>
          <section className="container-mid">
            <p className="param">name:</p>
            <p className="text">{animeDetail.name}</p>
            <p className="param">author:</p>
            <p className="text">{animeDetail.autor}</p>
            <span className="line"></span>
          </section>
          <section className="container-bottom">
            <ButtonStyle onClick={animeDetail.deleteAnime} className="buttons">
              add
            </ButtonStyle>
            <ButtonStyle
              onClick={() => deleteAnime(animeDetail.id as string)}
              className="buttons"
            >
              delete
            </ButtonStyle>
          </section>
        </section>
      </ContainerDetail>
    </>
  );
};

export default AnimeDetail;
