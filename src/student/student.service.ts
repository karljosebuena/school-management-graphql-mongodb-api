import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}
  getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOne({ id });
  }

  createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const student = this.studentRepository.create({
      id: uuid(),
      ...createStudentInput,
    });
    return this.studentRepository.save(student);
  }
}
