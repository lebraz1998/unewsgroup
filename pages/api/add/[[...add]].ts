// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../../prisma/prisma";
import {
  Body,
  Catch,
  createHandler,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  ValidationPipe,
} from "@storyofams/next-api-decorators";

import { IncomingForm } from "formidable";
import { AddBodyDTO, AddUpdateDTO } from "../../../dto/add";
import { methodNotAllowedExceptionHandler } from "../../../exceptions/dto";
import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  unlinkSync,
} from "fs";
var mv = require("mv");

@Catch(methodNotAllowedExceptionHandler)
class AddController {
  constructor(private readonly prismaService = prisma) {}

  @Get()
  async findAll() {
    return this.prismaService.url.findMany({});
  }
  @Get("/:id")
  async findOne(@Param("id") id: string) {
    return this.prismaService.url.findUnique({ where: { id: parseInt(id) } });
  }
  @Post()
  async create(@Body(ValidationPipe({ whitelist: true })) body: AddBodyDTO) {
    return this.prismaService.url.create({
      data: {
        created: Date.now(),
        title: body.title,
        url: body.url,
        imgUrl: body.imgUrl,
      },
    });
  }
  @Delete("/:id")
  async delete(
    @Param("id", ValidationPipe({ whitelist: true, always: true })) id: string,
  ) {
    const result = await this.prismaService.url.delete({
      where: { id: parseInt(id) },
    });
    try {
      unlinkSync("." + result.imgUrl);
    } catch (e) {}
    return result;
  }
  @Put("/:id")
  async update(
    @Param("id", ValidationPipe({ whitelist: true, always: true })) id: string,
    @Body() body: AddUpdateDTO,
  ) {
    return this.prismaService.url.update({
      data: body,
      where: { id: parseInt(id) },
    });
  }
}
export default createHandler(AddController);
const saveFile = async (file) => {
  const data = readFileSync(file.path);
  writeFileSync(__dirname + `/${file.name}`, data);
  return;
};
