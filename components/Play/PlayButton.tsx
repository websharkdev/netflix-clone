import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";

type Props = {
  id: string;
};

export const PlayButton = ({ id }: Props) => {
  const router = useRouter();
  // const { data } = useMovie(id);

  // console.log(data);
  return (
    <button
      // className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
      onClick={() => router.push(`/watch/${id}`)}
      className="bg-white rounded-md py-1 px-2 md:py-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"
    >
      <BsFillPlayFill size={24} />
      Play
    </button>
  );
};
