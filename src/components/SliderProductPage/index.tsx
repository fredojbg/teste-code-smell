import React from "react"
import { Text, View, Image } from "react-native";
import Slick from "react-native-slick";


import { IProduct } from "../../@types/product";

interface SliderProps {
  image: string;
  imageName: Images[];
}

 interface Images {
  imageId: string;
  imageLabel?: any;
  imageTag: string;
  imageUrl: string;
  imageText: string;
  imageLastModified: string;
}

const SliderProduct: React.FC<SliderProps> = ({ imageName }) => {
  

  return (
   <Slick>
     <Image source={imageName[0]?.images[0]?.imageUrl} />
   </Slick>
  )
}

export default SliderProduct;
