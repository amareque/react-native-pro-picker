<div align="center">
  <a href="https://github.com/amareque/react-native-pro-picker/blob/master/media/android-example-gif.gif?raw=true">
  	<img src="https://github.com/amareque/react-native-pro-picker/blob/master/media/android-example-gif.gif?raw=true" alt="Pro Picker Android Gif" height="160" />
  </a>
  <a href="https://github.com/amareque/react-native-pro-picker/blob/master/media/ios-example-gif.gif?raw=true">
  	<img src="https://github.com/amareque/react-native-pro-picker/blob/master/media/ios-example-gif.gif?raw=true" alt="Pro Picker iOS Gif" height="160" />
  </a>
  <br>
  <br>
  <p>
    <b>React Native Pro Picker</b>
  </p>
  <p>
     <i>React Native Pro Picker gives you the option to have an ActionSheet-based picker in iOS while maintaining the basic one for android and the web.</i>
  </p>
  <p>

![npm](https://img.shields.io/npm/v/react-native-pro-picker)
  </p>
</div>

<br>

## Install 🧰

You can install react-native-pro-picker by running the following command
```
npm install react-native-pro-picker
```

<br>

## Usage 💡
1. Add the following import statement:
```
import { ProPicker, ProPickerOption } from 'react-native-pro-picker';
```

2. Add some options:
```
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

```

3. Add the <ProPicker/> component:
```
<ProPicker items={options} onItemSelected={(item) => {
  // Use the selected item.
}}/>
```

4. Customize your picker with the customization options.

<br>

## Necessary Attributes ⚠️

| Attribute      |                          Description                          | Type              | 
|----------------|:-------------------------------------------------------------:|-------------------|
| items          | The options to select from. Should be of type ProPickerOption | ProPickerOption[] |
| onItemSelected |          Callback for when the user selects an item.          | () => void        |

<br>

## Customizable Attributes 🕹️
placeholder = "Select...", cancelText = "Cancel", enabled = true
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

<br>

## Try it yourself 📱
Try it on your device, by scanning this QR on the [Expo Go app](https://expo.dev/client):

[![Expo QR](https://github.com/amareque/react-native-pro-picker/blob/master/media/example-app-expo-qr.png?raw=true)](https://github.com/amareque/react-native-pro-picker/blob/master/media/example-app-expo-qr.png?raw=true)

(QR not showing? Visit the [Expo Project Page](https://expo.dev/@amareque/pro-picker-example-app?serviceType=classic&distribution=expo-go))

or simply try this [Snack](https://snack.expo.dev/@amareque/https://snack.expo.dev/@amareque/pro-picker-example-snack) from your browser!

<br>

## Contributing 🍰

I won't be looking at forks and pull requests. If you want me to improve this package, feel free to reach out to me, and I'll gladly update it.

<br>

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

<br>

## License ⚖️
MIT