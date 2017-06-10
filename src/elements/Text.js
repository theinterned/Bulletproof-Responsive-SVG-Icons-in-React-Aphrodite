import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const Text = ({children, size = 'md'}) => <p className={css(styles.text, styles[size])}>{children}</p>;

export default Text;

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const baseFontSize = 16;
const baseLineHeight = 20;

const fontSize = (target = baseFontSize, base = baseFontSize) => target / base;
const lineHeight = (target = baseLineHeight, fontSize = baseFontSize) => target / fontSize;
const em = measure => `${measure}em`;

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(sizes)
}

export const textStyles = {
  fontSize: em(fontSize()),
  lineHeight: em(lineHeight()),
  marginTop: 0,
  marginBottom: em(lineHeight()),
  fontFamily: 'sans-serif',
}

const textSizes = sizes.reduce((o, size, i) => {
  const fontScale = (i + 2) * .25;
  o[size] = { fontSize: em(fontSize(baseFontSize * fontScale)) };
  return o;
}, {});

const styles = StyleSheet.create({
  text: textStyles,
  ...textSizes
});
