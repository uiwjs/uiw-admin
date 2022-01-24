# 文件上传

<!--Upload-->

### 基本使用
```js
import React, { useState } from 'react';
import Upload from '@uiw-admin/components/Upload'
const Demo = () => {
  const [images, setImages] = React.useState([]);
  const onChange = (imageList, addUpdateIndex) => setImages(imageList);
  return (
      <Upload
        multiple
        value={images}
        onChange={onChange}
        maxNumber={4}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div>
            <button onClick={onImageUpload}>上传</button>
            <button onClick={onImageRemoveAll}>删除全部</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div>
                  <button onClick={() => onImageUpdate(index)}>更新</button>
                  <button onClick={() => onImageRemove(index)}>删除</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Upload>
}
```

## Porps
``` ts

interface ReactUploadPropsType {
  // 值
  value: FileType[];
  // 上传回调
  onChange: (value: FileType[], addUpdatedIndex?: Array<number>) => void;
  children?: (props: ChildrenInterface) => React.ReactNode;
  // 是否多个
  multiple?: boolean;
  // 上传最大上限
  maxNumber?: number;
  // 允许上传文件类型（目前支持图片;xslx,pdf）
  accept?: string[];
  // 上传文件大小上限
  maxFileSize?: number;
  // 上传错误回调
  onError?: (errors: ErrorsType, files?: FileType[]) => void;
  // 上传文件key
  dataURLKey?: string;
  // 原生input参数
  inputProps?: React.HTMLProps<HTMLInputElement>;
}

export interface ChildrenInterface {
  // 列表
  imageList: FileListType;
  // 上传
  onFileUpload: () => void;
  // 删除全部
  onFileRemoveAll: () => void;
  // 错误信息
  errors: ErrorsType;
  // 重新上传
  onFileUpdate: (index: number) => void;
  // 删除
  onFileRemove: (index: number) => void;
}

interface FileType {
  // 文件路径
  dataURL?: string;
  file?: File;
  [key: string]: any;
}

type ErrorsType = {
  maxFileSize?: boolean;
  maxNumber?: boolean;
  accept?: boolean;
} | null;

```