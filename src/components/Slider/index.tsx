import React from 'react'
import Slick from 'react-native-slick';
import { View, Text, Image } from 'react-native'

import {
  SliderImage,
  SliderContainer
} from "./styles";


const SliderHome: React.FC = ({ children }) => {
  const imageSource = {
    uri: 'https://www.grandesofertas.com.br/arquivos/grds_ofertas_ban_full_08nov_blk_friday2_desk.jpg?v=637404447092970000',
  };

  return (
    <Slick showsButtons={true} height={200}>
    <SliderContainer>
      <SliderImage source={imageSource} />
    </SliderContainer>
    <SliderContainer>
      <SliderImage source={imageSource} />
    </SliderContainer>
    <SliderContainer>
      <SliderImage source={imageSource} />
    </SliderContainer>
  </Slick>
  )
}

export default SliderHome;
