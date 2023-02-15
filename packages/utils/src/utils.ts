// 拼接url参数
export function splitUrl(url: string, options: { [x: string]: any }) {
  let urlNew = url;
  const paramsArray: string[] = [];
  // Object.keys(options).forEach(key => paramsArray.push(key + '=' + options[key]));
  Object.keys(options).forEach((key) =>
    paramsArray.push(`${key}=${options[key]}`),
  );
  if (Object.keys(options).length === 0) {
    return url;
  }
  if (/\?/.test(urlNew) === false) {
    urlNew = `${urlNew}?${paramsArray.join('&')}`;
  } else {
    urlNew += `&${paramsArray.join('&')}`;
  }
  return urlNew;
}
