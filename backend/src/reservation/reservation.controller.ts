import { Controller, Post, Body } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation } from './reservation.entity';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  create(@Body() body: Partial<Reservation>) {
    return this.reservationService.create(body);
  }
}
