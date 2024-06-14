import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import {ProPicker, ProPickerOption, ProPickerOptionItem} from "react-native-pro-picker";

export default function Index() {
  const [basicSelectedItem, setBasicSelectedItem] = React.useState<ProPickerOption>();
  const [customTextSelectedItem, setCustomTextSelectedItem] = React.useState<ProPickerOption>();
  const [colorsSelectedItem, setColorsSelectedItem] = React.useState<ProPickerOption>();
  const [disabledSelectedItem, setDisabledSelectedItem] = React.useState<ProPickerOption>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.paddedView}>
            <Text style={styles.pickerTypeLabel}>Basic Pro Picker Example:</Text>
            <View style={styles.paddedView}>
              <ProPicker onItemSelected={(item) => {
                setBasicSelectedItem(item);
              }}>
                <ProPickerOptionItem id={1} value={'js'} label={"Javascript"}/>
                <ProPickerOptionItem id={2} value={'ts'} label={"Typescript"}/>
                <ProPickerOptionItem id={3} value={'kt'} label={"Kotlin"}/>
                <ProPickerOptionItem id={4} value={'sw'} label={"Swift"}/>
              </ProPicker>
              <View style={styles.selectedItemContainer}>
                <Text style={styles.selectedItemLabel}>Selected item:</Text>
                <Text>{basicSelectedItem !== undefined ? `${basicSelectedItem!!.label} - ${basicSelectedItem!!.value}` : "No item selected"}</Text>
              </View>
            </View>
          </View>

          <View style={styles.paddedView}>
            <Text style={styles.pickerTypeLabel}>Custom Texts Pro Picker Example:</Text>
            <View style={styles.paddedView}>
              <ProPicker cancelText={"Custom Cancel Text"} placeholder={"Custom Placeholder Text"} onItemSelected={(item) => {
                setCustomTextSelectedItem(item);
              }}>
                <ProPickerOptionItem id={1} value={'apples'} label={"Apples"}/>
                <ProPickerOptionItem id={2} value={'oranges'} label={"Oranges"}/>
                <ProPickerOptionItem id={3} value={'bananas'} label={"Bananas"}/>
              </ProPicker>
              <View style={{paddingHorizontal: 16, marginTop: 8, flexDirection: "row", alignItems: "center"}}>
                <Text style={styles.selectedItemLabel}>Selected item:</Text>
                <Text>{customTextSelectedItem !== undefined ? `${customTextSelectedItem!!.label} - ${customTextSelectedItem!!.value}` : "No item selected"}</Text>
              </View>
            </View>
          </View>

          <View style={styles.paddedView}>
            <Text style={styles.pickerTypeLabel}>Custom Colors Picker Example:</Text>
            <View style={styles.paddedView}>
              <ProPicker backgroundColor={"#7CA5B8"} fontColor={"white"} iosArrowTintColor={"#C6EBBE"} onItemSelected={(item) => {
                setColorsSelectedItem(item);
              }}>
                <ProPickerOptionItem id={1} value={'summer'} label={"Summer"}/>
                <ProPickerOptionItem id={2} value={'fall'} label={"Fall"}/>
                <ProPickerOptionItem id={3} value={'winter'} label={"Winter"}/>
                <ProPickerOptionItem id={4} value={'spring'} label={"Spring"}/>
              </ProPicker>
              <View style={{paddingHorizontal: 16, marginTop: 8,  flexDirection: "row", alignItems: "center"}}>
                <Text style={styles.selectedItemLabel}>Selected item:</Text>
                <Text>{colorsSelectedItem !== undefined ? `${colorsSelectedItem!!.label} - ${colorsSelectedItem!!.value}` : "No item selected"}</Text>
              </View>
            </View>
          </View>

          <View style={styles.paddedView}>
            <Text style={styles.pickerTypeLabel}>Disabled Picker Example:</Text>
            <View style={styles.paddedView}>
              <ProPicker enabled={false} onItemSelected={(item) => {
                setDisabledSelectedItem(item);
              }}>
                <ProPickerOptionItem id={1} value={'enabled'} label={"Enabled"}/>
                <ProPickerOptionItem id={2} value={'disabled'} label={"Disabled"}/>
              </ProPicker>
              <View style={{paddingHorizontal: 16, marginTop: 8, flexDirection: "row", alignItems: "center"}}>
                <Text style={styles.selectedItemLabel}>Selected item:</Text>
                <Text>{disabledSelectedItem !== undefined ? `${disabledSelectedItem!!.label} - ${disabledSelectedItem!!.value}` : "No item selected"}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>);
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

