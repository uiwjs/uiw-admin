import React from 'react';

export interface FileType {
  dataURL?: string;
  file?: File;
  [key: string]: any;
}

export type FileListType = Array<FileType>;

export interface ReactUploadPropsType {
  value: FileListType;
  onChange: (value: FileListType, addUpdatedIndex?: Array<number>) => void;
  children?: (props: ChildrenInterface) => React.ReactNode;
  multiple?: boolean;
  maxNumber?: number;
  accept?: Array<string>;
  maxFileSize?: number;
  resolutionWidth?: number;
  resolutionHeight?: number;
  resolutionType?: ResolutionType;
  onError?: (errors: ErrorsType, files?: FileListType) => void;
  dataURLKey?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}

export interface ChildrenInterface {
  imageList: FileListType;
  onFileUpload: () => void;
  onFileRemoveAll: () => void;
  errors: ErrorsType;
  onFileUpdate: (index: number) => void;
  onFileRemove: (index: number) => void;
}

export type ErrorsType = {
  maxFileSize?: boolean;
  maxNumber?: boolean;
  accept?: boolean;
  resolution?: boolean;
} | null;

export type ResolutionType = 'absolute' | 'less' | 'more' | 'ratio';
