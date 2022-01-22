import { ResolutionType, ErrorsType } from './types';
import { getImage } from './utils';

const DEFAULT_NULL_INDEX = -1

export const isResolutionValid = (
  image: HTMLImageElement,
  resolutionType: ResolutionType,
  resolutionWidth: number = 0,
  resolutionHeight: number = 1
): boolean => {
  if (!resolutionWidth || !resolutionHeight || !image.width || !image.height)
    return true;
  switch (resolutionType) {
    case 'absolute': {
      if (image.width === resolutionWidth && image.height === resolutionHeight)
        return true;
      break;
    }
    case 'ratio': {
      const ratio = resolutionWidth / resolutionHeight;
      if (image.width / image.height === ratio) return true;
      break;
    }
    case 'less': {
      if (image.width <= resolutionWidth && image.height <= resolutionHeight)
        return true;
      break;
    }
    case 'more': {
      if (image.width >= resolutionWidth && image.height >= resolutionHeight)
        return true;
      break;
    }
    default:
      break;
  }
  return false;
};

export const isImageValid = (fileType: string) => {
  if (fileType.includes('image')) {
    return true;
  }
  return false;
};

export const isMaxFileSizeValid = (fileSize: number, maxFileSize?: number) => {
  return maxFileSize ? fileSize <= maxFileSize : true;
};

export const isAcceptTypeValid = (accept: any[], fileName: string) => {
  if (accept && accept.length > 0) {
    const type: string = fileName.split('.').pop() || '';
    if (
      accept.findIndex(
        (item) => item.toLowerCase() === type.toLowerCase()
      ) < 0
    )
      return false;
  }
  return true;
};

export const isMaxNumberValid = (totalNumber: number, maxNumber: number, keyUpdate: number) => {
  if (maxNumber !== 0 && !maxNumber) return true;
  if (keyUpdate === DEFAULT_NULL_INDEX) {
    if (totalNumber <= maxNumber) return true;
  } else if (totalNumber <= maxNumber + 1) return true;
  return false;
};

export const getErrorValidation = async ({
  fileList,
  value,
  maxNumber,
  keyUpdate,
  accept,
  maxFileSize,
  resolutionType,
  resolutionWidth,
  resolutionHeight,
}:any): Promise<ErrorsType> => {
  const newErrors: ErrorsType = {};
  if (!isMaxNumberValid(fileList.length + value.length, maxNumber, keyUpdate)) {
    newErrors.maxNumber = true;
  } else {
    for (let i = 0; i < fileList.length; i += 1) {
      const { file } = fileList[i];
      if (!file) continue;
      if (!isImageValid(file.type)) {
        newErrors.accept = true;
        break;
      }
      if (!isAcceptTypeValid(accept, file.name)) {
        newErrors.accept = true;
        break;
      }
      if (!isMaxFileSizeValid(file.size, maxFileSize)) {
        newErrors.maxFileSize = true;
        break;
      }
      if (resolutionType) {
        const image = await getImage(file);
        const checkRes = isResolutionValid(
          image,
          resolutionType,
          resolutionWidth,
          resolutionHeight
        );
        if (!checkRes) {
          newErrors.resolution = true;
          break;
        }
      }
    }
  }
  if (Object.values(newErrors).find(Boolean)) return newErrors;
  return null;
};
