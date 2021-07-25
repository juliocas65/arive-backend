import { IsString, IsNotEmpty } from 'class-validator';

export class GetHobbiesByUserDto {

  constructor(params: any) {
    this.userId = params.userId;
  };

  @IsString()
  @IsNotEmpty()
  userId: string;
};