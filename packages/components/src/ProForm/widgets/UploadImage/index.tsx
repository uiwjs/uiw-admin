import React from 'react';
import { Button, List, Icon, Modal } from 'uiw'
import ImageUploading from '../Upload';
import { ImageUploadingPropsType, ImageListType } from '../Upload/types'


export interface UploadImageProps extends ImageUploadingPropsType {
  // 上传变化的回调
  onUploadChange?: (imageList: ImageListType) => void;
  // 图片列表
  fileList?: ImageListType;
  // 是否只读
  readOnly?: boolean;
}

export default function UploadImage({
  onUploadChange,
  fileList,
  readOnly = false,
  maxNumber = 3,
  ...others
}: UploadImageProps) {

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
        }: any) => (
          <div>
            {!readOnly && maxNumber !== imageList.length && <Button icon="upload" onClick={onImageUpload} type="primary">上传图片</Button>}
            {/* {imageList.length > 0 && <Button icon="delete" onClick={onImageRemoveAll} type="primary">全部删除</Button>} */}
            <List
              style={{ marginTop: 10 }}
              dataSource={imageList}
              renderItem={(image, index) => {
                return (
                  <List.Item extra={(
                    <div>
                      {!readOnly && <Icon style={{ marginRight: 10 }} type="upload" onClick={() => onImageUpdate(index)} />}
                      {!readOnly && <Icon style={{ marginRight: 10 }} type="delete" onClick={() => onImageRemove(index)} />}
                      <Icon type="eye-o" onClick={() => onUploadView(image['data_url'], index)} />
                    </div>
                  )}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={image['data_url']} alt="" width="10%" />
                      <span style={{ marginLeft: 10 }}>{image?.file?.name}</span>
                    </div>
                  </List.Item>
                );
              }}
            />
          </div>
        )}
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