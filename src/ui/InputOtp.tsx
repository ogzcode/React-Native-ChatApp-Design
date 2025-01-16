import React, { useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface OTPInputProps {
  otp: string[]; // OTP state (dışarıdan gelen)
  onChange: (otp: string[]) => void; // OTP'yi güncelleme fonksiyonu
  length: number; // OTP uzunluğu
  containerStyle?: object; // Dış container için stil
  inputStyle?: object; // Her bir input için stil
}

const OTPInput: React.FC<OTPInputProps> = ({
  otp,
  onChange,
  length,
  containerStyle,
  inputStyle,
}) => {
  const inputsRef = useRef<Array<TextInput | null>>([]); // Input referansları

  // İlk TextInput'a odaklan
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

      // Eğer son kutuda değilsek, bir sonraki kutuya odaklan
      if (index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    } else if (text === '') {
      // Silme durumunda sadece ilgili kutuyu temizle
      newOtp[index] = '';
      onChange(newOtp);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index] === '' && index > 0) {
        // Mevcut kutu boşsa, bir önceki kutuyu temizle ve oraya odaklan
        newOtp[index - 1] = '';
        onChange(newOtp);
        inputsRef.current[index - 1]?.focus();
      } else {
        // Mevcut kutuyu temizle
        newOtp[index] = '';
        onChange(newOtp);
      }
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputsRef.current[index] = ref)} // Referansları kaydet
          style={[styles.input, inputStyle]}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 24,
  },
  input: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
});

export default OTPInput;
