import { StyleSheet, } from 'react-native'
import { allColors } from '../../Theme/colors';
import { metrix } from '../../Theme/metrix';

export const styles = StyleSheet.create({
    viewItem: { flexDirection: "row", },
    flatList: { height: '100%', width: '100%', },
    imageTick: { width: metrix.hp3, height: metrix.hp3, alignSelf: "center" },
    viewEmpty: { height: '100%', width: '100%', justifyContent: "center", alignItems: "center", flex: 1 },

    headerView: { marginBottom: metrix.hp1, flexDirection: 'row', alignItems: "center" },
    textTitle: { flex: 0.2, textAlign: "center" },
    textStatus: { flex: 0.12, textAlign: "center" },
    textDate: { flex: 0.25, textAlign: "center" },
    textPriority: { flex: 0.15, textAlign: "center" },
    textTitle_: { flex: 0.2, },
    textStatus_: { flex: 0.1, },
    textDate_: { flex: 0.25, },
    textPriority_: { flex: 0.15, },
    textSpace: { flex: 0.05 },
});