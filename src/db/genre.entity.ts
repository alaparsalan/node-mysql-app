import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export default class GenreEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  type: string;

}