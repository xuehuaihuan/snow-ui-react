import { BaseProps } from '../common/BaseProps';

export interface RippleProps extends BaseProps {
  centerMode?: boolean;
  fgcolor?: string;
  size?: string;
};

export interface RippleState {
  children?: any[];
}

export default RippleProps;
