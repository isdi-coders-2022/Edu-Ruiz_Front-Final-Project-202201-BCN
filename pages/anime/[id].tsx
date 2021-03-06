import { GetStaticPaths, GetStaticPropsContext } from "next";

import { useSelector } from "react-redux";
import AnimeDetail from "../../components/AnimeDetail/AnimeDetail";
import NotFound from "../../components/NotFound/NotFound";

import { wrapper } from "../../redux/store";
import { loadAnimeThunk } from "../../redux/thunks/animeThunks";

const Details = (): JSX.Element => {
  const animeDetail: any = useSelector<any, any>((state: any) => state.anime);

  if (!animeDetail.id) {
    return <NotFound />;
  }

  return <AnimeDetail animeDetail={animeDetail} />;
};

export const getAllPostIds = async (context?: GetStaticPropsContext) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ANIME4ME}animes/`, {
    method: "GET",
  });
  const { animes } = await res.json();
  return animes.map((post: any) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dynamicIDS = await getAllPostIds();
  return {
    paths: dynamicIDS,
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store): any =>
    async (context: GetStaticPropsContext) => {
      const id = context.params?.id;
      try {
        await store.dispatch<any>(loadAnimeThunk(id as string));
        return {
          props: {
            id,
          },
          revalidate: 2,
        };
      } catch (error) {
        return { notFound: true };
      }
    }
);

export default Details;
