import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './booking.entity';
import { ZodValidationPipe } from './zod-validation-pipe';
import { createBookingSchema } from '../utils/zod-booking-schema';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createBookingSchema))
  create(@Body() body: Partial<Booking>) {
    return this.bookingService.create(body);
  }
}
