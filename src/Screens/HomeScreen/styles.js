import { StyleSheet, } from 'react-native'
import { allColors } from '../../Theme/colors';
import { metrix } from '../../Theme/metrix';

export const styles = StyleSheet.create({
    viewTodoList: { paddingHorizontal: metrix.hp1, flex: 1 },
    viewFileters: { marginTop: metrix.hp1 },
    viewTodo: { marginTop: metrix.hp1, flex: 0.8 },

    viewBtn: { position: "absolute", backgroundColor: allColors.gray, borderRadius: metrix.hp3, height: metrix.hp6, width: metrix.hp6, justifyContent: "center", alignItems: "center", right: metrix.hp2, bottom: metrix.hp2 }
});