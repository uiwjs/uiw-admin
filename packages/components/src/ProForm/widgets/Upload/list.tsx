import React from 'react'
import { Button, List, Icon } from 'uiw'
import { isImageValid } from './utils'
import { ChildrenInterface } from '../../../Upload/types'

interface ListProps {
  readOnly?: boolean;
  maxNumber?: number;
  onUploadView: (src: string, index: number) => void;
}

export default ({
  readOnly,
  maxNumber,
  onUploadView,
  fileList,
  onFileUpload,
  onFileRemoveAll,
  onFileUpdate,
  onFileRemove,
}: ChildrenInterface & ListProps) => {
  // 上传按钮权限
  const uploadBtn = maxNumber !== fileList.length
  // 全部删除按钮权限
  const deleteAllBtn = fileList.length > 0
  return (
    <List
      header={!readOnly && (
        <div>
          {uploadBtn && <Button icon="upload" onClick={onFileUpload} type="primary">上传</Button>}
          {deleteAllBtn && <Button icon="delete" type="danger" onClick={onFileRemoveAll}>全部删除</Button>}
        </div>
      )}
      style={{ marginTop: 10 }}
      dataSource={fileList}
      renderItem={(image, index) => {
        const type = image?.file?.type
        return (
          <List.Item extra={(
            <div>
              {!readOnly && <Icon style={{ marginRight: 10 }} type="upload" onClick={() => onFileUpdate(index)} />}
              {!readOnly && <Icon style={{ marginRight: 10 }} type="delete" onClick={() => onFileRemove(index)} />}
              {/* 图片类型才能查看 */}
              {isImageValid(type) && <Icon type="eye-o" onClick={() => onUploadView(image['data_url'], index)} />}
            </div>
          )}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* 图片类型才展示图片 */}
              {isImageValid(type) && <img crossOrigin="anonymous" src={image['data_url']} alt="" width="5%" />}
              <span style={{ marginLeft: 10 }}>{image?.file?.name}</span>
            </div>
          </List.Item>
        );
      }}
    />
  )
}