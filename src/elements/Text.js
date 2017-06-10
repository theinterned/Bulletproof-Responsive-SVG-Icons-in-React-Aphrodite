import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const Text = ({children}) => <p className={css(styles.text)}>{children}</p>;

export default Text;

Text.propTypes = {
  children: PropTypes.node
}

export const textStyles = {
  fontSize: '1em',
  lineHeight: '1.25em',
  marginTop: '1.25em',
  marginBottom: '1.25em',
  fontFamily: 'sans-serif',
}

const styles = StyleSheet.create({
  text: textStyles
});
