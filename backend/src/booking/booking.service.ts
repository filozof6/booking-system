import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepo: Repository<Booking>,
  ) {}

  create(data: Partial<Booking>) {
    const booking = this.bookingRepo.create(data);
    return this.bookingRepo.save(booking);
  }
}
