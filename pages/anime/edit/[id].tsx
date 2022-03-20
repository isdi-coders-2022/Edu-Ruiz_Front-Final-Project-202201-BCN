import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useSelector } from "react-redux";
import NewAnime from "../../../components/newAnime/newAnime";
import NotFound from "../../../components/NotFound/NotFound";

import { wrapper } from "../../../redux/store";
import { updateAnimeThunk } from "../../../redux/thunks/animeThunks";

const Details = (): JSX.Element => {
  const animeDetail: any = useSelector<any, any>((state: any) => state.anime);

  if (!animeDetail.id) {
    return <NotFound />;
  }

  return <NewAnime />;
};

export const getAllPostIds = async (context?: GetStaticPropsContext) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ANIME4ME}animes/`, {
    method: "GET",
  });
  const { animes }: any = await res.json();
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
      const id: any = context.params?.id;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_ANIME4ME}animes/${id}`,
        {
          method: "GET",
        }
      );
      try {
        await store.dispatch<any>(updateAnimeThunk(response, id as string));
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
