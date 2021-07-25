import { IsString, IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';
import { HobbiePassionLevel } from '../model/hobbie.passion-level.enum';

export class CreateHobbieDto {

  constructor(params: any) {
    this.name = params.name;
    this.user = params.user;
    this.passionLevel = params.passionLevel;
    this.year = params.year;
  }

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  user: string;

  @IsString()
  @IsNotEmpty()
  passionLevel: HobbiePassionLevel;

  @IsNumber()
  @IsNotEmpty()
  year: number;
};