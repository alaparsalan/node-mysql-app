import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { StudentEntity } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentService extends TypeOrmCrudService<StudentEntity> {

constructor(@InjectRepository(StudentEntity) repo){
    super(repo)
}


}
