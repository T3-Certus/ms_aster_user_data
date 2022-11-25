export interface GenericSuccesfullResponse {
  responseMessage: String | undefined,
  // moreInfo: String
}

export interface GenericErrorResponse{
  errorMessage: String | undefined,
  // moreInfo: String
}

export interface GenericServiceResponse{
  httpStatus: Number,
  serverMessage: String,
  moreDetails: GenericSuccesfullResponse | GenericErrorResponse,
  responseBody: any,
  error: boolean,
  success: boolean
}

export interface GenericServiceErrorResponse{
  httpStatus: Number,
  serverMessage: String,
  errorMessage?: String | Array<any>,
  error: true
}