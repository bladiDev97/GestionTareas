import { ApiProperty } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";
import { IUser } from "./i-user.interface";
import { IsNumber } from "class-validator";


export class UpdateUserDto extends CreateUserDto implements IUser {
  @ApiProperty({ description: 'id del usuario', example: '1' })
  @IsNumber()
  id: number;
}
