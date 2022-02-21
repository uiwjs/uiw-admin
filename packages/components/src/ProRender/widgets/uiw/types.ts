import React from 'react';
import { Schema } from '../../form-render-core/src/interface';

export interface Options {
  label: string;
  value: string;
}

export interface MapProps {
  schema: Schema;
  children: React.ReactNode;
  title?: string;
  theme?: string;
  displayType?: string;
  allCollapsed?: boolean;
}

export interface FrInputProps {
  schema: Schema;
  style: React.CSSProperties;
  value: string | undefined;
  onChange: (text: string) => void;
  disabled?: string | boolean;
}

export interface FrSelectProps {
  value: any;
  onChange: (text: string) => void;
  schema: Schema;
  style?: React.CSSProperties;
  disabled?: string | boolean;
  options?: Options[];
}
