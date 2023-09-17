import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { supaBaseclient } from "../../utilities/supabaseclient";

export const Track = ({ data }) => {
    const handleLike = async () =>{
        const dataGet = await supaBaseclient
        .from('route').select("likes").eq("id", data.id)

        console.log(dataGet)
        
        const { dataPatch, errorPatch } = await supaBaseclient
        .from('route')
        .update({ likes: dataGet[0].likes + 1 })
        .eq('id', data.id)
        .select()
        
          }

  return (
    <View style={styles.androidSafeArea}>
      <View style={{display: "flex", flexDirection:"column" }}>
        <Image source={require("../../assets/trasa1.jpeg")} style={{width: 320, height: 150}}/>
        </View>
        <View style={{display: "flex", flexDirection: "row"}}>
        <View style={{ width: "45%", display: "flex", flexDirection: "column"}}>
          <Text>Track Name: {data.route_name}</Text>
          <Text>Difficulty: {data.difficulty}</Text>
          <Text>Color: {data.color}</Text>
          <Text>Stroke: {data.stroke}</Text>
          <Text>Likes: {data.likes}</Text>
      </View>
      <View style={{ width: "45%", display: "flex", flexDirection: "column", gap: 10}}>
        <Button title="Like!" color="gold" onPress={()=>handleLike()}/>
        <Button title="Comment" color="skyblue"/>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    backgroundColor: "#DDD",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection:"column",
    gap: 25,
    marginBottom: 5,
  },
});
