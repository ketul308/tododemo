import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CommonButton from '../../Components/CommonButton/CommonButton';
import { styles } from './styles';
import { TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { addTodo } from '../../Redux/Slice/todo';

export default function CreateTodoScreen(props) {

    const [title, settitle] = useState("");
    const [titleError, settitleError] = useState("");
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const [isStartSelected, setisStartSelected] = useState(false);
    const [isEndSelected, setisEndSelected] = useState(false);
    const [currentSelection, setcurrentSelection] = useState("start");
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Mid");
    const [items, setItems] = useState([
        { label: 'High', value: 'High' },
        { label: 'Mid', value: 'Mid' },
        { label: 'Low', value: 'Low' },
    ]);

    const dispatch = useDispatch();

    function onPressSave() {
        if (title !== "") {
            settitleError("")
            let todo = {
                _id: Math.random(),
                title: title,
                status: "todo",
                startDate: startDate.toString(),
                endDate: endDate.toString(),
                priority: value
            }
            dispatch(addTodo(todo));
            settitle("");
            setisStartSelected(false);
            setisEndSelected(false);
            setValue(null);
            props.navigation.goBack();
        } else {
            settitleError("Please enter title")
        }
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        if (currentSelection === "start") {
            setstartDate(currentDate);
            setisStartSelected(true)
        } else {
            setendDate(currentDate);
            setisEndSelected(true)
        }
    };

    const selectDate = (type) => {
        setShow(!show)
        setcurrentSelection(type)
    }

    function onChangeText(text) {
        if (text !== "") {
            settitleError("")
        }
        settitle(text);
    }
    return (
        <View style={styles.mainView}>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={currentSelection === "start" ? startDate : endDate}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                    minimumDate={new Date()}
                />
            )}
            <View style={styles.viewTop}>
                <View style={styles.viewBtnContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={"Title"}
                        onChangeText={onChangeText}
                        value={title}
                    />
                    {
                        titleError &&
                        <Text>{titleError}</Text>
                    }
                </View>
                <View style={styles.viewBtnContainer}>
                    <CommonButton title={isStartSelected ? startDate.toDateString() : "Select Start Date"} onPress={() => selectDate("start")} />
                </View>
                <View style={styles.viewBtnContainer}>
                    <CommonButton title={isEndSelected ? endDate.toDateString() : "Select End Date"} onPress={() => selectDate("end")} />
                </View>
                <View style={styles.viewBtnContainer}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
            </View>
            <View style={styles.viewBottom}>
                <CommonButton title={"Save"} onPress={onPressSave} />
            </View>
        </View>
    )
}
