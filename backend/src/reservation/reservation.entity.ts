import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  phoneNumber: string;

  @Column({ type: 'date' })
  dateFrom: Date;

  @Column({ type: 'date' })
  dateTo: Date;

  @Column()
  guests: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;
}
