import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// const url = 'https://manager-backend-topaz.vercel.app';

const markattendance = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(moment());

  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, "days");
    setCurrentDate(nextDate);
  };

  const goToPrevDay = () => {
    const prevDate = moment(currentDate).subtract(1, "days");
    setCurrentDate(prevDate);
  };

  const formatDate = (date) => {
    return date.format("MMMM D, YYYY");
  };

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("https://manager-backend-topaz.vercel.app/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching employee data", error);
      }
    };
    fetchEmployeeData();
  }, []);
  const [attendance, setAttendance] = useState([]);
  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get(`https://manager-backend-topaz.vercel.app/attendance`, {
        params: {
          date: currentDate.format("MMMM D, YYYY"),
        },
      });
      setAttendance(response.data);
    } catch (error) {
      console.log("error fetching attendance data", error);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, [currentDate]);
  const employeeWithAttendance = employees.map((employee) => {
    const attendanceRecord = attendance.find(
      (record) => record.employeeId === employee.employeeId
    );

    return {
      ...employee,
      status: attendanceRecord ? attendanceRecord.status : "", // 'Not Marked' or a default status
    };
  });
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Pressable>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginLeft: "auto",
            marginRight: "auto",
            marginVertical: 20,
          }}
        >
          <AntDesign
            onPress={goToPrevDay}
            name="left"
            size={24}
            color="black"
          />
          <Text>{formatDate(currentDate)}</Text>
          <AntDesign
            onPress={goToNextDay}
            name="right"
            size={24}
            color="black"
          />
        </View>

        <View style={{ marginHorizontal: 12 }}>
          {employeeWithAttendance.map((item, index) => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/[user]",
                  params: {
                    name: item.employeeName,
                    id: item.employeeId,
                    salary: item?.salary,
                    designation: item?.designation,
                  },
                })
              }
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: "#4b6cb7",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>
                  {item?.employeeName?.charAt(0)}
                </Text>
              </View>
              <View style={{flex:1}}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item?.employeeName}
                </Text>
                <Text style={{ marginTop: 5, color: "gray" }}>
                  {item?.designation} ({item?.employeeId})
                </Text>
              </View>
              {item?.status && (
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: "#FF69B4",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
                  >
                    {item.status.charAt(0)}
                  </Text>
                </View>
              )}
            </Pressable>
          ))}
        </View>
      </Pressable>
    </View>
  );
};

export default markattendance;

const styles = StyleSheet.create({});



// import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import moment from 'moment'
// import axios from 'axios';
// import { AntDesign } from '@expo/vector-icons';

// const url = 'https://manager-backend-topaz.vercel.app';

// const markattendance = () => {
//     const [currentDate, setCurrentDate] = useState(moment())
//     const [employees, setEmployees] = useState([]);
//     const [attendance, setAttendance] = useState([]);

//     const goToNextDay = () => {
//         const nextDate = moment(currentDate).add(1, "days");
//         setCurrentDate(nextDate);
//     }
//     const goToPreviousDay = () => {
//         const preDate = moment(currentDate).subtract(1, "days");
//         setCurrentDate(preDate);
//     }
//     const formatDate = (date) => {
//         return date.format("MMMM D, YYYY")
//     }
//     useEffect(() => {
//         const fetchEmployeeData = async () => {
//             try {
//                 const response = await axios.get(`${url}/employees`);
//                 setEmployees(response.data);
//             } catch (error) {
//                 console.log("error fetching employee data", error);
//             }
//         };
//         fetchEmployeeData();
//     }, []);

//     const fetchAttendanceData = async () => {   
//         try {
//             const response = await axios.get(`${url}/attendance`, {
//                 params: {
//                     date: currentDate.format("MMMM D, YYYY")
//                 }
//             });
//             setAttendance(response.data);
//         } catch (error) {
//             console.log("Error fetching attendance data");
//         }
//     }
//     useEffect(() => {
//         fetchAttendanceData();
//     }, [currentDate]);
//     return (
//         <View style={{ flex: 1, backgroundColor: "white" }}>
//             <Pressable>
//                 <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginLeft: 'auto', marginRight: 'auto', marginVertical: 20 }}>

//                     <AntDesign onPress={goToPreviousDay} name="left" size={24} color="black" />
//                     <Text>{formatDate(currentDate)}</Text>
//                     <AntDesign onPress={goToNextDay} name="right" size={24} color="black" />
//                 </View>
//             </Pressable>
//             <View style={{ marginHorizontal: 12 }}>
//                 {employees.map((item, index) => {
//                     <Pressable key={index} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
//                         <View
//                             style={{
//                                 width: 50,
//                                 height: 50,
//                                 borderRadius: 8,
//                                 padding: 10,
//                                 marginRight: 15,
//                                 backgroundColor: "#4b6cb7",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                             }}
//                         >
//                             <Text style={{ color: "white", fontSize: 16 }}>{item?.employeeName?.charAt(0)}</Text>
//                         </View>
//                         <View style={{}}>
//                             <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item?.employeeName}</Text>
//                             <Text style={{ marginTop: 5, color: "gray" }}>
//                                 {item?.designation} ({item?.employeeId})
//                             </Text>
//                         </View>
//                     </Pressable>
//                 })}
//             </View>
//         </View>
//     )
// }

// export default markattendance

// const styles = StyleSheet.create({})