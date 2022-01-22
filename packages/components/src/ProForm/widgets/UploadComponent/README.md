# 文件上传
[组件参考react-images-uploading](https://github.com/vutoan266/react-images-uploading)
<!--Upload-->

### 基本使用(与uiw/form使用保持一致)
```js
import Upload from '@uiw-admin/components/lib/ProForm/widgets/UploadComponent'
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
       <Upload {...config} />
  );
}
```

## Porps
``` ts
interface UploadImageProps extends ReactUploadPropsType {
  // 上传变化的回调
  onUploadChange?: (imageList: FileListType) => void;
  // 图片列表
  fileList?: FileListType;
  // 是否只读
  readOnly?: boolean;
}

interface ReactUploadPropsType {
  value: FileListType;
  onChange: (value: FileListType, addUpdatedIndex?: Array<number>) => void;
  children?: (props: ChildrenInterface) => React.ReactNode;
  multiple?: boolean;
  maxNumber?: number;
  // 仅支持图片类型文件上传
  accept?: Array<string>;
  maxFileSize?: number;
  resolutionWidth?: number;
  resolutionHeight?: number;
  resolutionType?: ResolutionType;
  onError?: (errors: ErrorsType, files?: FileListType) => void;
  dataURLKey?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}

type FileListType = Array<FileType>;

interface FileType {
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