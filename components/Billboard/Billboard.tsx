import useBillboard from "@/hooks/useBillboard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PlayButton } from "../Play";
import { useCallback } from "react";
import useInfo from "@/hooks/useInfo";

type Props = {};

export const Billboard = (props: Props) => {
  const { data } = useBillboard();
  const { openModal } = useInfo();

  const handleModalOpen = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className="relative h-[56.25vw]">
      <video
        autoPlay
        muted
        loop
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition"
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
      ></video>
      <div className="absolute top-[30%] mt:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>

        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton id={data?.id} />
          <button
            onClick={handleModalOpen}
            className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 text-xs w-auto lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
          >
            <AiOutlineInfoCircle className="mr-2" />
            More info
          </button>
        </div>
      </div>
    </div>
  );
};
