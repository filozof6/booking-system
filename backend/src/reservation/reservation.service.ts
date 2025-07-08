import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepo: Repository<Reservation>,
  ) {}

  create(data: Partial<Reservation>) {
    const reservation = this.reservationRepo.create(data);
    return this.reservationRepo.save(reservation);
  }
}
