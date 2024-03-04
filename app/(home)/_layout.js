import { Stack } from "expo-router";

export default function Layout(){
    return(
        <>
        <Stack screenOptions={{ headerShown: false, statusBarColor:'#000'}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="employees"/>
            <Stack.Screen name="adddetails"/>
            <Stack.Screen name="login"/>
            <Stack.Screen name="markattendance" />
            <Stack.Screen name="[user]" />
        </Stack>
        </>
    )
}