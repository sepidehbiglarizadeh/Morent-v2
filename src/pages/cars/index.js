import Card from "@/components/Card";
import Category from "@/components/Category";
import Filter from "@/components/Filter";
import getAllCarsService from "@/services/getAllCarsService";
import getAllTypesService from "@/services/getAllTypeService";
import getCitiesService from "@/services/getCitiesService";
import http from "@/services/httpService";
import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import { useState } from "react";

const CarsPage = ({ carsData, carTypes, allCras ,cities}) => {
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
    <main className="container mx-auto max-w-[1440px] flex ">
      <Category allCras={allCras} carTypes={carTypes} />
      <div className="py-8 px-6 md:px-8 flex-1">
        <Filter cities={cities} />
        <div className="grid grid-cols-6 gap-8 mb-12 md:mb-16 w-full">
          {carsData.docs.length ? (
            carsData.docs.map((car) => {
              return <Card key={car._id} car={car} gridLayout={true} />;
            })
          ) : (
            <p className="col-span-6 text-center font-bold">No Car Found !!</p>
          )}
        </div>
        <div className="col-span-6 flex justify-center mb-12">
          <button
            className={`bg-primary-500 w-[223px] h-9 xl:w-[156px] xl:h-11 capitalize hover:bg-primary-600 text-xs xl:text-base font-semibold rounded text-white`}
            onClick={clickHandler}
          >
            {limit !== carsData.totalDocs ? "Show more car" : "Show less car"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default CarsPage;

export async function getServerSideProps({ req, query }) {
  const { data: carsResult } = await getAllCarsService(req, query);
  const { data: typesResult } = await getAllTypesService();
  const { data: allCras } = await http.get("/cars?limit=9");
  const { data: cities } = await getCitiesService();

  return {
    props: {
      carsData: carsResult.data,
      carTypes: typesResult.data,
      allCras: allCras.data.docs,
      cities: cities.data,
    },
  };
}
