import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Alert, InputAccessoryView, } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRouter } from 'expo-router';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const url = 'https://manager-backend-topaz.vercel.app';

const add_details = () => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const handleRegister = () => {
    const employeeData = {
      employeeName: name,
      employeeId: employeeId,
      designation: designation,
      phoneNumber: mobileNo,
      dateOfBirth: dob,
      joiningDate: joiningDate,
      activeEmployee: true,
      salary: salary,
      address: address,
    };

    axios
      .post(`${url}/addEmployee`, employeeData)
      .then((response) => {
        Alert.alert(
          "Registration Successful",
          "You have been registered successfully"
        );
        setName("");
        setEmployeeId("");
        setDob("");
        setMobileNo("");
        setSalary("");
        setAddress("");
        setJoiningDate("");
        setDesignation("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Fail",
          "An error occurred during registration"
        );
        console.log("register failed", error);
      });
  };
  const [input, setInput] = useState("");
  const router = useRouter();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Ionicons
          onPress={() => router.back()}
          style={{ marginLeft: 10 }}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Text>Add New Employee</Text>
      </View>
      <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Add a New Employee
            </Text>
            <InputAccessoryView>
              <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                  Full Name (First and last Name)
                </Text>
                <TextInput
                  value={name}
                  onChangeText={(text) => setName(text)}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder="enter your name"
                  placeholderTextColor={"black"}
                />
              </View>

              <View>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Employee Id</Text>
                <TextInput
                  value={employeeId}
                  onChangeText={(text) => setEmployeeId(text)}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder="Employee Id"
                  placeholderTextColor={"black"}
                />
              </View>

              <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Designation</Text>
                <TextInput
                  value={designation}
                  onChangeText={(text) => setDesignation(text)}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder="Designation"
                  placeholderTextColor={"black"}
                />
              </View>

              <View>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                  Mobile Number
                </Text>
                <TextInput
                  value={mobileNo}
                  onChangeText={(text) => setMobileNo(text)}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder="Mobile No"
                  placeholderTextColor={"black"}
                />
              </View>

              <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                  Date of Birth
                </Text>
                <TextInput
                  value={dob}
                  onChangeText={(text) => setDob(text)}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder="Enter Date of Birth"
                  placeholderTextColor={"black"}
                />
              </View>

              <View>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Joining Date</Text>
                <TextInput
                  value={joiningDate}
                  onChangeText={(text) => setJoiningDate(text)}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder="Joining Date"
                  placeholderTextColor={"black"}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text>Active Employee</Text>
                <Text>True</Text>
              </View>
              <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Salary</Text>
                <TextInput
                  value={salary}
                  onChangeText={(text) => setSalary(text)}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder="Enter Salary"
                  placeholderTextColor={"black"}
                />
              </View>

              <View>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
                <TextInput
                  value={address}
                  onChangeText={(text) => setAddress(text)}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder="Enter Address"
                  placeholderTextColor={"black"}
                />
              </View>

              <Pressable
                onPress={handleRegister}
                style={{
                  backgroundColor: "#ABCABA",
                  padding: 10,
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Add Employee
                </Text>
              </Pressable>
            </InputAccessoryView>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default add_details

const styles = StyleSheet.create({})