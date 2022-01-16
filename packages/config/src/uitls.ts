export const transformationDefineString = (obj: { [s: string]: any }) => {
  const result: { [s: string]: string } = {}
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = JSON.stringify(value)
  })
  return result
}