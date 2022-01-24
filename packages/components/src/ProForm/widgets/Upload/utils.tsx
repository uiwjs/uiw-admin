// 是否是图片类型
export const isImageValid = (type = ''): boolean => {
  if (type) {
    //获取最后一个/的位置
    var index = type.lastIndexOf("/");
    //获取后缀
    var ext = type.substr(index + 1);
    return ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].indexOf(ext.toLowerCase()) !== -1
  }
  return false
}