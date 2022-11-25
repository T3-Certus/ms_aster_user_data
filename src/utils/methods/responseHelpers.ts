import { Response } from "express";
import { GenericServiceErrorResponse, GenericServiceResponse } from "../interfaces";
import { status200Ok, status404NotFound } from "./httpResponses";

export function getGenericResponseHelper(payload: any, resourceName: string, res: Response<GenericServiceResponse | GenericServiceErrorResponse>){
  if (payload) {
    if (payload.length === 0) {
      return res
        .status(202)
        .json(
          status200Ok(
            [],
            resourceName,
            "Resource found but has not content"
          )
        );
    } else {
      return res
        .status(200)
        .json(status200Ok(payload, resourceName));
    }
  } else {
    return res.status(404).json(status404NotFound(resourceName));
  }

}