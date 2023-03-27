import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function CommonButton({ title, isDisable, onPress }) {

    return (
        <TouchableOpacity onPress={onPress} disabled={isDisable} style={styles.touch}>
            <Text style={styles.textTitle}>{title}</Text>
        </TouchableOpacity>
    )
}