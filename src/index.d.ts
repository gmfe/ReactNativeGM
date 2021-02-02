import { FC, ReactNode } from 'react';
import { ViewProps, TextProps, ViewStyle, TextInputProps } from 'react-native';

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

export interface CellsProps extends ViewProps {}

export const Cells: FC<CellsProps>;

export interface CellBodyProps extends ViewProps {
  input?: boolean;
  error?: boolean;
}

export const CellBody: FC<CellBodyProps>;

export interface CellFooterProps extends TextProps {
  access?: boolean;
  children?: ReactNode;
}

export const CellFooter: FC<CellFooterProps>;

export interface CellHeaderProps extends ViewProps {}

export const CellHeader: FC<CellHeaderProps>;

export interface CellTipsProps extends TextProps {}

export const CellTips: FC<CellTipsProps>;

export interface CellTitleProps extends TextProps {}

export const CellTitle: FC<CellTipsProps>;

export interface DialogProps {
  title?: string;
  buttons?: { text: string; onPress: () => void }[];
  onCancel?: () => void;
  children?: ReactNode;
}

export interface DialogStatic {
  render: (props: DialogProps) => void;
  hide: () => void;
}

export const Dialog: FC<DialogProps> & DialogStatic;

export const Alert: (
  title: string,
  content: string,
  options?: { okText: string; style: ViewStyle },
) => Promise<void>;

export const Confirm: (
  title: string,
  content: string,
  options?: { okText: string; cancelText: string; style: ViewStyle },
) => Promise<void>;

export const Prompt: (
  title: string,
  content: string,
  options?: {
    onOk: () => void;
    okText: string;
    cancelText: string;
    style: ViewStyle;
  } & TextInputProps,
) => Promise<void>;

export interface PopupProps {
  position: 'top' | 'right' | 'bottom' | 'left';
  onCancel: () => void;
}

export interface PopupStatic {
  render: () => Promise<void>;
  hide: () => void;
}

export const Popup: FC<PopupProps> & PopupStatic;

export interface RadioProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  color?: string;
}

export const Radio: FC<RadioProps>;
