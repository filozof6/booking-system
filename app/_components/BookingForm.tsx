"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "sonner";
import { DatePickerForm } from "./DatePickerForm";
import NumberPickerForm from "./NumberPickerForm";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  surname: z.string().min(2).max(50),
  // dateFrom: z.date(),
  // dateTo: z.date(),
  dateRange: z.object({
    from: z.date().optional(),
    to: z.date().optional(),
  }),
  phone: z.string(),
  guests: z.number().min(1).max(10),
  bedrooms: z.number().min(1).max(10),
  bathrooms: z.number().min(1).max(10),
});
export default function BookingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      dateRange: undefined,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast.success("You have successfully submitted your request!");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <fieldset className="grid md:grid-cols-2 md:gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Surname</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <Controller
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              {/* <FormLabel>{t("phone")}</FormLabel> */}
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <PhoneInput
                  country="pe"
                  // enableAreaCodes
                  disableDropdown={false}
                  countryCodeEditable={false}
                  preferredCountries={[
                    "pe",
                    "cl",
                    "us",
                    "ec",
                    "bo",
                    "br",
                    "co",
                    "ar",
                    "de",
                    "fr",
                    "cz",
                  ]}
                  containerClass="!w-full md:!max-w-[300px]"
                  inputClass="!w-full"
                  value={field.value}
                  onChange={(value) => {
                    const sanitized = value.startsWith("+")
                      ? value
                      : `+${value}`;
                    field.onChange(sanitized);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <NumberPickerForm form={form} label="bathrooms" name="bathrooms" />
        <DatePickerForm form={form} label="From" name="dateRange" />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

/* 
"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ReservationForm() {
  const t = useTranslations("HomePage");
  const [formData, setFormData] = useState({
    fullName: "",
    dateFrom: null as Date | null,
    dateTo: null as Date | null,
    phone: undefined as string | undefined,
    numberOfGuests: 1,
    numberOfBathrooms: 1,
    numberOfBedrooms: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-2xl shadow-md"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
     Book Your Stay
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <PhoneInput
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            country={"us"} // Optional: Set a default country
            className="w-full rounded-xl p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            enableSearch={true}
          />
        </div>

        <div>
          <label
            htmlFor="dateFrom"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date From
          </label>
          <DatePicker
            selected={formData.dateFrom}
            onChange={(date) =>
              setFormData((prev) => ({ ...prev, dateFrom: date }))
            }
            selectsStart
            startDate={formData.dateFrom}
            endDate={formData.dateTo}
            minDate={new Date()}
            placeholderText="Select start date"
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="dateTo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date To
          </label>
          <DatePicker
            selected={formData.dateTo}
            onChange={(date) =>
              setFormData((prev) => ({ ...prev, dateTo: date }))
            }
            selectsEnd
            startDate={formData.dateFrom}
            endDate={formData.dateTo}
            minDate={formData.dateFrom || new Date()}
            placeholderText="Select end date"
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="numberOfGuests"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Number of Guests
          </label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            min="1"
            value={formData.numberOfGuests}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="numberOfBedrooms"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Number of Bedrooms
          </label>
          <input
            type="number"
            id="numberOfBedrooms"
            name="numberOfBedrooms"
            min="1"
            value={formData.numberOfBedrooms}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="numberOfBathrooms"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Number of Bathrooms
          </label>
          <input
            type="number"
            id="numberOfBathrooms"
            name="numberOfBathrooms"
            min="1"
            value={formData.numberOfBathrooms}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold text-base rounded-xl hover:bg-blue-700 transition"
        >
          Submit Reservation
        </button>
      </div>
    </form>
  );
}


*/
