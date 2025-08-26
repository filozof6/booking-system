import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookingRepository {
  constructor(
    @InjectRepository(Booking)
    readonly repo: Repository<Booking>,
  ) {}

  saveAndReturn = (data: Partial<Booking>) => {
    console.log("data", data)
    const booking = this.repo.create(data);
    return this.repo.save(booking);
  }
}
