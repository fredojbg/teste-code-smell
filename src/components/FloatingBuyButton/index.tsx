import React, { useContext, useMemo } from "react";
import pluralize from "pluralize";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "styled-components";

import { useCart } from "../../context/cart/CartContext";
import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from "./styles";

const FloatinBuyButton: React.FC = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);
  const { totalProductsQuantity, totalProductsPrice } = useCart();

  const handleNavigation = (): void => {
    navigation.navigate("Cart");
  };

  const totalProductsQuantityMessage = useMemo(() => `${totalProductsQuantity} ${pluralize("item", totalProductsQuantity)}`, [totalProductsQuantity]);

  return (
    <Container>
      <CartButton
        testID="navigate-to-cart-button"
        onPress={handleNavigation}
      >
        <FeatherIcon
          name="shopping-cart"
          size={24}
          color={theme.colors.blackPrimary}
        />
        <CartButtonText>Comprar</CartButtonText>
      </CartButton>

      <CartPricing>
        <CartTotalPrice> R$ 120,00 </CartTotalPrice>
      </CartPricing>
    </Container>
  );
};

export default FloatinBuyButton;
