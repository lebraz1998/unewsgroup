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
export const config = {
  api: {
    bodyParser: false,
  },
};

@Catch(methodNotAllowedExceptionHandler)
class AddController {
  @Post("")
  async upload(@Req() req: any, @Res() res: any) {
    await new Promise((resolve, reject) => {
      const form = new IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        console.log(files);
        console.log((files.image as any).filepath);
        var oldPath = (files.image as any).filepath;
        var newPath = `./public/${(files.image as any).originalFilename}`;
        mv(oldPath, newPath, function (err) {
          console.log(err);
        });
        res.end(newPath.replace(".", ""));
      });
    });
  }
  @Delete("")
  async deleteImage(@Query("id") id: string) {
    unlinkSync("." + id);
  }
}
export default createHandler(AddController);
const saveFile = async (file) => {
  const data = readFileSync(file.path);
  writeFileSync(__dirname + `/${file.name}`, data);
  return;
};
