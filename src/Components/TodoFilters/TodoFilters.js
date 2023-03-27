import { Text, View, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import CheckBox from '@react-native-community/checkbox'

export default function TodoFilters({ filterList, onPressCheckBox }) {

    function renderItem({ item, index }) {
        return (
            <View style={styles.viewCheckBox}>
                <CheckBox
                    hideBox={true}
                    onValueChange={(v) => onPressCheckBox(v, index)}
                    value={item.value}
                    onAnimationType={'bounce'}
                />
                <Text>{item.lable}</Text>
            </View>
        )
    }

    return (
        <FlatList
            horizontal
            data={filterList}
            renderItem={renderItem}
            keyExtractor={(item, index) => String(index)}
        />
    )
}
