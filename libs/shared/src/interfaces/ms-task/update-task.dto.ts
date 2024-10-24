import { ITask } from "@app/shared";
import { CreateTaskDto } from "./create-task.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class UpdateTaskDto extends CreateTaskDto implements ITask{
  @ApiProperty({ description: 'id de la tarea', example: '1' })
  @IsNumber()
  id: number;
}
