import React, { useState, useEffect, useRef, Suspense } from "react";

import {IProduct} from '../../@types/product';

import api from "../../services/api";
import { View, Text, Alert } from 'react-native';

import FloatingBuyButton from '../../components/FloatingBuyButton';
import SliderProduct from '../../components/SliderProductPage';

import {
  MainContainer,
  GradientContainer,
} from "../../styles/components/Containers";
import { ProductContainer, ProductTitle, ProductImage, BoxContainer, ProductList } from "./styles";

interface navigateProps {
  route: any,
  navigation: any
}

const Product: React.FC<navigateProps> = ({route, navigation}) => {
  const { id } = route.params;
  const [product, setProduct] = useState<IProduct[]>([]);


  useEffect(() => {
    async function loadProduct(): Promise<void> {
      try {
        const response = await api.get(`?fq=productId:${id}`);
        setProduct(response.data);
      } catch (error) {
        Alert.alert(
          "There was an error while listing product. Please, try to reload the screen",
        );
      }
    }
    loadProduct();
  }, []);




  return (
    <GradientContainer>
      <MainContainer>
        <ProductContainer>
          <ProductList
            data={product}
            keyExtractor={item => item.productId}
            ListHeaderComponent={(
              <View>
                <SliderProduct imageName={product[0]?.items} />
                <BoxContainer>
                  <ProductImage
                    source={{uri: "https://www.grandesofertas.com.br/arquivos/ids/175650-520-520/image-4387942f57a04aa0b951236125ac0da9.jpg?v=637346427549500000"}}
                  />
                </BoxContainer>
                <ProductTitle>{product[0]?.productName}</ProductTitle>
              </View>
            )}

            //   renderItem={({ item, index }) => {
            //     // const productImageUri = { uri: item.items[0].images[0].imageUrl };
            //     // const productPrice = formatValue(item.items[0].sellers[0].commertialOffer.Price);

            //     return (
            //         <View>

            //         </View>
            //       // <Product>
            //       //   <ProductImage source={productImageUri} />
            //       //   <ProductTitle onPress={() => handleGoToProduct(item.productId)}>{item.productName}</ProductTitle>

            //       //   <PriceContainer>
            //       //     <ProductPrice>{productPrice}</ProductPrice>
            //       //     <ProductButton
            //       //       testID={`add-to-cart-${item.productId}`}
            //       //       onPress={handleAddToCart(item)}
            //       //     >
            //       //       <FeatherIcon size={20} name="plus" color="#C4C4C4" />
            //       //     </ProductButton>
            //       //   </PriceContainer>
            //       // </Product>
            //     );
            // }}

          />
        </ProductContainer>
        <FloatingBuyButton />
      </MainContainer>
    </GradientContainer>
  );
}

export default Product;