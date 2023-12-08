import { View } from 'react-native'
import { login } from "../../services/auth";

import LogoHeader from './components/LogoHeader';
import InlineHeader from './components/InlineHeader';
import Form from './components/Form';
import { styles as authStyles} from './style/authStyle';

export default function LoginScreen() {
    return (

        <View style={authStyles.container}>
            <LogoHeader />
            <View style={authStyles.inlineBox}>
                <InlineHeader
                    header={"Log in to Firebase todo app"}
                    subtitle={"Use your email and password information to log in"} />
                <Form onSubmit={login} btnText={"Login"} />
            </View>
        </View>

    )
}