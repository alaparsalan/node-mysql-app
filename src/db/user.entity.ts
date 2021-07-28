import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import BookEntity from '../db/book.entity';



@Entity()
export default class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;
  
  @ApiProperty()
  @Column({ length: 500 })
  name: string;

  // 1:n relation with bookEntity 
  @OneToMany( type => BookEntity , book => book.user) books: BookEntity[];
}
