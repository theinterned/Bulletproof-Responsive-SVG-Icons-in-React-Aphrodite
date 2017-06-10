// eslint-disable import/no-webpack-loader-syntax
import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';
import BabyIcon from './icons/Baby.icon.svg';

const Icon = ({ name }) => <span className={css(styles.icon)}>
  <BabyIcon className={css(styles.svg)} />
</span>;

export default Icon;

Icon.propTypes = {
  name: PropTypes.string,
};

const styles = StyleSheet.create({
  icon:  {
    display: 'inline-flex',
    alignSelf: 'center',
    position: 'relative',
    height: '1em',
    width: '1.25em'
  },
  svg: {
    height: '1.25em',
    width: '1.25em',
    top: 0,
    position: 'absolute'
  }
});
