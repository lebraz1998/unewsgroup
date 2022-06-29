import {
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from "class-validator";

export class AddBodyDTO {
  @IsString()
  title: string;
  @IsOptional()
  @IsString()
  imgUrl: string;
  created: number;
  @IsString()
  url: string;
  @IsNumber()
  tagID: number;
}

export class LoginBodyDTO {
  @IsString()
  username: string;
  @IsOptional()
  @IsString()
  password: string;
}
export class AddUpdateDTO {
  @IsOptional()
  @IsString()
  title: string;
  @IsOptional()
  @IsString()
  imgUrl: string;
  created: number;
  @IsOptional()
  @IsString()
  url: string;
  @IsOptional()
  @IsNumber()
  tagID: number;
}

export class AddParamDTO {
  @IsNumberString()
  id: number;
}
