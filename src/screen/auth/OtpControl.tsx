import { View, Text, Platform, Pressable, Image, KeyboardAvoidingView } from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { useStyle } from './useStyle';
import Password from "../../assets/image/Password.png";
import OTPInput from '../../ui/input/InputOtp';
import { useState } from 'react';
import { WavyLine, TopRightDecoration, BottomLeftDecoration } from '../../assets/svg/Decorations';
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';


export default function OtpControl() {
  const { theme, toggleTheme } = useTheme();
  const styles = useStyle();
  const navigation = useNavigation();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

  const handleLogin = () => {
    toggleTheme();
    if (!otp) {
      console.log("Lütfen telefon numaranızı girin");
      return;
    }
    console.log("Telefon doğrulaması başlatılıyor:", { otp });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[styles.container]}>
      <View style={styles.decorativeTop}>
        <TopRightDecoration colors={theme.colors} />
      </View>
      <Pressable onPress={() => navigation.goBack()} style={[styles.backButton]}>
        <ArrowLeft color={theme.colors.primary} size={36} />
      </Pressable>

      <Image source={Password} style={styles.image} />
      <View style={[styles.inputContainer]}>
        <Text style={[styles.title]}>Telefon Doğrulama</Text>
        <Text style={[styles.description]}>
          Telefon numaranızı doğrulamak için 6 haneli kodu giriniz.
        </Text>

        <WavyLine colors={theme.colors} />

        <OTPInput
          otp={otp}
          onChange={setOtp}
          length={6}
          containerStyle={[styles.input]}
          inputStyle={[styles.input]}
        />

        <Pressable onPress={handleLogin} style={[styles.loginButton]}>
          <Text style={[styles.loginButtonText]}>Devam Et</Text>
        </Pressable>
      </View>

      <View style={styles.decorativeBottom}>
        <BottomLeftDecoration colors={theme.colors} />
      </View>
    </KeyboardAvoidingView>
  );
}