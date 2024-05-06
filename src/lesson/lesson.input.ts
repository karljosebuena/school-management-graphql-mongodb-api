import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsUUID, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @Field()
  @MinLength(1)
  name: string;

  @Field()
  @IsDateString()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;

  @Field((type) => [ID], { defaultValue: [] })
  @IsUUID('4', { each: true })
  students: string[];
}

@InputType()
export class AssignStudentsToLessonInput {
  @Field((type) => ID)
  @IsUUID()
  lessonId: string;

  @Field((type) => [ID])
  @IsUUID('4', { each: true })
  studentIds: string[];
}
