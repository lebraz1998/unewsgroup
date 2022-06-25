import { ValidationError } from "class-validator";
import { NextApiRequest, NextApiResponse } from "next";

export function methodNotAllowedExceptionHandler(
  error: ValidationError,
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(400).json(error);
}
