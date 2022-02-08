import React from 'react';
import { FileInput, Icon, Modal, Button } from 'uiw';

const Upload = ({ uploadType, value, onChange, readonly, ...others }: any) => {
  const [visible, setVisible] = React.useState(false);
  const [src, setSrc] = React.useState('');

  const renderBtn = () => {
    if (readonly) return null;
    if (uploadType === 'card') return <Icon onChange={onChange} type="plus" />;
    if (uploadType === 'picture' || uploadType === 'text')
      return <Button>新增</Button>;
    return null;
  };

  return (
    <React.Fragment>
      <FileInput
        uploadType={uploadType}
        readonly={readonly}
        value={value}
        onChange={onChange}
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
