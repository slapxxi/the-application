// @flow
import { setLightness, lighten } from 'polished';
import colors from './colors';

const theme = {
  colors: {
    heading: colors.midnightexpress,
    text: colors.paynegrey,
    button: colors.geraldine,
    buttonActive: setLightness(0.4, colors.geraldine),
    buttonText: lighten(0.9, colors.geraldine),
    buttonTextActive: lighten(0.8, colors.geraldine),
  },
};

export default theme;
