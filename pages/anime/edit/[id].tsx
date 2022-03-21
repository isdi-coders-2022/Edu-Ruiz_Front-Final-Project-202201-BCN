import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NewAnime from "../../../components/newAnime/newAnime";
import { wrapper } from "../../../redux/store";
import { loadAnimeThunk } from "../../../redux/thunks/animeThunks";

const ContNewAnime = styled.section`
  min-height: 100vh;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a0e17;
`;

const UpdateAnime: React.ReactNode = (): JSX.Element => {
  const anime = useSelector((state: any) => state.anime);

  return (
    <ContNewAnime>
      <NewAnime anime={anime} />
    </ContNewAnime>
  );
};

export const getAllPostIds = async (context?: GetStaticPropsContext) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ANIME4ME}animes/`, {
    method: "GET",
  });
  debugger;
  const { animes } = await res.json();
  debugger;
  return animes.map((post: any) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dynamicIds = await getAllPostIds();
  return {
    paths: dynamicIds,
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
          revalidate: 5,
          props: { id },
        };
      } catch (error) {
        return {
          notFound: true,
        };
      }
    }
);
export default UpdateAnime;
