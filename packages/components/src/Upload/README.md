# 上传文件组件

<!--Upload-->

### 基本使用
``` tsx
import React  from 'react';
import { Upload } from '@uiw-admin/components'
import { FileType } from '@uiw-admin/components/lib/Upload/types'
const Demo = () => {
  const [images, setImages] = React.useState<FileType[]>([]);
  const onChange = (fileList:FileType[]) => setImages(fileList);
  return (
      <Upload
        multiple
        value={images}
        onChange={onChange}
        maxNumber={4}
        dataURLKey="data_url"
      >
        {({
          fileList,
          onFileUpload,
          onFileRemoveAll,
          onFileUpdate,
          onFileRemove,
        }:any) => (
          <div>
            <button onClick={onFileUpload}>上传</button>
            <button onClick={onFileRemoveAll}>删除全部</button>
            {fileList.map((image:FileType, index:number) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div>
                  <button onClick={() => onFileUpdate(index)}>更新</button>
                  <button onClick={() => onFileRemove(index)}>删除</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Upload>
  )
}
```

## Porps
``` ts
interface ReactUploadPropsType {
  // 值
  value: FileType[];
  // 上传文件改变时的回调
  onChange: (value: FileType[], addUpdatedIndex?: Array<number>) => void;
  children?: (props: ChildrenInterface) => React.ReactNode;
  // 是否支持上传多个文件
  multiple?: boolean;
  // 上传最大上限
  maxNumber?: number;
  // 允许上传文件类型（目前支持图片;xlsx;pdf）默认支持所有图片类型文件上传
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

interface ChildrenInterface {
  // 列表
  fileList: FileListType;
  // 上传
  onFileUpload: () => void;
  // 删除全部
  onFileRemoveAll: () => void;
  // 重新上传
  onFileUpdate: (index: number) => void;
  // 删除
  onFileRemove: (index: number) => void;
  // 错误信息
  errors: ErrorsType;
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


## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.