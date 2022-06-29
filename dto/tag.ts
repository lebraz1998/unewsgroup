import { IsString } from "class-validator";

export class TagBodyDTO {
  @IsString()
  title: string;
}
