import React from "react";
import BookingForm from "../_components/BookingForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LocaleSwitcher from "../_components/LocaleSwitcher";
import { useTranslations } from "next-intl";

export default function BookingPage() {
  const t = useTranslations("BookingPage");
  return (
    <div className="p-4 flex items-center justify-center min-h-screen">
      <Card className="max-w-screen-lg self-center">
        <CardHeader className="flex flex-col-reverse md:flex-row items-start md:justify-between md:items-center">
          <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t("title")}
          </CardTitle>
          <LocaleSwitcher />
        </CardHeader>
        <CardContent>
          <BookingForm />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
