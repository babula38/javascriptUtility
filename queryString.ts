//Takes a url and return object with querystring value
export default function queryString(url: string) {
  const urlArray = url.split('?')
  if (urlArray.length < 2) {
    return null
  }
  const queryString = urlArray[1]
  const queryStringArray = queryString.split('&')

  const queryArgumentsObject: { [key: string]: string } = {}

  queryStringArray.forEach(keyAndValue => {
    const paramArray = keyAndValue.split('=')

    switch (paramArray.length) {
      case 2:
        queryArgumentsObject[paramArray[0]] = paramArray[1]
        return
      case 1:
        if (!queryArgumentsObject[paramArray[0]]) {
          queryArgumentsObject[paramArray[0]] = null
        }
        return
      default:
        return
    }
  })

  return queryArgumentsObject
}