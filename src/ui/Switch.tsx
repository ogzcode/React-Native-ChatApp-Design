import * as React from 'react';
import * as SwitchPrimitive from '@rn-primitives/switch';
import { StyleSheet } from 'react-native';
import { useTheme } from '../theme/useTheme';
import { Icon } from 'lucide-react-native';

interface CustomSwitchProps {
    checked: boolean;
    setChecked: (checked: boolean) => void;
    label?: string;
    icon?: React.ReactNode;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ checked, setChecked, label, icon }) => {
    const { theme } = useTheme();

    return (
        <SwitchPrimitive.Root
            checked={checked}
            onCheckedChange={setChecked}
            style={[
                styles.switchRoot,
                {
                    backgroundColor: checked 
                        ? theme.colors.primary 
                        : theme.colors.border
                }
            ]}
        >
            <SwitchPrimitive.Thumb
                style={[
                    styles.thumb,
                    { backgroundColor: theme.colors.background },
                    checked ? styles.thumbChecked : styles.thumbUnchecked,
                ]}
            />
        </SwitchPrimitive.Root>
    );
};

const styles = StyleSheet.create({
    switchRoot: {
        width: 42,
        height: 24,
        borderRadius: 15,
        justifyContent: 'center',
        paddingHorizontal: 4,
    },
    thumb: {
        width: 16,
        height: 16,
        borderRadius: 14,
        elevation: 3, // Android için gölge
        shadowColor: '#000', // iOS için gölge
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    thumbChecked: {
        alignSelf: 'flex-end', // Sağ tarafa taşır
    },
    thumbUnchecked: {
        alignSelf: 'flex-start', // Sol tarafa taşır
    },
});

export default CustomSwitch;