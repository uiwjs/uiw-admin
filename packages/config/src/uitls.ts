export const transformationDefineString = (obj: Record<string, any>) => {
  const result: Record<string, any> = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value !== 'string') {
      result[key] = JSON.stringify(value);
    } else {
      result[key] = value;
    }
  });
  return result;
};
