import { View, Text, Platform, Pressable, Image, KeyboardAvoidingView } from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { useStyle } from './useStyle';
import LogIn from "../../assets/image/LogIn.png";
import { Input } from '../../ui/input/Input';
import { useState } from 'react';
import { WavyLine, TopRightDecoration, BottomLeftDecoration } from '../../assets/svg/Decorations';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const { theme, toggleTheme } = useTheme();
  const styles = useStyle();
  const navigation = useNavigation();
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    //toggleTheme();
    /* if (!phone) {
      console.log("Lütfen telefon numaranızı girin");
      return;
    }
    console.log("Telefon doğrulaması başlatılıyor:", { phone }); */
    navigation.navigate("OtpControl" as never);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[styles.container]}>
      <View style={styles.decorativeTop}>
        <TopRightDecoration colors={theme.colors} />
      </View>

      <Image source={LogIn} style={styles.image} />
      <View style={[styles.inputContainer]}>
        <Text style={[styles.title]}>Hoş Geldiniz</Text>
        <Text style={[styles.description]}>Telefon numaranızı girerek sohbet uygulamasına giriş yapabilirsiniz.</Text>

        <WavyLine colors={theme.colors} />

        <Input
          placeholder="Telefon Numarası"
          value={phone}
          onChangeText={setPhone}
          type="number"
          style={[styles.input]}
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