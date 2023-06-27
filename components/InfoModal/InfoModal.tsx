import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PlayButton } from "../Play";
import { FavoriteButton } from "../Favorites";
import useInfo from "@/hooks/useInfo";
import useMovie from "@/hooks/useMovie";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export const InfoModal = ({ visible, onClose }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(!!visible);

  const { movieId } = useInfo();
  const { data } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-300" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96">
            <video
              autoPlay
              className="h-full w-full brightness-[60%] object-cover"
              muted
              loop
              src={data?.videoUrl}
              poster={data?.thumbnailUrl}
            ></video>

            <div
              className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
              onClick={handleClose}
            >
              <AiOutlineClose className="text-white" size={24} />
            </div>

            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>

              <div className="flex flex-row gap-4 items-center">
                <PlayButton id={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>

          <div className="px-12 py-8">
            <p className="text-green-400 text-lg font-semibold mt-4">New</p>
            <p className="text-white text-lg">
              {data?.duration} • {data?.genre}
            </p>
            <p className="text-white text-lg">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
