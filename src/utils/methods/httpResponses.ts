import { GenericServiceResponse, GenericServiceErrorResponse } from '../interfaces'

export const status200Ok = (responseBody: any, resourceFound?: String, detailMessage?: String, isPut = false, isDel = false): GenericServiceResponse => {
  if (!resourceFound || resourceFound.length === 0) {
    return {
      httpStatus: 202,
      serverMessage: isPut ? 'Resource updated' : isDel ? 'Resource deleted' : 'Resource found',
      moreDetails: { responseMessage: detailMessage },
      responseBody: responseBody,
      error: false,
      success: true
    }
  }
  return {
    httpStatus: 200,
    serverMessage: isPut ? `Resource ${resourceFound} updated` : isDel ? `Resource ${resourceFound} deleted` : `Resource ${resourceFound} found`,
    moreDetails: { responseMessage: detailMessage },
    responseBody: responseBody,
    error: false,
    success: true
  }
}

export const status201Created = (responseBody: any, resourceCreated?: String, detailMessage?: String): GenericServiceResponse => {
  if (!resourceCreated || resourceCreated.length === 0) {
    return {
      httpStatus: 201,
      serverMessage: 'Resource created',
      moreDetails: { responseMessage: detailMessage },
      responseBody: responseBody,
      error: false,
      success: true
    }
  }
  return {
    httpStatus: 201,
    serverMessage: `Resource ${resourceCreated} created`,
    moreDetails: { responseMessage: detailMessage },
    responseBody: responseBody,
    error: false,
    success: true
  }
}

export const status400BadRequest = (motiveBadRequest?: String, detailMessage?: String | Array<any>): GenericServiceErrorResponse => {
  if (!motiveBadRequest || motiveBadRequest.length === 0) {
    return {
      httpStatus: 400,
      serverMessage: 'Bad request',
      errorMessage: detailMessage,
      error: true
    }
  }
  return {
    httpStatus: 400,
    serverMessage: `Bad request: ${motiveBadRequest}`,
    errorMessage: detailMessage,
    error: true
  }
}

export const status401Unauthorized = (reason?: String, detailMessage?: String): GenericServiceErrorResponse => {
  if (!reason) {
    return {
      httpStatus: 401,
      serverMessage: "Unauthorized",
      errorMessage: detailMessage,
      error: true
    }
  }
  return {
    httpStatus: 401,
    serverMessage: `Unauthorized: ${reason}`,
    errorMessage: detailMessage,
    error: true
  }
}

export const status403Forbidden = (reason?: string, detailMessage?: String): GenericServiceErrorResponse => {
  if (!reason) {
    return {
      httpStatus: 403,
      serverMessage: "Forbidden",
      errorMessage: detailMessage,
      error: true
    }
  }
  return {
    httpStatus: 403,
    serverMessage: `Forbidden: ${reason}`,
    errorMessage: detailMessage,
    error: true
  }
}

export const status404NotFound = (resourceNotFound?: String, detailMessage?: String): GenericServiceErrorResponse => {
  return {
    httpStatus: 404,
    serverMessage: `Resource ${resourceNotFound} not found`,
    errorMessage: detailMessage,
    error: true
  }
}

export const status500InternalServerError = (detailMessage?: String): GenericServiceErrorResponse => {
  return {
    httpStatus: 500,
    serverMessage: 'Internal server error',
    errorMessage: detailMessage,
    error: true
  }
}