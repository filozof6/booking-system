import { z } from 'zod';

export const createBookingSchema = z
  .object({
    fullName: z.string(),
    phoneNumber: z.string(),
    dateFrom: z.string(), // z.iso.datetime
    dateTo: z.string(),
    guests: z.number(),
    bedrooms: z.number(),
    bathrooms: z.number(),
  })
  .required();

//export type CreateBookingDto = z.infer<typeof createBookingSchema>;