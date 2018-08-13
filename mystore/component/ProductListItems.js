import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";

export default function ProductListItem ({product}){
    return(
        <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginRight: 35,
          marginLeft: 35
        }}
      >
        <Image
          style={{ width: 100, height: 100 ,marginRight:30}}
          source={{ uri: `http://localhost:4000/images/${product.image}` }}
          resizeMode="center"
        />
        <View style={{ flex: 1, flexDirection: "row" ,justifyContent:"space-around"}}>
          <Text
            style={{
              marginBottom: 25,
              overflow: "hidden",
              backgroundColor:'#D3D3D3',
              
            }}
            key={product.id}
          >
            {product.id}-{product.title}
          </Text>
          <Ionicons
            name="md-heart-outline"
            size={32}
            color="red"
            style={{marginLeft:25 }}
          />
        </View>
      </View>
    )
}
ProductListItem.propTypes = {
    product: PropTypes.object.isRequired
  };
