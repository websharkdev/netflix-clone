import { Billboard, MovieList, Navbar, InfoModal } from "@/components";
import useFavorites from "@/hooks/useFavorites";
import useInfo from "@/hooks/useInfo";
import useMovieList from "@/hooks/useMovieList";
import Meta from "@/lib/meta";
import { NextPage, NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Home: NextPage = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  const { isOpen, closeModal } = useInfo();

  return (
    <Meta title="Home">
      <>
        <InfoModal visible={isOpen} onClose={closeModal} />
        <Navbar />
        <Billboard />
        <div className="pb-40">
          <MovieList title="Trending now" data={movies} />
          <MovieList title="My List" data={favorites} />
        </div>
      </>
    </Meta>
  );
};

export default Home;
