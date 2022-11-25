import { Response } from "express";
import { validationResult } from "express-validator";
import { GenericServiceErrorResponse } from "../interfaces";
import {status400BadRequest} from "./httpResponses"

export const validateCreateRequest = (req: any, res: Response<GenericServiceErrorResponse>, next: any) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (error: any) {
    res.status(400).json(status400BadRequest("Invalid value of a request field", error.array()))
  }
}