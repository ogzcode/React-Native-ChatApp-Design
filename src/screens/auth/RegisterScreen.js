import { View } from 'react-native'
import { register } from '../../services/auth';

import LogoHeader from './components/LogoHeader';
import InlineHeader from './components/InlineHeader';
import Form from './components/Form';
import { styles as authStyles } from './style/authStyle';


export default function RegisterScreen() {
    return (
        <View style={authStyles.container}>
            <LogoHeader />
            <View style={authStyles.inlineBox}>
                <InlineHeader
                    header={"Welcome Todo Firebase App"}
                    subtitle={"Set your email and password to continue."}
                />
                <Form onSubmit={register} btnText={"Register"} />
            </View>
        </View>
    )
}