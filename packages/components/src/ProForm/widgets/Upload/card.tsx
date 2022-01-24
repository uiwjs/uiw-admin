import React from 'react'
import { Icon } from 'uiw'
import { isImageValid } from './utils'
import { ChildrenInterface } from '../../../Upload/types'
import './style/index.css'

interface CardProps {
  readOnly?: boolean;
  maxNumber?:number;
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
}: ChildrenInterface & CardProps) => {
  // 上传按钮权限
  const uploadBtn = maxNumber !== fileList.length
  return (
    <div className="upload-list-picture-card-row">
      {fileList.map((image: any, index: number) => {
        const type = image?.file?.type
        return (
          <div className="upload-list-picture-card-container" key={index}>
            <div className="upload-list-item">
              {isImageValid(type) && <img onClick={() => !readOnly && onFileUpdate(index)} crossOrigin="anonymous" src={image['data_url']} alt="" width="100%" height="100%" />}
              <div className="upload-list-item-actions">
                <div className="upload-list-picture-card-row">
                  {!readOnly && <Icon type="delete" onClick={() => onFileRemove(index)} />}
                  {/* 图片类型才能查看 */}
                  {isImageValid(type) && <Icon style={{ marginLeft: 10 }} type="eye-o" onClick={() => onUploadView(image['data_url'], index)} />}
                </div>
              </div>
            </div>
          </div>
        )
      })}
      {uploadBtn && (
        <div className="upload-list-picture-card-container upload-select-picture-card">
          <div onClick={onFileUpload}>
            <Icon type="upload" />
            <div>上传</div>
          </div>
        </div>
      )}
    </div>
  )
}