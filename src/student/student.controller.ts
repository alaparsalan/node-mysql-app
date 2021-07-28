import { Controller } from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud'
import { StudentEntity } from './student.entity';
import { StudentService } from './student.service';

@Crud({
    model:{type:StudentEntity}
})

@Controller('student')
export class StudentController implements CrudController<StudentEntity> {

    constructor(public service:StudentService){
        
    }

}
