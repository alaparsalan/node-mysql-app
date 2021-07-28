import { Entity, PrimaryGeneratedColumn, 
         Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
         import { ApiProperty } from "@nestjs/swagger";

@Entity('students')
export class StudentEntity {

  @PrimaryGeneratedColumn() 
  id: number;

  @ApiProperty()
  @Column() 
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string

  @ApiProperty()
  @Column()
  phone: string

  @ApiProperty()
  @Column()
  gender: string


  @Column({
    type: 'boolean',
    default: false
  })
  is_done: boolean


  @CreateDateColumn()
  create_at: Date

  @UpdateDateColumn()
  updated_at: Date
}