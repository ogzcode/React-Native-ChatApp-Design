import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import * as SelectPrimitive from '@rn-primitives/select';
import { useTheme } from '../theme/useTheme';

export interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    options: SelectOption[];
    selectedValue: string;
    onValueChange: (value: string) => void;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    label?: string;
}

const SelectComponent: React.FC<SelectProps> = ({
    options,
    selectedValue,
    onValueChange,
    defaultValue,
    placeholder = 'Seçiniz...',
    disabled,
    label
}) => {
    const { theme } = useTheme();

    const styles = StyleSheet.create({
        trigger: {
            width: 'auto',
            minWidth: 120,
            justifyContent: 'center',
            borderRadius: 8,
            paddingVertical: 12,
            paddingHorizontal: 16,
            backgroundColor: theme.colors.inputBackground,
            borderWidth: 1,
            borderColor: theme.colors.border,
        },
        value: {
            fontSize: 14,
            color: theme.colors.secondary,
        },
        overlay: {
            ...StyleSheet.absoluteFillObject,
        },
        content: {
            minWidth: 200,
            width: 'auto',
            borderRadius: 8,
            maxHeight: 240,
            borderWidth: 1,
            borderColor: theme.colors.border,
            backgroundColor: theme.colors.background,
            alignSelf: 'flex-start',
        },
        groupLabel: {
            padding: 10,
            fontSize: 14,
            color: theme.colors.primary,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.border,
        },
        item: {
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
        },
        itemText: {
            flex: 1,
            fontSize: 16,
            color: theme.colors.secondary,
            flexShrink: 1,
        },
        itemIndicator: {
            width: 16,
            height: 16,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 8,
        },
        placeholder: {
            color: theme.colors.secondary,
        }
    });

    return (
        <SelectPrimitive.Root>
            <SelectPrimitive.Trigger
                style={[
                    styles.trigger,
                    disabled && { opacity: 0.5 },
                ]}
                disabled={disabled}
            >
                <SelectPrimitive.Value
                    style={[styles.value, !selectedValue && styles.placeholder]}
                    placeholder={selectedValue || 'Select...'}
                />
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
                <SelectPrimitive.Overlay style={styles.overlay}>
                    <SelectPrimitive.Content style={styles.content}>
                        <ScrollView>
                            <SelectPrimitive.Viewport>
                                <SelectPrimitive.Group>
                                    {options.map((option) => (
                                        <SelectPrimitive.Item
                                            style={styles.item}
                                            key={option.value}
                                            label={option.label}
                                            value={option.value}
                                            onPress={() => onValueChange(option.value)}
                                            disabled={disabled}
                                        >
                                            <Text style={styles.itemText}>{option.label}</Text>
                                        </SelectPrimitive.Item>
                                    ))}
                                </SelectPrimitive.Group>
                            </SelectPrimitive.Viewport>
                        </ScrollView>
                    </SelectPrimitive.Content>
                </SelectPrimitive.Overlay>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    );
};

export default SelectComponent;