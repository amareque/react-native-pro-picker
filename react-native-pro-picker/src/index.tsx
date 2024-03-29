import * as React from 'react';
import {useEffect} from "react";
import {ActionSheetIOS, View, Text, Platform, TouchableOpacity, Image, StyleSheet} from "react-native";
import {Picker} from "@react-native-picker/picker";

type ProPickerOption = {
    id: number;
    value: string;
    label: string;
}

let actionSheetPickerValues: string[] = [];
const arrowDownIcon = require("./assets/ic-arrow-down.png");

const ProPicker = (
    { items, onItemSelected, defaultOption, backgroundColor = "#FFFFFF", fontColor = "#000000", iosArrowTintColor = "#0451E4", iosBorderColor = "#000000", placeholder = "Select...", cancelText = "Cancel", enabled = true }
    :
    { items: ProPickerOption[], onItemSelected: (option: ProPickerOption) => void, defaultOption?: ProPickerOption, backgroundColor?: string, fontColor?: string, iosArrowTintColor?: string, iosBorderColor?: string, placeholder?: string, cancelText?: string, enabled?: boolean }
): JSX.Element => {
    const [options, setOptions] = React.useState<ProPickerOption[]>();
    const [selectedOption, setSelectedOption] = React.useState<ProPickerOption | undefined>(defaultOption);

    let view: JSX.Element;

    const populateAndroidOptions = (options: ProPickerOption[]) => {
        const placeholderOption = {id: 0, value: "0", label: placeholder} as ProPickerOption;

        setOptions([placeholderOption, ...options]);
    }

    const populateIosOptions = (options: ProPickerOption[]) => {
        actionSheetPickerValues = [];

        for (let option of options) {
            actionSheetPickerValues.push(option.label);
        }
    }

    const optionSelectedIos = (i?: number) => {
        if(i !== undefined){
            const pressedCancelButton = i == actionSheetPickerValues.length;

            if(!pressedCancelButton){
                const selection = options?.find(x => x.label == actionSheetPickerValues[i]);
                if(selection != undefined){
                    setSelectedOption(selection);
                }
            }
        }
    }

    useEffect(() => {
        populateAndroidOptions(items);

        populateIosOptions(items);
    }, []);

    useEffect(() => {
        onItemSelected(selectedOption!!);
    }, [selectedOption]);

    switch(Platform.OS){
        case "android":
        case "web":
            view = (
                <View style={{backgroundColor: backgroundColor}}>
                    <Picker
                        enabled={enabled}
                        style={{color: fontColor}}
                        selectedValue={selectedOption}
                        onValueChange={(itemValue: ProPickerOption) => {
                            setSelectedOption(itemValue)
                        }}>
                        {
                            options != undefined &&
                            options.map((item, index) => {
                                return (
                                    <Picker.Item key={"react-native-pro-picker-item-" + index} label={item.label} value={item}/>
                                )
                            })
                        }
                    </Picker>
                </View>
            );
            break;
        case "ios":
            view = (
                <View>
                    <TouchableOpacity disabled={!enabled} style={[styles.iosPickerMainLayout, {borderColor: iosBorderColor, backgroundColor: enabled ? backgroundColor : "#DDDDDD"}]}
                      onPress={() => {
                          if(enabled){
                              ActionSheetIOS.showActionSheetWithOptions({options: [...actionSheetPickerValues, cancelText], cancelButtonIndex: actionSheetPickerValues.length}, optionSelectedIos)
                          }
                      }}>
                        <Text style={{color: fontColor}}>{selectedOption != undefined ? selectedOption.label : placeholder}</Text>
                        <Image source={arrowDownIcon} style={[styles.arrowIconBaseStyle, {tintColor: iosArrowTintColor}]}/>
                    </TouchableOpacity>
                </View>
            );
            break;
        case "windows":
        case "macos":
        default:
            view = (
                <View>
                    <Text>React Native Pro Picker is not supported on this platform.</Text>
                </View>
            )
            break;
    }

    return view;
}

const styles = StyleSheet.create({
    arrowIconBaseStyle: {
        height: 24,
        width: 24,
        resizeMode: "contain"
    },
    iosPickerMainLayout: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.5,
        justifyContent: "space-between",
        padding: 16,
        height: 50,
        borderRadius: 10
    }
});

export {
    ProPicker,
    ProPickerOption
};
