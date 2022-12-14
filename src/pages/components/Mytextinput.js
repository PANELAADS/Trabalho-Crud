import React from 'react';
import { View, TextInput } from 'react-native';

const Mytextinput = (props) => {
  return (
    <View>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="gray"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        onSubmitEditing={props.onSubmitEditing}
        style={{
          flex:1,
          margin: 12,
          borderWidth: 1,
          padding: 20,
          borderRadius: 3,
          borderColor: 'white',
          backgroundColor: 'white',
          width: 350}}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};

export default Mytextinput;