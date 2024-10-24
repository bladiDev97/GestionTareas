import { ApiProperty } from "@nestjs/swagger";
import { ITask } from "./i-task.interface";
import { TaskState } from "./task-state.enum";
import { IsEnum, IsNumber, IsString } from "class-validator";

/** Keys To Omit */
type OmitKeys = Pick<ITask, 'id'>;
type ITaskOmit = Omit<ITask, keyof OmitKeys>;

export class CreateTaskDto implements ITaskOmit {
  @ApiProperty({ description: 'id del usuario', example: '1' })
  @IsNumber()
  userId: number;
  
  @ApiProperty({ description: 'descripcion de la tarea', example: 'Hacer la tarea' })
  @IsString()
  description: string;
  
  @ApiProperty({ description: 'estado de la tarea', enum: TaskState, example: TaskState.Completed })
  @IsEnum(TaskState)
  state: TaskState;
}
