import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteHobbieDto {

  constructor(params: any) {
    this.id = params.id;
  };

  @IsString()
  @IsNotEmpty()
  id: string;
};