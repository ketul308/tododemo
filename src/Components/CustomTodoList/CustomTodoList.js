import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, } from 'react'
import { styles } from './styles'
import { AllImages } from '../../Images/AllImages'
import moment from 'moment/moment'
import CheckBox from '@react-native-community/checkbox'

export default function CustomTodoList({ dispalyedTodoList, editIndex, onEditTodo, onPressUpdateStatus }) {

    const renderItem = useCallback(({ item, index }) => {
        return (
            <View style={styles.viewItem}>
                <CheckBox
                    hideBox={true}
                    onValueChange={(v) => onEditTodo(v, index)}
                    value={editIndex === index}
                    onAnimationType={'bounce'}
                    style={styles.imageTick}
                />
                <Text style={styles.textSpace} />
                <TouchableOpacity style={styles.textStatus_} onPress={() => onPressUpdateStatus(item)}>
                    <Image source={item.status !== "compeleted" ? AllImages.tick : AllImages.tickGreen} style={styles.imageTick} resizeMode={'contain'} />
                </TouchableOpacity>
                <Text style={styles.textSpace} />
                <Text style={styles.textTitle_}>{item.title}</Text>
                <Text style={styles.textSpace} />
                <Text style={styles.textDate_}>{moment(item.startDate).format("DD/MM/YYYY")}</Text>
                <Text style={styles.textSpace} />
                <Text style={styles.textDate_}>{moment(item.startDate).format("DD/MM/YYYY")}</Text>
                <Text style={styles.textSpace} />
                <Text style={styles.textPriority_}>{item.priority}</Text>
            </View>
        )
    }, [editIndex]);

    const ListEmptyComponent = () => (
        <View style={styles.viewEmpty}>
            <Text>
                {"No Todos"}
            </Text>
        </View>
    )
    const ListHeaderComponent = () => (
        <View style={styles.headerView}>
            <Text style={styles.textStatus}>{"Edit"}</Text>
            <Text style={styles.textStatus}>{"Status"}</Text>
            <Text style={styles.textTitle}>{"Title"}</Text>
            <Text style={styles.textDate}>{"Start"}</Text>
            <Text style={styles.textDate}>{"End"}</Text>
            <Text style={styles.textPriority}>{"Priority"}</Text>
        </View>
    )
    return (
        <FlatList
            data={dispalyedTodoList}
            renderItem={renderItem}
            keyExtractor={(item, index) => String(index)}
            ListEmptyComponent={ListEmptyComponent}
            style={styles.flatList}
            contentContainerStyle={dispalyedTodoList.length === 0 ? { flex: 1 } : {}}
            ListHeaderComponent={dispalyedTodoList.length > 0 ? ListHeaderComponent : undefined}
        />
    )
}