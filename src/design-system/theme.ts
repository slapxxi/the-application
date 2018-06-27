import { lighten, darken } from 'polished';
import colors from './colors';
import typography from './typography';

const theme = {
  colors: {
    button: colors.geraldine,
    buttonActive: darken(0.2, colors.geraldine),
    buttonText: colors.white,
    buttonTextActive: lighten(0.9, colors.grey),
    headerText: colors.spunpearl,
    heading: colors.midnightexpress,
    text: colors.paynegrey,
  },
  sizes: {
    heading: typography.heading.size,
    padding: 10,
    text: typography.text.size,
  },
};

export default theme;
