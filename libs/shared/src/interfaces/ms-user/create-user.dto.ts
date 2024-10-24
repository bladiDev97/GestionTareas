import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { IUser } from "./i-user.interface";

/** Keys To Omit */
type OmitKeys = Pick<IUser, 'id'>;
type IUserOmit = Omit<IUser, keyof OmitKeys>;

export class CreateUserDto implements IUserOmit {
  @ApiProperty({ description: 'nombre del usuario', example: 'Francisco' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'correo del usuario', example: 'pancho@gmail.com' })
  @IsString()
  email: string;
}
