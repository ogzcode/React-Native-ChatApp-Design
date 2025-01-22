import React, { useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { useStyle } from './useStyle';

interface OTPInputProps {
  otp: string[]; 
  onChange: (otp: string[]) => void;
  length: number;
  containerStyle?: object;
  inputStyle?: object;
}

const OTPInput: React.FC<OTPInputProps> = ({
  otp,
  onChange,
  length,
  containerStyle,
  inputStyle,
}) => {
  const inputsRef = useRef<Array<TextInput | null>>([]);
  const styles = useStyle();

  useEffect(() => {
    if (inputsRef.current[0]) {
      inputsRef.current[0]?.focus();
    }
  }, []);

  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    if (text.length === 1) {
      newOtp[index] = text;
      onChange(newOtp);
      if (index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    } else if (text === '') {
      newOtp[index] = '';
      onChange(newOtp);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index] === '' && index > 0) {
        newOtp[index - 1] = '';
        onChange(newOtp);
        inputsRef.current[index - 1]?.focus();
      } else {
        newOtp[index] = '';
        onChange(newOtp);
      }
    }
  };

  return (
    <View style={[styles.inputOtpContainer, containerStyle]}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputsRef.current[index] = ref)} // Referansları kaydet
          style={[styles.inputOtp]}
          keyboardType="number-pad"
          maxLength={1}
          value={value}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          autoFocus={index === 0} // Sadece ilk kutuya odaklan
        />
      ))}
    </View>
  );
};

export default OTPInput;
