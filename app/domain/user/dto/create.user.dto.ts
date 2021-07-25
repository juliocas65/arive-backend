import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

  constructor(params: any) {
    this.name = params.name;
  }

  @IsString()
  @IsNotEmpty()
  name: string;
}