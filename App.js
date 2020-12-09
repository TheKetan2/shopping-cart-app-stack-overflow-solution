import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import Constants from "expo-constants";

import { Card } from "react-native-paper";

export default function App() {
  const [products, setProducts] = useState(data);

  /* 
  with this function we increase the quantity of 
  product of selected id
  */
  const addItem = (item) => {
    console.log("addItem");
    let temp = products.map((product) => {
      if (item.id === product.id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });

    setProducts(temp);
  };

  /* 
  with this function we decrease the quantity of 
  product of selected id, also put in the condition so as 
  to prevent that quantity does not goes below zero
  */
  const removeItem = (item) => {
    console.log("removeItem");
    let temp = products.map((product) => {
      if (item.id === product.id) {
        return {
          ...product,
          quantity: product.quantity > 0 ? product.quantity - 1 : 0,
        };
      }
      return product;
    });
    setProducts(temp);
  };

  /*
   this varible holds the list of selected products.
  if required, you can use it as a seperate state and use it the 
  way you want
   */
  let selected = products.filter((product) => product.quantity > 0);

  /**
   * below are two small utility functions,
   * they calculate the total itmes and total price of all
   * selected items
   */
  const totalItems = () => {
    return selected.reduce((acc, curr) => acc + curr.quantity, 0);
  };
  const totalPrice = () => {
    let total = 0;
    for (let elem of selected) {
      total += elem.quantity * elem.price;
    }
    return total;
  };

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return (
            <Card style={styles.card}>
              <View style={styles.textBox}>
                <Text>{item.name}</Text>
                <Text>$ {item.price.toString()}</Text>
                <View style={{ flexDirection: "row" }}></View>
                <View style={styles.buttonBox}>
                  <Button
                    onPress={() => removeItem(item)}
                    title="-"
                    color="#841584"
                  />
                  <Text>{item.quantity.toString()}</Text>
                  <Button
                    onPress={() => addItem(item)}
                    title="+"
                    color="#841584"
                  />
                </View>
              </View>
              <Image
                style={styles.image}
                source={{
                  uri: item.image,
                }}
              />
            </Card>
          );
        }}
      />

      <View style={{ height: 60 }}></View>

      {selected.length && (
        <TouchableOpacity style={styles.showCart}>
          <View>
            <Text style={styles.paragraph}>
              {totalItems().toString()} total price ${totalPrice().toString()}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  buttonBox: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    padding: 10,
    marginBottom: 5,
    height: 150,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    bottomMargin: 200,
    padding: 8,
  },

  image: {
    width: 110,
    height: 138,
    position: "absolute",
    right: 10,
    top: 0,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  showCart: {
    height: 60,
    backgroundColor: "teal",
    borderRadius: 30,
    position: "fixed",
    bottom: 10,
    left: 10,
    right: 10,
    justifyContent: "center",
  },
  textBox: {
    flexDirection: "column",
    padding: 10,
    width: 300,
    flex: 1,
    justifyContent: "space-between",
  },
});

const data = [
  {
    id: 1,
    name: "Mix Pina Colada",
    desc: "Ice Cream Bar - Oreo Cone",
    image: "http://dummyimage.com/110x138.png/dddddd/000000",
    price: 93,
    quantity: 0,
  },
  {
    id: 2,
    name: "Cake - Bande Of Fruit",
    desc: "Cheese - Cheddar With Claret",
    image: "http://dummyimage.com/172x223.png/cc0000/ffffff",
    price: 4,
    quantity: 0,
  },
  {
    id: 3,
    name: "Lid Coffee Cup 8oz Blk",
    desc: "Rosemary - Primerba, Paste",
    image: "http://dummyimage.com/110x243.png/ff4444/ffffff",
    price: 18,
    quantity: 0,
  },
  {
    id: 4,
    name: "Monkfish - Fresh",
    desc: "Sauce - Mint",
    image: "http://dummyimage.com/124x117.bmp/dddddd/000000",
    price: 16,
    quantity: 0,
  },
  {
    id: 5,
    name: "Duck - Whole",
    desc: "Pineapple - Regular",
    image: "http://dummyimage.com/135x169.jpg/ff4444/ffffff",
    price: 5,
    quantity: 0,
  },
  {
    id: 6,
    name: "Veal - Striploin",
    desc: "Table Cloth - 53x69 Colour",
    image: "http://dummyimage.com/172x235.bmp/cc0000/ffffff",
    price: 74,
    quantity: 0,
  },
  {
    id: 7,
    name: "Gherkin - Sour",
    desc: "Wine - Red, Antinori Santa",
    image: "http://dummyimage.com/218x137.jpg/5fa2dd/ffffff",
    price: 32,
    quantity: 0,
  },
  {
    id: 8,
    name: "Mustard - Dijon",
    desc: "Creme De Cacao White",
    image: "http://dummyimage.com/159x124.png/dddddd/000000",
    price: 64,
    quantity: 0,
  },
  {
    id: 9,
    name: "Bread Crumbs - Japanese Style",
    desc: "Cabbage - Red",
    image: "http://dummyimage.com/239x217.png/cc0000/ffffff",
    price: 19,
    quantity: 0,
  },
  {
    id: 10,
    name: "Veal - Inside",
    desc: "Cassis",
    image: "http://dummyimage.com/222x166.png/ff4444/ffffff",
    price: 8,
    quantity: 0,
  },
];
