export const transformationDefineString = (obj: Record<string, any>) => {
  const result: Record<string, any> = {};
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = JSON.stringify(value);
  });
  return result;
};

export const getFunDefault = (path?: string) => {
  if (path) {
    const fun = require(path);
    return fun.default || fun;
  }
  return () => {};
};
