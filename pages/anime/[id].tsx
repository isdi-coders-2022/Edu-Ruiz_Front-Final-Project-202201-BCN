import { GetStaticPaths, GetStaticPropsContext } from "next";
import AnimeDetail from "../../components/Anime/AnimeDetail";

import { wrapper } from "../../redux/store";
import { loadAnimeThunk } from "../../redux/thunks/animeThunks";

const details = (): JSX.Element => {
  return <AnimeDetail />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "000000000000000000000000",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context: GetStaticPropsContext) => {
    const id = context.params?.id;
    try {
      console.log("Context: " + context.params);
      await store.dispatch<any>(loadAnimeThunk(id as string));
      return { props: { id } };
    } catch (error) {
      return { props: { id: "000000000000000000000000" } };
    }
  }
);

export default details;
