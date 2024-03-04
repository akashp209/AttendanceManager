import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    useFonts, Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black,
} from '@expo-google-fonts/inter';
import { router } from 'expo-router';
import { Button } from 'react-native-web';

const login = () => {
    return (
        <View style={{ backgroundColor: '#1a1a1a', flex: 1, padding: 20, flexDirection: 'column', justifyContent: 'space-around' }}>
            <View style={{ alignItems: '' }}>
                <Image source={require('../../assets/interior_office.png')}
                    style={{ width: 300, height: 300 }}
                />
            </View>
            <View style={{}}>
                <Text style={{ color: '#F2F2F2', fontSize: 50, fontFamily: 'Inter_800ExtraBold' }}>The Only</Text>
                <Text style={{ color: '#F2F2F2', fontSize: 50, fontFamily: 'Inter_800ExtraBold' }}>App You Need</Text>
            </View>
            <View style={{ flexDirection: 'column', gap: 20, marginBottom:50 }}>
                <Pressable onPress={() => router.push('/')}
                    style={{ flexDirection:'column', backgroundColor: "#1E90FF", height:45, borderRadius: 25, paddingVertical:10, alignItems:'center', justifyContent:'center' }}
                >
                    <Text style={{ color: '#f2f2f2', fontSize: 18, fontFamily: 'Inter_600SemiBold' }}>Sign In with Email</Text>
                </Pressable>
                <View style={{ flex:1, flexDirection:'row', gap:10 }}>
                    <Pressable onPress={() => router.push('/')}
                        style={{flex:1, backgroundColor: "transparent", borderWidth: 1, height:45, borderColor: "#4f4f4f", borderRadius: 25, alignItems: 'center', paddingVertical:10, justifyContent:'center' }}
                    >
                        <Text style={{ color: '#f2f2f2', fontSize: 18, fontFamily: 'Inter_600SemiBold' }}>Google</Text>
                    </Pressable>
                    <Pressable onPress={() => router.push('/')}
                        style={{flex:1, backgroundColor: "transparent", borderWidth: 1, height:45, borderColor: "#4f4f4f", borderRadius: 25, alignItems: 'center', paddingVertical:10, justifyContent:'center' }}
                    >
                        <Text style={{color: '#f2f2f2', fontSize: 18, fontFamily: 'Inter_600SemiBold'}}>Apple</Text>
                    </Pressable>
                </View>
                {/* <Text style={{ color: "#f2f2f2", textAlign: 'center' }}>By continuing you agree to the terms & conditions</Text> */}
            </View>
        </View>
    )
}

export default login

const styles = StyleSheet.create({})