import BillingInfoForm from "@/components/Payment/BillingInfoForm";
import Confirmation from "@/components/Payment/Confirmation";
import PaymentMethodForm from "@/components/Payment/PaymentMethodForm";
import RentalInfoForm from "@/components/Payment/RentalInfoForm";
import RentalSummary from "@/components/Payment/RentalSummary";
import getOneCarService from "@/services/getOneCarService";
import Head from "next/head";

const PaymentPage = ({ car }) => {
  return (
    <>
      <Head>
        <title>MORENT | Payment</title>
      </Head>
      <div className="px-4 md:px-6 py-8 md:flex md:items-start gap-x-8 container mx-auto max-w-[1440px]">
        <RentalSummary car={car} />
        <div className="md:flex-1">
          <BillingInfoForm />
          <RentalInfoForm car={car} />
          <PaymentMethodForm />
          <Confirmation />
        </div>
      </div>
    </>
  );
};

export default PaymentPage;

export async function getServerSideProps({ req, query }) {
  const { data } = await getOneCarService(req, query);

  return {
    props: {
      car: data.data,
    },
  };
}
