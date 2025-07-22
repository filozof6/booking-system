import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { Booking } from './booking.entity';
import { ZodValidationPipe } from '../utils/zod-validation-pipe';
import { createBookingSchema } from './zod-booking-schema';
import { BookingRepository } from './booking.repository';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingRepository: BookingRepository) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createBookingSchema))
  create(@Body() body: Partial<Booking>) {
    return this.bookingRepository.saveAndReturn(body);
  }
}
