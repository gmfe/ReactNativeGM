import { FC, ReactNode } from 'react';
import { ViewProps } from 'react-native';

import _Style from './styles';
import _Variable from './variable';

export const S: typeof _Style;
export const Style: typeof _Style;
export const V: typeof _Variable;
export const Variable: typeof _Variable;

export { default as Screen } from './screen';
export { ScreenProps } from './screen/screen.props';

export * as AsyncStorage from './async_storage';

export type ButtonType = 'default' | 'primary' | 'warning';

export interface TouchableComponent {
  type?: ButtonType;
  plain?: boolean;
  disabled?: boolean;
  mini?: boolean;
  onPress?: () => void | Promise<any>;
  children: ReactNode;
}

interface ButtonProps extends TouchableComponent {}

export const Button: FC<ButtonProps>;

export const LayerRoot: FC;

export interface MaskProps {
  isVisible: boolean;
  onCancel: () => void;
}

export const Mask: FC<MaskProps>;

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export const Icon: FC<IconProps>;

export interface DataItem {
  value: number | string;
  text: string;
  disabled?: boolean;
  desc?: string;
}

export interface ActionSheetProps {
  title?: string;
  list: DataItem[];
  onSelect: (value: number | string) => void;
  onCancel?: () => void;
}

export interface ActionSheetStatic {
  render: (props: ActionSheetProps) => void;
  hide: () => void;
}

export const ActionSheet: FC<ActionSheetProps> & ActionSheetStatic;

export interface CellProps extends ViewProps {
  first?: boolean;
  access?: boolean;
  input?: boolean;
  error?: boolean;
  onPress?: () => void;
}

export const Cell: FC<CellProps>;
