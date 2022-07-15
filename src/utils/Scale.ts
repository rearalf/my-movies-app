import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const DESIGN_BASE_SCREEN = {
  width: 375,
  height: 812,
};

const scale = (size: number) => {
  return size * (width / DESIGN_BASE_SCREEN.width);
};

export default scale;
