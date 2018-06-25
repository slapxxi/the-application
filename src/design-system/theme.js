// @flow
import { setLightness, lighten } from 'polished';
import colors from './colors';

const theme = {
  colors: {
    heading: colors.midnightexpress,
    text: colors.paynegrey,
    button: colors.watermelon,
    buttonActive: setLightness(0.4, colors.watermelon),
    buttonText: lighten(0.9, colors.watermelon),
    buttonTextActive: lighten(0.8, colors.watermelon),
    headerText: colors.spunpearl,
  },
};

export default theme;
