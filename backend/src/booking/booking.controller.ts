import { Controller, Post, Body } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './booking.entity';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  create(@Body() body: Partial<Booking>) {
    return this.bookingService.create(body);
  }
}
