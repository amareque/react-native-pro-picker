<div align="center">
    <div style="display: flex; justify-content: center; align-items: center">
      <a href="https://raw.githubusercontent.com/amareque/react-native-pro-picker/main/media/android-example-gif.gif" style="margin-right: 1rem;">
        <img src="https://github.com/amareque/react-native-pro-picker/blob/main/media/android-example-gif.gif?raw=true" alt="Pro Picker Android Gif" height="400"/>
      </a>
      <a href="https://raw.githubusercontent.com/amareque/react-native-pro-picker/main/media/ios-example-gif.gif">
        <img src="https://github.com/amareque/react-native-pro-picker/blob/main/media/ios-example-gif.gif?raw=true" alt="Pro Picker iOS Gif" height="400"/>
      </a>
    </div>
  <br>
  <br>
  <p>
    <b>React Native Pro Picker</b>
  </p>
  <p>
     <i>React Native Pro Picker gives you the option to have an ActionSheet-based picker in iOS while maintaining the basic one for android and the web.</i>
  </p>
</div>

![npm](https://img.shields.io/npm/v/react-native-pro-picker)


## Install 🧰

You can install react-native-pro-picker by running the following command
```
npm install react-native-pro-picker
```

## Usage 💡
1. Add the following import statement:
```
import { ProPicker, ProPickerOption, ProPickerOptionItem } from 'react-native-pro-picker';
```

2. Add the <ProPicker/> component:
```
<ProPicker onItemSelected={(item) => {
  // Use the selected item.
}}/>
```

3. Add the <ProPicker/> component:
```
<ProPicker onItemSelected={(item) => {
    <ProPickerOptionItem id={1} value={'js'} label={"Javascript"}/>
    <ProPickerOptionItem id={2} value={'ts'} label={"Typescript"}/>
    <ProPickerOptionItem id={3} value={'kt'} label={"Kotlin"}/>
    <ProPickerOptionItem id={4} value={'sw'} label={"Swift"}/>
}}/>
```

4. Customize your picker with the customization options.


## Necessary Attributes ⚠️

| Attribute      |                            Description                            | Type                                         | 
|----------------|:-----------------------------------------------------------------:|----------------------------------------------|
| children       | The options to select from. Should be of type ProPickerOptionItem | ProPickerOptionItem \| ProPickerOptionItem[] |
| onItemSelected |            Callback for when the user selects an item.            | () => void                                   |

<br>

## Customizable Attributes 🕹️
<table>
   <thead>
      <th>Attribute</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default Value</th>
   </thead>
   <tbody>
      <tr>
         <td>placeholder</td>
         <td>Picker Placeholder</td>
         <td>string</td>
         <td>Select...</td>
      </tr>
      <tr>
         <td>cancelText (iOS only)</td>
         <td>Picker cancel button label for iOS Action Sheet</td>
         <td>string</td>
         <td>Cancel</td>
      </tr>
      <tr>
         <td>enabled</td>
         <td>Enables/Disables the picker</td>
         <td>boolean</td>
         <td>true</td>
      </tr>
      <tr>
         <td>backgroundColor</td>
         <td>Background color for the picker's main layout</td>
         <td>string</td>
         <td>#FFFFFF</td>
      </tr>
      <tr>
         <td>fontColor</td>
         <td>Font color for the picker's main layout</td>
         <td>string</td>
         <td>#000000</td>
      </tr>
      <tr>
         <td>iosArrowTintColor</td>
         <td>Tint color for the iOS Arrow Icon in the picker's main layout</td>
         <td>string</td>
         <td>#0451E4</td>
      </tr>
      <tr>
         <td>iosBorderColor</td>
         <td>Border color for the iOS picker's main layout</td>
         <td>string</td>
         <td>#000000</td>
      </tr>
   </tbody>
</table>

## Try it yourself 📱
Download the repo and do:
```
cd example-app/ 
npm run start
```

## Contributing 🍰

If you want me to improve this package, feel free to reach out to me, and I'll gladly update it.

## Maintainers 👷
<table>
<tr>
<td align="center">
    <a href="https://www.linkedin.com/in/amareque">
    <img src="https://en.gravatar.com/userimage/208965080/af20dc5f241dac7e06eee9f9f0ffa3e2?size=512" width="100px;" alt="amareque photo"/>
    <br/>
        <sub>
            <b>Agustin Mareque</b>
        </sub>
    </a>
    <br/>
</td>
</tr>
</table>

## License ⚖️
MIT
