import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Modal from "react-native-modal"
import { View, TextInput , Button , Text } from "react-native"
import { Formik } from 'formik';

import { globalStyles } from "../../styles/index"


export default function AuthorsModal({ close, isOpened }) {
  const initialValues = { name: "", avatar: "", institute: "", location: "", description: "" }
  return (
    <Modal isVisible={isOpened}>
      <FontAwesome style={globalStyles.closeModal} name="remove" size={40} color="#E74C3C" onPress={close} />

      <Text style={globalStyles.modalHeader}> Add Authors </Text>
      <View style={{ flex: 1 }}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values , actions) => {
            console.log(values)
          }}>
            {(props) => (
              <View style={globalStyles.form} >
                <TextInput 
                placeholder='Enter Author name'
                onChangeText={props.handleChange('name')}
                value={props.values.name}
                style={globalStyles.inputFields}
                ></TextInput>
                <TextInput 
                placeholder='Enter Institute of study'
                onChangeText={props.handleChange('institute')}
                value={props.values.institute}
                style={globalStyles.inputFields}
                ></TextInput>
                <TextInput 
                placeholder='Enter Address'
                onChangeText={props.handleChange('location')}
                value={props.values.location}
                style={globalStyles.inputFields}
                ></TextInput>
                <TextInput 
                multiline
                placeholder='Enter Detailed description'
                onChangeText={props.handleChange('description')}
                value={props.values.description}
                style={{...globalStyles.inputFields , ...globalStyles.textarea}}
                ></TextInput>
                <Button title='Submit' color="#85C1E9" onPress={props.handleSubmit} />
              </View>
            )}
        </Formik>
      </View>
    </Modal>
  )
}
