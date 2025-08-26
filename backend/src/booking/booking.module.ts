import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './booking.entity';
import { BookingController } from './booking.controller';
import { BookingRepository } from './booking.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Booking])],
  providers: [BookingRepository],
  controllers: [BookingController],
})
export class BookingModule {}
