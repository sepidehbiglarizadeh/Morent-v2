import Card from "@/components/Card";
import Filter from "@/components/Filter";
import getAllCarsService from "@/services/getAllCarsService";

const CarsPage = ({ carsData }) => {
  return (
    <main>
      <Filter />
      <div className="grid grid-cols-6 gap-8 mb-12 md:mb-16">
        {carsData.docs.map((car) => {
          return <Card car={car} />;
        })}
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
