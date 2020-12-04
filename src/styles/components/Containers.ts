import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

import theme from "../theme";

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  align-items: flex-start;
`;

export const GradientContainer = styled(LinearGradient).attrs({
  colors: [theme.colors.tomato, theme.colors.blackPrimary],
})`
  flex: 1;
`;
