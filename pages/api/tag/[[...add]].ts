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
  ValidationPipe,
} from "@storyofams/next-api-decorators";

import { methodNotAllowedExceptionHandler } from "../../../exceptions/dto";
import { TagBodyDTO } from "../../../dto/tag";

@Catch(methodNotAllowedExceptionHandler)
class TagController {
  constructor(private readonly prismaService = prisma) {}

  @Get()
  async findAll() {
    return this.prismaService.tag.findMany({ include: { url: true } });
  }
  @Get("/:id")
  async findOne(@Param("id") id: string) {
    return this.prismaService.tag.findUnique({ where: { id: parseInt(id) } });
  }
  @Post()
  async create(@Body(ValidationPipe({ whitelist: true })) body: TagBodyDTO) {
    return this.prismaService.tag.create({
      data: {
        title: body.title,
      },
    });
  }
  @Delete("/:id")
  async delete(
    @Param("id", ValidationPipe({ whitelist: true, always: true })) id: string,
  ) {
    const result = await this.prismaService.tag.delete({
      where: { id: parseInt(id) },
    });

    return result;
  }
  @Put("/:id")
  async update(
    @Param("id", ValidationPipe({ whitelist: true, always: true })) id: string,
    @Body() body: TagBodyDTO,
  ) {
    return this.prismaService.tag.update({
      data: body,
      where: { id: parseInt(id) },
    });
  }
}
export default createHandler(TagController);
