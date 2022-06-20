import React from "react";
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import {ProPicker, ProPickerOption} from "react-native-pro-picker";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class TestOptionModel {
  id?: number;
  value: string;
  label: string;

  constructor(data: {id: number, value: string, label: string}) {
    this.id = data.id;
    this.value = data.value;
    this.label = data.label;
  }
}

export default function App() {
  const Stack = createNativeStackNavigator();

  const ExamplesScreen = (): JSX.Element => {
    let options : ProPickerOption[] = [
      {
        id: 1,
        value: "js",
        label: "JavaScript"
      },
      {
        id: 2,
        value: "ts",
        label: "Typescript"
      },
      {
        id: 3,
        value: "kt",
        label: "Kotlin"
      },
    ];

    const [basicSelectedItem, setBasicSelectedItem] = React.useState<TestOptionModel>();
    const [customTextSelectedItem, setCustomTextSelectedItem] = React.useState<TestOptionModel>();
    const [colorsSelectedItem, setColorsSelectedItem] = React.useState<TestOptionModel>();
    const [disabledSelectedItem, setDisabledSelectedItem] = React.useState<TestOptionModel>();

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.mainView}>
            <View style={styles.paddedView}>
              <Text style={styles.pickerTypeLabel}>Basic Pro Picker Example:</Text>
              <View style={styles.paddedView}>
                <ProPicker items={options} onItemSelected={(item) => {
                  setBasicSelectedItem(item);
                }}/>
                <View style={styles.selectedItemContainer}>
                  <Text style={styles.selectedItemLabel}>Selected item:</Text>
                  <Text>{basicSelectedItem !== undefined ? `${basicSelectedItem!!.label} - ${basicSelectedItem!!.value}` : "No item selected"}</Text>
                </View>
              </View>
            </View>

            <View style={styles.paddedView}>
              <Text style={styles.pickerTypeLabel}>Custom Texts Pro Picker Example:</Text>
              <View style={styles.paddedView}>
                <ProPicker cancelText={"Custom Cancel Text"} placeholder={"Custom Placeholder Text"} items={options} onItemSelected={(item) => {
                  setCustomTextSelectedItem(item);
                }}/>
                <View style={{paddingHorizontal: 16, marginTop: 8, flexDirection: "row", alignItems: "center"}}>
                  <Text style={styles.selectedItemLabel}>Selected item:</Text>
                  <Text>{customTextSelectedItem !== undefined ? `${customTextSelectedItem!!.label} - ${customTextSelectedItem!!.value}` : "No item selected"}</Text>
                </View>
              </View>
            </View>

            <View style={styles.paddedView}>
              <Text style={styles.pickerTypeLabel}>Custom Colors Picker Example:</Text>
              <View style={styles.paddedView}>
                <ProPicker backgroundColor={"#7CA5B8"} fontColor={"white"} iosArrowTintColor={"#C6EBBE"} items={options} onItemSelected={(item) => {
                  setColorsSelectedItem(item);
                }}/>
                <View style={{paddingHorizontal: 16, marginTop: 8,  flexDirection: "row", alignItems: "center"}}>
                  <Text style={styles.selectedItemLabel}>Selected item:</Text>
                  <Text>{colorsSelectedItem !== undefined ? `${colorsSelectedItem!!.label} - ${colorsSelectedItem!!.value}` : "No item selected"}</Text>
                </View>
              </View>
            </View>

            <View style={styles.paddedView}>
              <Text style={styles.pickerTypeLabel}>Disabled Picker Example:</Text>
              <View style={styles.paddedView}>
                <ProPicker items={options} enabled={false} onItemSelected={(item) => {
                  setDisabledSelectedItem(item);
                }}/>
                <View style={{paddingHorizontal: 16, marginTop: 8, flexDirection: "row", alignItems: "center"}}>
                  <Text style={styles.selectedItemLabel}>Selected item:</Text>
                  <Text>{disabledSelectedItem !== undefined ? `${disabledSelectedItem!!.label} - ${disabledSelectedItem!!.value}` : "No item selected"}</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Pro Picker Example App" component={ExamplesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#EEEEEE"
  },
  mainView:{
    flex:1,
    backgroundColor:"#EEEEEE",
    padding:8
  },
  paddedView:{
    padding:8
  },
  pickerTypeLabel:{
    marginBottom:8
  },
  selectedItemLabel:{
    marginEnd:4
  },
  selectedItemContainer:{
    paddingHorizontal:16,
    marginTop:8,
    flexDirection:"row",
    alignItems:"center"
  }
});
