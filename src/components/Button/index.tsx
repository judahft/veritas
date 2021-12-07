import React from 'react';
import { Text } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => (
  <Text>
    {children}
  </Text>
);

export default Button;
