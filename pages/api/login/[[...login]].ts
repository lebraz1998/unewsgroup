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
import { LoginBodyDTO } from "../../../dto/add";
import { methodNotAllowedExceptionHandler } from "../../../exceptions/dto";
import { sign } from "jsonwebtoken";
@Catch(methodNotAllowedExceptionHandler)
class LoginController {
  login = [{ username: "jawadfadel", password: "testing" }];
  @Post()
  async create(@Body(ValidationPipe({ whitelist: true })) body: LoginBodyDTO) {
    var isOk = false;
    this.login.forEach((e) => {
      if (e.username === body.username && e.password === body.password) {
        isOk = true;
      }
    });

    if (!isOk) {
      return;
    }
    var jwt = sign(body.username, "213124124124124", {});

    return jwt;
  }
}
export default createHandler(LoginController);
