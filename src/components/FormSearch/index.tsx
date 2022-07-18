import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';

interface FormSearchProps {
  search: string;
  handleChangeInput: (e: any) => void;
  handleSearchMovie: () => void;
}

const FormSearch = (props: FormSearchProps) => {
  return (
    <View style={styles.formSearch}>
      <TextInput
        placeholder="Email"
        style={styles.inputSearch}
        value={props.search}
        onChangeText={props.handleChangeInput}
      />
      <TouchableOpacity
        style={styles.buttonSearch}
        onPress={props.handleSearchMovie}>
        <Image
          style={styles.iconButton}
          source={require('@app/assets/icons/search-button.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FormSearch;
