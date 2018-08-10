import React, { Component } from "react";
import { ScrollView ,Text, ActivityIndicator}  from "react-native";

class ProductList extends Component{
    constructor(props) {
        super(props);
        this.state = { products: [], isLoading: true};
    }
    async componentDidMount() {
        let response = await fetch("http://localhost:4000/products");
        let products = await response.json();
        this.setState({ products, isLoading: false});
    }
    render() {
        const { products, isLoading} = this.state;
        return(
            <ScrollView>
                {isLoading && <ActivityIndicator size="large" color="green"/>}
                {products.map(p=>(
                    <Text key={p.id}>{p.title}</Text>
                ))}
            </ScrollView>
        );
    }
}
export default ProductList;

