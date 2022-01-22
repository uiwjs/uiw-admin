# 图片类型文件上传

<!--UploadImage-->

### 基本使用(与uiw/form使用保持一致)
```js
import UploadImage from '@uiw-admin/components/lib/ProForm/widgets/UploadImage'
import React, { useState } from 'react';
import { Button } from 'uiw'
const Demo = () => {
  const [ fileList,setfileList ] = useState<any>([])

  const config = {
    fileList: fileList,
    readOnly:false,
    onUploadChange:(value:any)=>setfileList(value)
  }
    return (
       <UploadImage {...config} />
  );
}
```

## Porps
``` ts
interface UploadImageProps extends ImageUploadingPropsType {
  // 上传变化的回调
  onUploadChange?: (imageList: ImageListType) => void;
  // 图片列表
  fileList?: ImageListType;
  // 是否只读
  readOnly?: boolean;
}

interface ImageUploadingPropsType {
  value: ImageListType;
  onChange: (value: ImageListType, addUpdatedIndex?: Array<number>) => void;
  children?: (props: ExportInterface) => React.ReactNode;
  multiple?: boolean;
  maxNumber?: number;
  // 仅支持图片类型文件上传
  accept?: Array<string>;
  maxFileSize?: number;
  resolutionWidth?: number;
  resolutionHeight?: number;
  resolutionType?: ResolutionType;
  onError?: (errors: ErrorsType, files?: ImageListType) => void;
  dataURLKey?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}

type ImageListType = Array<ImageType>;

interface ImageType {
  dataURL?: string;
  file?: File;
  [key: string]: any;
}

type ErrorsType = {
  maxFileSize?: boolean;
  maxNumber?: boolean;
  accept?: boolean;
  resolution?: boolean;
} | null;

type ResolutionType = 'absolute' | 'less' | 'more' | 'ratio';

```