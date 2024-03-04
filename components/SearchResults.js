import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchResults = ({ data, input, setInput }) => {
  return (
    <View style={{ padding: 10 }}>
      <FlatList data={data} renderItem={({ item }) => {
        if (item?.employeeName.toLowerCase().includes(input.toLowerCase())) {
          return (
            <View
              style={{ marginVertical: 1, gap: 1, flexDirection: "row", borderRadius: 10, backgroundColor: '#f7f7f7', padding: 10 }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  padding: 10,
                  marginRight: 15,
                  backgroundColor: "#4b6cb7",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>{item?.employeeName?.charAt(0)}</Text>
              </View>

              <View style={{}}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item?.employeeName}</Text>
                <Text style={{ marginTop: 5, color: "gray" }}>
                  {item?.designation} ({item?.employeeId})
                </Text>
              </View>
            </View>
          );
        }
      }}
      />
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})