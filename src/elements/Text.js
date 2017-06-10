import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const Text = ({children, size = 'md'}) => <p className={css(styles.text, styles[size])}>{children}</p>;

export default Text;

Text.propTypes = {
  children: PropTypes.node
}

const baseFontSize = 16;
const baseLineHeight = 20;

const fontSize = (target = baseFontSize, base = baseFontSize) => target / base;
const lineHeight = (target = baseLineHeight, fontSize = baseFontSize) => target / fontSize;
const em = measure => `${measure}em`;

export const textStyles = {
  fontSize: em(fontSize()),
  lineHeight: em(lineHeight()),
  marginTop: 0,
  marginBottom: em(lineHeight()),
  fontFamily: 'sans-serif',
}

const styles = StyleSheet.create({
  text: textStyles,
  xs: {
    fontSize: em(fontSize(baseFontSize * .5))
  },
  sm: {
    fontSize: em(fontSize(baseFontSize * .75))
  },
  lg: {
    fontSize: em(fontSize(baseFontSize * 1.25)),
  },
  xl: {
    fontSize: em(fontSize(baseFontSize * 1.5))
  },
  xxl: {
    fontSize: em(fontSize(baseFontSize * 2))
  },
});
