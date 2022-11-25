export function requestGetParamsValidator(query: any, comparationAttributes: string[]): {} {

  let paramsAttributes = {}

  for (const [key, value] of Object.entries(query)) {
    if (comparationAttributes.includes(key)) {
      Object.defineProperty(paramsAttributes, key, { value: value, enumerable: true })
    }else{
      throw new Error(`ERROR: ${key} parameter is not valid`)
    }
  }

  return paramsAttributes

  // console.log(destinyObject)
}