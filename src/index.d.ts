import { FC } from 'react';
import { TouchableHighlightProps } from 'react-native';

export { default as Screen } from './screen';
export { ScreenProps } from './screen/screen.props';

export * as AsyncStorage from './async_storage';

export interface TouchableComponent extends TouchableHighlightProps {}

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
