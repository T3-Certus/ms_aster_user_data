import { Response } from 'express';
import jwt from 'jsonwebtoken'
import { FetchNewAccessToken } from '../../service/generateNewAccessToken.service';
import { config } from '../config';
import { GenericServiceErrorResponse, GenericServiceResponse } from '../interfaces';
import { status401Unauthorized, status403Forbidden, status500InternalServerError } from '../methods';

export async function verifyAccessToken(req:any, res: Response<GenericServiceResponse | GenericServiceErrorResponse>, next: any) {
  // console.log(req.headers)
  const accessToken: string = req.headers.authorization
  if(!accessToken){
    res.status(403).json(status401Unauthorized("An access token is required for authentication",))
  } 
  const cAccessToken = accessToken.replace("Bearer ", "")
  
  try {
    const decodedToken:any = jwt.verify(cAccessToken, config.ACCESS_TOKEN_KEY)
    console.log(decodedToken.rol)

    if(decodedToken.rol == "admin" || decodedToken.rol == "superadmin"){
      return next()
    }
    res.status(403).json(status403Forbidden("Insufficient permissions"))

  } catch (error) {
    console.log(error)
    res.status(401).json(status401Unauthorized("Invalid access token", `${error}`))
    
  }

}