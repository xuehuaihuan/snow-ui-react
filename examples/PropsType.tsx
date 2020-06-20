import { BaseProps } from '@/common/BaseProps';
import { ReactNode } from 'react';

export interface AppProps extends BaseProps {
  centerMode?: boolean;
  fgcolor?: string;
  size?: string;
}

export interface AppState {
  children?: ReactNode[];
}

export default AppProps;
