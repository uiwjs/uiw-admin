import React from 'react';
import { FileInput, Icon, Modal, Button, FileInputListProps } from 'uiw';

interface FileInputProps extends Omit<FileInputListProps, 'uploadType'> {
  uploadType?: 'card' | 'picture' | 'text';
}

const Upload = ({
  uploadType,
  value,
  readonly = false,
  maxNumber,
  ...others
}: FileInputProps) => {
  const [visible, setVisible] = React.useState(false);
  const [src, setSrc] = React.useState('');

  const renderBtn = () => {
    if (readonly) return null;
    if (uploadType === 'card') return <Icon type="plus" />;
    if (uploadType === 'picture' || uploadType === 'text')
      return <Button type="primary">新增</Button>;
    return null;
  };

  return (
    <React.Fragment>
      <FileInput
        uploadType={uploadType}
        readonly={readonly}
        value={value}
        maxNumber={maxNumber}
        onPreview={(file: { [key: string]: any }) => {
          setSrc(file?.dataURL);
          setVisible(true);
        }}
        {...others}
      >
        {renderBtn()}
      </FileInput>
      {/* 预览 */}
      <Modal
        isOpen={visible}
        onClosed={() => setVisible(false)}
        width={600}
        confirmButtonProps={{ style: { display: 'none' } }}
      >
        <img
          crossOrigin="anonymous"
          src={src}
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
      </Modal>
    </React.Fragment>
  );
};

export default Upload;
