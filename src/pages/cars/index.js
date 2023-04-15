import Card from "@/components/Card";
import Filter from "@/components/Filter";
import getAllCarsService from "@/services/getAllCarsService";
import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import { useState } from "react";

const CarsPage = ({ carsData }) => {
  const router = useRouter();

  const [limit, setLimit] = useState(carsData.limit);

  const clickHandler = () => {
    if (limit === carsData.totalDocs) {
      setLimit(6);
      router.query.limit = 6;
      routerPush(router);
    } else {
      setLimit(carsData.totalDocs);
      router.query.limit = carsData.totalDocs;
      routerPush(router);
    }
  };

  return (
    <main>
      <Filter />
      <div className="grid grid-cols-6 gap-8 mb-12 md:mb-16">
        {carsData.docs.length ? (
          carsData.docs.map((car) => {
            return <Card key={car._id} car={car} />;
          })
        ) : (
          <p className="col-span-6 text-center font-bold">No Car Found !!</p>
        )}
      </div>
      <div className="col-span-6 flex justify-center mb-12 md:mb-16">
        <button
          className={`bg-primary-500 w-[223px] h-9 xl:w-[156px] xl:h-11 capitalize hover:bg-primary-600 text-xs xl:text-base font-semibold rounded text-white`}
          onClick={clickHandler}
        >
          {limit !== carsData.totalDocs ? "Show more car" : "Show less car"}
        </button>
      </div>
    </main>
  );
};

export default CarsPage;

export async function getServerSideProps({ req, query }) {
  const { data: carsResult } = await getAllCarsService(req, query);
  return {
    props: {
      carsData: carsResult.data,
    },
  };
}
