const type = (data: any) => Object.prototype.toString.call(data).slice(8, -1).toLowerCase()

const isObject = (value: any) => value && type(value) === 'object'

const hasErrors = (errors: any) => isObject(errors) && !!Object.keys(errors).length

export {
  type,
  isObject,
  hasErrors
}