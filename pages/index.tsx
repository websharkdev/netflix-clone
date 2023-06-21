import { Navbar } from "@/components";
import useCurrentUser from "@/hooks/useCurrentUser";
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
  const { data: user } = useCurrentUser();

  user && console.log(user);
  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
