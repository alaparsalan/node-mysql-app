import { StudentEntity } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
  imports:[TypeOrmModule.forFeature([StudentEntity])],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {



}
