import { StyleSheet, } from 'react-native'
import { allColors } from '../../Theme/colors';
import { metrix } from '../../Theme/metrix';

export const styles = StyleSheet.create({
    mainView: { height: "100%", width: "100%" },
    viewTop: { flex: 0.8, paddingHorizontal: metrix.hp2 },
    viewBottom: { flex: 0.2, paddingHorizontal: metrix.hp2 },
    textInput: { backgroundColor: allColors.white, height: metrix.hp6, borderRadius: metrix.hp1, color: allColors.black, width: '100%', paddingLeft: metrix.hp1 },
    viewBtnContainer: { marginTop: metrix.hp2 },
});