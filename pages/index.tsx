import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPage, NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

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
      <div className="text-2xl text-green-500">Hello!</div>
      <p className="text-white">Logged is as {user?.name}</p>

      <button onClick={() => signOut()} className="h-10 w-50 bg-white">
        Logout
      </button>
    </>
  );
};

export default Home;
