import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CustomTodoList from '../../Components/CustomTodoList/CustomTodoList';
import TodoFilters from '../../Components/TodoFilters/TodoFilters';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native';
import { ALL_SCREENS } from '../../Navigation/allScreens';
import { setIncompeleteAfterEndDate, updateStatus, } from '../../Redux/Slice/todo';
import moment from 'moment';
import { ToastAndroid } from 'react-native';

export default function HomeScreen(props) {
    const todoList = useSelector(state => state.todoList);
    const [dispalyedTodoList, setdispalyedTodoList] = useState([]);
    const [filterList, setfilterList] = useState([
        { lable: 'compeleted', value: false, name: 'status' },
        { lable: 'incomplete', value: false, name: 'status' },
        { lable: 'High', value: false, name: 'priority' },
        { lable: 'Mid', value: false, name: 'priority' },
        { lable: 'Low', value: false, name: 'priority' },
    ]);
    const [editIndex, seteditIndex] = useState(undefined);
    const dispatch = useDispatch();

    function onPressCheckBox(v, i) {
        let temp = filterList;
        temp[i].value = v
        setfilterList([...temp]);
    }

    useEffect(() => {
        if (todoList.length > 0) {
            let temp = [...todoList];
            let today = moment();
            let flag = false;
            temp.forEach((e) => {
                if (today.isAfter(moment(e.endDate))) {
                    if (e.status === 'todo') {
                        e.status = "incomplete";
                        flag = true;
                    }
                }
            });
            if (flag) {
                ToastAndroid.show("Todo status are set to incompeleted", ToastAndroid.LONG);
                dispatch(setIncompeleteAfterEndDate(temp));
            }
        }
    }, [])

    useEffect(() => {
        let appliedFilters = filterList.filter((item) => item.value === true);
        if (appliedFilters.length > 0) {
            let alltodos = todoList;
            let temp = [];
            let obj = {};
            appliedFilters.map((item) => {
                if (obj.hasOwnProperty(item.name)) {
                    temp.forEach((e) => {
                        if (e.type === item.name) {
                            e.value.push(item.lable)
                        }
                    })
                } else {
                    obj[item.name] = "";
                    temp.push({ 'type': item.name, value: [item.lable] })
                }
            })
            let filterTodo = alltodos.filter((item) => {
                return temp.every((e) => {
                    return e.value.includes(item.priority) || e.value.includes(item.status)
                });
            })
            setdispalyedTodoList(filterTodo);
        } else {
            setdispalyedTodoList([...todoList]);
        }
    }, [filterList, todoList])

    function onEditTodo(v, i) {
        if (v) {
            seteditIndex(i);
        } else {
            seteditIndex(undefined);
        }
    }

    function onPressEdit() {
        if (typeof editIndex === 'number') {
            props.navigation.navigate(ALL_SCREENS.editTodoScreen, { 'todo': dispalyedTodoList[editIndex] });
            seteditIndex(undefined);
        } else {
            props.navigation.navigate(ALL_SCREENS.createTodoScreen);
        }
    }

    function onPressUpdateStatus(item) {
        if (item.status === 'incomplete') {
            item.status = 'compeleted'
        } else {
            item.status = 'incomplete'
        }
        dispatch(updateStatus(item));
    }

    return (
        <View style={styles.viewTodoList}>
            {
                todoList.length > 0 &&
                <View style={styles.viewFileters}>
                    <Text>{"Apply Filters"}</Text>
                    <TodoFilters filterList={filterList} onPressCheckBox={(value, i) => onPressCheckBox(value, i)} />
                </View>
            }
            <View style={styles.viewTodo}>
                <CustomTodoList onPressUpdateStatus={(e) => onPressUpdateStatus(e)} dispalyedTodoList={dispalyedTodoList} editIndex={editIndex} onEditTodo={(v, i) => onEditTodo(v, i)} />
            </View>
            <TouchableOpacity style={styles.viewBtn} onPress={onPressEdit}>
                <Text>{typeof editIndex === 'number' ? "Edit" : "Add"}</Text>
            </TouchableOpacity>
        </View>
    )
}
