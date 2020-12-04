import styled from "styled-components/native";
import { FlatList } from "react-native";
import { IProduct } from '../../@types/product';

export const ProductContainer = styled.View`
  border-radius: 5px;
  margin-top: 60px;
  flex: 1;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 100%;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  color: #FFFFFF;
  font-size: 28px;
  text-align: center;
  font-weight: 600;
`;


export const BoxContainer = styled.View`
  height: 300px;
  background-color: ${({ theme }) => theme.colors.tomato};
  width: 100%;
  margin: 20px 0;
  border-radius: 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ProductList = styled(
  FlatList as new () => FlatList<IProduct>,
).attrs({
  numColumns: 2,
})`
  flex: 1;
  padding: 0 10px;
`;