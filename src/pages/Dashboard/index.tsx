import React, { useState, useEffect, useRef } from "react";
import FeatherIcon from "react-native-vector-icons/Feather";

import { IProduct } from '../../@types/product';


import { View, Alert, Animated } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import formatValue from "../../utils/formatValue";
import { useCart } from "../../context/cart/CartContext";
import api from "../../services/api";
import FloatingCart from "../../components/FloatingCart";
import Box from "../../components/Box";
import SliderHome from '../../components/Slider';
import Categories from "../../components/Categories";
import {
  MainContainer,
  GradientContainer,
} from "../../styles/components/Containers";
import {
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
} from "./styles";

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const { addToCart } = useCart();
  const [products, setProducts] = useState<IProduct[]>([]);
  const productListOffset = useRef(new Animated.ValueXY({
    x: 50,
    y: 0,
  })).current;
  const productListOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      try {
        const response = await api.get("forno?map=c&_from=0&_to=15");
        setProducts(response.data);
      } catch (error) {
        Alert.alert(
          "There was an error while listing products. Please, try to reload the screen",
        );
      }
    }
    loadProducts();
  }, []);

  useFocusEffect(() => {
    Animated.parallel([
      Animated.spring(productListOffset, {
        toValue: 0,
        speed: 2,
        bounciness: 3,
        useNativeDriver: false,
      }),

      Animated.timing(productListOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  });

  const handleGoToProduct = (productId: number): void => {
    navigation.navigate("Product", {
      id: productId
    });
  };

  const handleAddToCart = (item: IProduct) => (): void => {
    addToCart(item.productId);
  };

  return (
    <GradientContainer>
      <MainContainer>
        <ProductContainer>
          <Animated.View style={[
            {
              transform: [
                ...productListOffset?.getTranslateTransform(),
              ],
            },
            {
              opacity: productListOpacity,
            },
          ]}
          >
            <ProductList
              data={products}
              ListHeaderComponent={(
                <View>
                  <SliderHome />
                  <Box
                    productName={products[0]?.productName}
                    productPrice={products[0]?.items[0].sellers[0].commertialOffer.Price}
                    // productPhotoUrl={products[0]?.items[0].images[0].imageUrl}
                    isNew
                  />
                  <Categories />
                </View>
              )}
              keyExtractor={item => item.productId}
              ListFooterComponent={<View />}
              ListFooterComponentStyle={{
                height: 80,
              }}
              renderItem={({ item, index }) => {
                const productImageUri = { uri: item.items[0].images[0].imageUrl };
                const productPrice = formatValue(item.items[0].sellers[0].commertialOffer.Price);

                return (
                  <Product>
                    <ProductImage source={productImageUri} />
                    <ProductTitle onPress={() => handleGoToProduct(item.productId)}>{item.productName}</ProductTitle>
                    
                    <PriceContainer>
                      <ProductPrice>{productPrice}</ProductPrice>
                      <ProductButton
                        testID={`add-to-cart-${item.productId}`}
                        onPress={handleAddToCart(item)}
                      >
                        <FeatherIcon size={20} name="plus" color="#C4C4C4" />
                      </ProductButton>
                    </PriceContainer>
                  </Product>
                );
              }}
            />
          </Animated.View>
        </ProductContainer>
        <FloatingCart />
      </MainContainer>
    </GradientContainer>
  );
};

export default Dashboard;
