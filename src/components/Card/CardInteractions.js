import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import likeCarService from "@/services/likeCarService";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";


const CardInteraactions = ({ car }) => {
  const router = useRouter();

  const likeHandler = async (carId) => {
    try {
      const { data } = await likeCarService(carId);
      routerPush(router);
    } catch (err) {
    }
  };

  return (
    <button onClick={() => likeHandler(car._id)}>
      {car.isLiked ? (
        <SolidHeartIcon className="w-4 h-4 md:w-6 md:h-6 fill-rose-600" />
      ) : (
        <HeartIcon className="w-4 h-4 md:w-6 md:h-6" />
      )}
    </button>
  );
};

export default CardInteraactions;
