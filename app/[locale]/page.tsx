import React from "react";
import BookingForm from "../_components/BookingForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BookingPage() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <BookingForm />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
