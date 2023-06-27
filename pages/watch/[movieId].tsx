import useMovie from "@/hooks/useMovie";
import Meta from "@/lib/meta";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

type Props = {};

const Watch = (props: Props) => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  return (
    <Meta title={data?.title}>
      <div className="h-screen w-screen bg-black">
        <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
          <AiOutlineArrowLeft
            onClick={() => router.push("/")}
            className="text-white cursor-pointer"
            size={36}
          />
          <p className="text-white text-1xl md:text-3xl font-bold">
            <span className="font-light">Whatching: </span>
            {data?.title}
          </p>
        </nav>

        <video
          src={data?.videoUrl}
          autoPlay
          controls
          className="h-full w-full"
        ></video>
      </div>
    </Meta>
  );
};

export default Watch;
