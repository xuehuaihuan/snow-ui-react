import { BaseProps } from '@/common/BaseProps';
import { ReactNode } from 'react';

export interface RippleProps extends BaseProps {
  centerMode?: boolean;
  fgcolor?: string;
  size?: string;
}

export interface RippleState {
  children?: ReactNode[];
}

export default RippleProps;
