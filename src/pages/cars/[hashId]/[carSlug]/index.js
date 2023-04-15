import http from "@/services/httpService";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";
import Card from "@/components/Card";
import getOneCarService from "@/services/getOneCarService";
import getAllTypesService from "@/services/getAllTypeService";
import CarInfo from "@/components/CarInfo";

const CarDetailPage = ({ recentCar, car }) => {
  return (
    <>
      <section className="container mx-auto max-w-[1440px] flex">
        <div className="px-6 mt-8 w-full">
          <section className="md:flex md:justify-between md:gap-x-8 mb-8">
            <ImageGallery car={car} />
            <CarInfo car={car} />
          </section>

          <section className="mb-8">
            <div className="flex justify-between items-center mb-5 md:mb-[26px]">
              <h2 className="text-secondary-300 font-semibold text-sm md:text-base">
                Recent Car
              </h2>
              <Link
                href="/cars"
                className="text-primary-500 text-xs md:text-base font-semibold"
              >
                View All
              </Link>
            </div>
            <div className="flex gap-x-8 overflow-auto ">
              {recentCar.map((car) => {
                return <Card key={car._id} car={car} />;
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default CarDetailPage;

export async function getServerSideProps({ req, query }) {
  const { data: recentCar } = await http.get("/cars?limit=4", {
    headers: {
      Cookie: req.headers.cookie || "",
    },
  });
  const { data } = await getOneCarService(req, query);
  const { data: typesResult } = await getAllTypesService();

  return {
    props: {
      recentCar: recentCar.data.docs,
      car: data.data,
      types: typesResult.data,
    },
  };
}
