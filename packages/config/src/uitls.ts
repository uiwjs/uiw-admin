export const transformationDefineString = (obj: Record<string, any>) => {
  const result: Record<string, any> = {};
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = JSON.stringify(value);
  });
  return result;
};
