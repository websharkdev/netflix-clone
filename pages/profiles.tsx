import { NextPage, NextPageContext } from "next";
import { getSession } from "next-auth/react";

type Props = {};

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

const Profiles: NextPage = (props: Props) => {
  return (
    <div>
      <p className="text-white text-4xl">profiles</p>
    </div>
  );
};
export default Profiles;
