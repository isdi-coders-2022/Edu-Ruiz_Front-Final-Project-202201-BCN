/* eslint-disable @next/next/no-img-element */
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const AnimeDetail = (): JSX.Element => {
  debugger;
  const animeDetail = useSelector((state: any) => state.anime);
  debugger;

  return (
    <>
      <img className="images" src={animeDetail.image} alt={animeDetail.name} />
      <section>
        <p className="autor">{animeDetail.name}</p>
        <span className="line"></span>
        <button onClick={animeDetail.deleteAnime} className="buttons">
          <FontAwesomeIcon icon={faTrash} title="deleteButton" />
        </button>
      </section>
    </>
  );
};

export default AnimeDetail;
