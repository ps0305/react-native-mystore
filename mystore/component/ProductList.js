import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList
} from "react-native";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], isLoading: true };
  }

  async componentDidMount() {
    let response = await fetch("http://localhost:4000/products");
    let products = await response.json();
    this.setState({ products, isLoading: false });
  }

  _renderItem({ item: product }) {
    return (
      <Text
        style={{ backgroundColor: "lightgreen", margin: 5 }}
        key={product.id}
      >
        {product.title}
      </Text>
    );
  }

  _keyExtractor(p, i) {
    return `${p.id}`;
  }

  render() {
    const { products, isLoading } = this.state;
    return (
      <View>
        {isLoading && <ActivityIndicator size="large" color="green" />}
        <FlatList
          data={products}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default ProductList;

// <ScrollView>
// {isLoading && <ActivityIndicator size="large" color="green" />}
// {products.map(p => (

// ))}
// </ScrollView>
