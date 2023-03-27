import { StyleSheet, } from 'react-native'
import { allColors } from '../../Theme/colors';
import { metrix } from '../../Theme/metrix';

export const styles = StyleSheet.create({
    touch: { width: '100%', height: metrix.hp6, justifyContent: "center", alignItems: "center", borderRadius: metrix.hp1, backgroundColor: allColors.white },
    textTitle: { color: allColors.black }
});