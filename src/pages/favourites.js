import Card from "@/components/Card";
import getAllCarsService from "@/services/getAllCarsService";
import http from "@/services/httpService";
import Head from "next/head";

const FavouritesPage = ({ favCars }) => {

  return (
    <>
      <Head>
        <title>MORENT | Favourites</title>
      </Head>
      <section className="container mx-auto max-w-[1440px] flex p-4 md:p-6">
        {favCars.length ? (
          <div className="grid grid-cols-6 gap-8 mb-12 md:mb-16 w-full">
            {favCars.map((car) => {
              return <Card key={car._id} car={car} gridLayout={true} />;
            })}
          </div>
        ) : (
          <div className="w-full min-h-[50vh]">
            <p className="text-center">Favourites List is Empty !!</p>
          </div>
        )}
      </section>
    </>
  );
};

export default FavouritesPage;

export async function getServerSideProps({ req, query }) {
  const { data: allCras } = await http.get("/cars?limit=9", {
    headers: {
      Cookie: req.headers.cookie || "",
    },
  });

  return {
    props: {
      favCars: allCras.data.docs.filter((car) => car.isLiked),
    },
  };
}
