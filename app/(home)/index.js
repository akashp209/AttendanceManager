import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Feather, Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient'
import {
    useFonts, Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black,
} from '@expo-google-fonts/inter';
import { useRouter } from 'expo-router';
import AppLoading from 'expo-app-loading';

const index = () => {
    const router = useRouter();
    let [fontsLoaded] = useFonts({
        Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black,
    });
    if (!fontsLoaded) {
        <AppLoading />
    }
    else {
        return (
            <ScrollView style={{ backgroundColor: '' }}>
                {/* <LinearGradient colors={["#FAFFBC", "#FDFEF0"]} style={{ flex: 1 }}> */}
                <View style={{ backgroundColor: "#000", padding: 20, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ color: '#fff', fontSize: 28, fontFamily: 'Inter_600SemiBold' }}>Hi, Akash</Text>
                    </View>
                    <View style={{ padding: 5, backgroundColor: '#f7f7f7', borderRadius: 20, flexDirection: 'row' }}>
                        <Pressable onPress={() => router.push('/login')} >
                            <AntDesign name="user" size={24} color="black" style={{ marginRight: 10 }} />
                        </Pressable>
                        <Feather name="bell" size={24} color="black" />
                    </View>
                </View>
                <View style={{ padding: 12 }}>
                    {/* <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Feather name='bar-chart' size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Employee Management Dashboard</Text>
                        <Entypo name='lock' size={24} color="black" />
                    </View> */}
                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                        <Pressable onPress={() => router.push("/(home)/employees")} style={{ backgroundColor: "#D3CCE3", padding: 12, borderRadius: 6, alignItems: "center", justifyContent: "center", flex: 1 }}>
                            <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Ionicons name="people-sharp" size={24} color="black" />
                            </View>
                            <Text style={{ marginTop: 7, fontWeight: 600 }}>Employee List</Text>
                        </Pressable>
                        <Pressable onPress={() => router.push("/(home)/markattendance")} style={{ backgroundColor: "#D3CCE3", padding: 12, borderRadius: 6, alignItems: "center", justifyContent: "center", flex: 1 }}>
                            <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Ionicons name="people-sharp" size={24} color="black" />
                            </View>
                            <Text style={{ marginTop: 7, fontWeight: 600 }}>Mark Attendance</Text>
                        </Pressable>
                    </View>
                    <View style={{ marginTop: 20, backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10, marginVertical: 10, borderRadius: 7 }}>
                        <Pressable style={{ backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between' }}>
                            <View style={{ padding: 7, width: 45, height: 45, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name='newspaper-sharp' size={24} color='black' />
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '600' }}>Attendance Report</Text>
                            <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name="chevron-forward-sharp" size={24} color='black' />
                            </View>
                        </Pressable>
                        <Pressable style={{ backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between' }}>
                            <View style={{ padding: 7, width: 45, height: 45, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name='analytics-sharp' size={24} color='black' />
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '600' }}>Summary Report</Text>
                            <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name="chevron-forward-sharp" size={24} color='black' />
                            </View>
                        </Pressable>
                        <Pressable style={{ backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between' }}>
                            <View style={{ padding: 7, width: 45, height: 45, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name='documents-sharp' size={24} color='black' />
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '600' }}>All Generate Report</Text>
                            <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name="chevron-forward-sharp" size={24} color='black' />
                            </View>
                        </Pressable>
                        <Pressable style={{ backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between' }}>
                            <View style={{ padding: 7, width: 45, height: 45, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name='timer-sharp' size={24} color='black' />
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '600' }}>Overtime Employees</Text>
                            <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name="chevron-forward-sharp" size={24} color='black' />
                            </View>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center', gap: 12 }}>
                        <View style={{ flex: 1, backgroundColor: '#f79d00', borderRadius: 6, padding: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center  ' }}>
                                <Ionicons name='person-sharp' size={24} color='black' />
                            </View>
                            <Text style={{ marginTop: 7 }}>Attendance Criteria</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: '#ABCABA', borderRadius: 6, padding: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center  ' }}>
                                <Ionicons name='person-sharp' size={24} color='black' />
                            </View>
                            <Text style={{ marginTop: 7 }}>Increased Workflow</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center', gap: 12 }}>
                        <View style={{ flex: 1, backgroundColor: '#D3CCEE', borderRadius: 6, padding: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center  ' }}>
                                <Ionicons name='person-sharp' size={24} color='black' />
                            </View>
                            <Text style={{ marginTop: 7 }}>Cost Saving</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: '#BDC3C7', borderRadius: 6, padding: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center  ' }}>
                                <Ionicons name='person-sharp' size={24} color='black' />
                            </View>
                            <Text style={{ marginTop: 7 }}>Employee Performance</Text>
                        </View>
                    </View>
                </View>
                {/* </LinearGradient> */}
            </ScrollView>
        )
    }
}

export default index

const styles = StyleSheet.create({})