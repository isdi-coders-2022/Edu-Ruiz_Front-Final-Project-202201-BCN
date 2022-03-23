/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
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
          border: 2px solid #000;
          box-shadow: 3px 3px 3px 0px #000;
          border-radius: 5px;
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
    & .container {
      height: 80vh;
      width: 300px;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 10px;
      background-color: #ff006a;
      & .container-top {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        & .contimg {
          padding: 10px;
          margin-left: 40px;
          & .images {
            border: 2px solid #000;
            box-shadow: 3px 3px 3px 0px #000;
            border-radius: 5px;
            object-fit: cover;
            margin-right: 50px;
            height: 150px;
            width: 100px;
            transition: 0.4s;
          }
        }
      }

      & .container-bottom {
        & button {
          margin: 2px;
        }
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

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    token ?? router.push("/login");
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
            <Link href={`/anime/edit/${animeDetail.id}`} passHref>
              <ButtonStyle className="buttons">edit anime</ButtonStyle>
            </Link>
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
