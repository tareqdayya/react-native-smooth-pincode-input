import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import React = require('react');

export type SmoothPinCodeInputProps = {
  value: string,
  codeLength: number,
  cellSize?: number,
  cellSpacing?: number,

  placeholder?: string | JSX.Element,
  mask?: string | JSX.Element,
  maskDelay?: number,
  password?: boolean,

  autoFocus?: boolean,

  restrictToNumbers?: boolean,

  containerStyle?: StyleProp<ViewStyle>,

  cellStyle?: StyleProp<ViewStyle>,
  cellStyleFocused?: StyleProp<ViewStyle>,
  cellStyleFilled?: StyleProp<ViewStyle>,

  textStyle?: StyleProp<TextStyle>,
  textStyleFocused?: StyleProp<TextStyle>

  animated?: boolean,
  animationFocused?: string | object,

  onFulfill?: Function,
  onChangeText?: Function,
  onBackspace?: Function,
  onTextChange?: Function,
  testID?: any,
  onFocus?: Function,
  onBlur?: Function,
  keyboardType?: string,
  editable?: boolean,
  inputProps?: TextInputProps,
};

export default class SmoothPinCodeInput extends React.Component<SmoothPinCodeInputProps, any> {
}
