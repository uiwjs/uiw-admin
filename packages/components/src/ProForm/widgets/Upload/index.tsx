import React from 'react';
import { Modal, Message } from 'uiw'
import ReactUpload from '../../../Upload';
import { ReactUploadPropsType, FileListType, ChildrenInterface } from '../../../Upload/types'
import Card from './card'
import List from './list'


export interface UploadCompontneProps extends ReactUploadPropsType {
  // 上传变化的回调
  onUploadChange?: (fileList: FileListType) => void;
  // 图片列表
  fileList?: FileListType;
  // 是否只读
  readOnly?: boolean;
  // 上传列表的内建样式，支持三种基本样式 list 和 picture-card
  listType?: "picture-card" | 'list'
}

export default ({
  onUploadChange,
  fileList = [],
  readOnly = false,
  maxNumber = 3,
  listType = 'list',
  ...others
}: UploadCompontneProps) => {

  const [files, setFiles] = React.useState<any>(fileList);
  const [visible, setVisible] = React.useState(false);
  const [src, setSrc] = React.useState('');

  const onChange = (fileList: FileListType, addUpdateIndex: any) => {
    setFiles(fileList);
    onUploadChange?.(fileList)
  };

  const onUploadView = (src: string, index: number) => {
    setSrc(src);
    setVisible(true);
  }

  const config = {
    ...others,
    maxNumber,
    value: files || [],
    multiple: true,
    dataURLKey: "data_url",
    onChange: onChange,
  }
  return (
    <div style={{ flex: 1 }}>
      <ReactUpload {...config}>
        {(chidrenProps: ChildrenInterface) => {

          const renderChildrenProps = {
            readOnly,
            maxNumber,
            onUploadView,
            ...chidrenProps
          }

          return (
            <React.Fragment>
              {listType === 'list' ? <List {...renderChildrenProps} /> : <Card {...renderChildrenProps} />}
              {chidrenProps?.errors && (
                <div>
                  {chidrenProps.errors?.maxNumber && <Message type="error" title="文件上传数量已达上限" />}
                  {chidrenProps.errors?.accept && <Message type="error" title="文件类型错误" />}
                  {chidrenProps.errors?.maxFileSize && <Message type="error" title="文件大小超过上限" />}
                </div>
              )}
            </React.Fragment>
          )
        }}
      </ReactUpload>
      <Modal
        isOpen={visible}
        onClosed={() => setVisible(false)}
        width={600}
        confirmButtonProps={{ style: { display: "none" } }}
      >
        <img crossOrigin="anonymous" src={src} alt="" style={{ width: "100%", height: "100%" }} />
      </Modal>
    </div>
  );
}