import React from 'react';
import { Button, List, Icon, Modal, Message } from 'uiw'
import ImageUploading from '../Upload';
import { ImageUploadingPropsType, ImageListType, ErrorsType } from '../Upload/types'
import { isImageValid } from '../Upload/validation'


export interface UploadCompontneProps extends ImageUploadingPropsType {
  // 上传变化的回调
  onUploadChange?: (imageList: ImageListType) => void;
  // 图片列表
  fileList?: ImageListType;
  // 是否只读
  readOnly?: boolean;
}

export default ({
  onUploadChange,
  fileList,
  readOnly = false,
  maxNumber = 3,
  ...others
}: UploadCompontneProps) => {

  const [images, setImages] = React.useState<any>(fileList);
  const [visible, setVisible] = React.useState(false);
  const [src, setSrc] = React.useState('');


  const onChange = (imageList: ImageListType, addUpdateIndex: any) => {
    setImages(imageList);
    onUploadChange?.(imageList)
  };

  const onUploadView = (src: string, index: number) => {
    setSrc(src);
    setVisible(true);
  }

  // 错误提示
  const renderError = (errors: ErrorsType) => (
    errors ? <div>
      {errors.maxNumber && <Message type="error" title="文件上传数量已达上限" />}
      {errors.accept && <Message type="error" title="文件类型错误" />}
      {errors.maxFileSize && <Message  type="error" title="文件大小超过上限" />}
      {errors.resolution && <Message type="error" title="超过分辨率上限" />}
    </div> : null
  )

  const config = {
    ...others,
    maxNumber,
    value: images,
    multiple: true,
    dataURLKey: "data_url",
    onChange: onChange,
  }
  return (
    <div style={{ flex: 1 }}>
      <ImageUploading {...config}>
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          errors
        }: any) => {
          // 上传按钮权限
          const uploadBtn = !readOnly && maxNumber !== imageList.length
          // 全部删除按钮权限
          const deleteAllBtn = imageList.length > 0
          return (
            <div>
              <List
                header={(
                  <div>
                    {uploadBtn && <Button icon="upload" onClick={onImageUpload} type="primary">上传</Button>}
                    {deleteAllBtn && <Button icon="delete" type="danger" onClick={onImageRemoveAll}>全部删除</Button>}
                  </div>
                )}
                style={{ marginTop: 10 }}
                dataSource={imageList}
                renderItem={(image, index) => {
                  const type = image?.file?.type
                  return (
                    <List.Item extra={(
                      <div>
                        {!readOnly && <Icon style={{ marginRight: 10 }} type="upload" onClick={() => onImageUpdate(index)} />}
                        {!readOnly && <Icon style={{ marginRight: 10 }} type="delete" onClick={() => onImageRemove(index)} />}
                        {/* 图片类型才能查看 */}
                        {isImageValid(type) && <Icon type="eye-o" onClick={() => onUploadView(image['data_url'], index)} />}
                      </div>
                    )}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {/* 图片类型才展示图片 */}
                        {isImageValid(type) && <img src={image['data_url']} alt="" width="5%" />}
                        <span style={{ marginLeft: 10 }}>{image?.file?.name}</span>
                      </div>
                    </List.Item>
                  );
                }}
              />
              {renderError(errors)}
            </div>
          )
        }}
      </ImageUploading>
      <Modal
        isOpen={visible}
        onClosed={() => setVisible(false)}
        width={600}
        confirmButtonProps={{ style: { display: "none" } }}
      >
        <img src={src} alt="" style={{ width: "100%", height: "100%" }} />
      </Modal>
    </div>
  );
}