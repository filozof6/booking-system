import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Check } from "lucide-react";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{
    fullname: string;
    phone: string;
    dateFrom: string;
    dateTo: string;
    guests: string;
    bedrooms: string;
    bathrooms: string;
  }>;
}) {
  const { fullname, phone, dateFrom, dateTo } = await searchParams;
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center text-center p-4 bg-green-500 text-white">
      <Check className="w-28 h-28 border-4 border-white rounded-full p-4" />
      <h1 className="text-3xl font-bold">
        We have got your booking request successfully!
      </h1>
      <h3 className="text-lg font-semibold text-gray-100">
        We will contact you soon via whatsapp
      </h3>
      <div className="space-y-1.5 text-gray-100">
        <h1 className="text-2xl font-bold">Booking Details</h1>
        <h3 className="text-xl font-semibold">
          Name: <span className="font-bold text-white">{fullname}</span>
        </h3>
        <h3 className="text-xl font-semibold">
          Phone Number:
          <span className="font-bold text-white">{phone}</span>
        </h3>
        <h3 className="text-xl font-semibold">
          Dates from: <span className="font-bold text-white">{dateFrom}</span>{" "}
          to: <span className="font-bold text-white">{dateTo}</span>
        </h3>
      </div>
      <h3 className="text-xl font-semibold">You can now close this page</h3>
      <Button className="w-fit">
        <Link href="/">Go back to reservation form</Link>
      </Button>
    </div>
  );
}
