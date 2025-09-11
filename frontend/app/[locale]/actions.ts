"use server";

import { BookingData } from "@/types/booking";

export async function createBooking(booking: BookingData) {
  const res = await fetch("http://localhost:3001/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      `Failed to create booking: ${res.status} ${res.statusText}`
    );
  }

  return res.json();
}
