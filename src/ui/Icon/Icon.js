// eslint-disable import/no-webpack-loader-syntax
import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';
import { textStyles } from '../../elements/Text';
import * as icons from './icons/';

const Icon = ({ name }) => {
  const IconName = icons[name];
  return (
    <span className={css(styles.icon)}>
      <IconName className={css(styles.svg)} />
    </span>
  );
}

export default Icon;

Icon.propTypes = {
  name: PropTypes.string,
};

const styles = StyleSheet.create({
  icon:  {                       // aligns icon to text baseline
    display: 'inline-block',
    position: 'relative',
    height: textStyles.fontSize, // text x-height
    width: textStyles.lineHeight, // line-height == icon size
  },
  svg: {                        // aligns icon to text line-height
    position: 'absolute',
    top: 0,
    height: textStyles.lineHeight,
    width: textStyles.lineHeight,
  }
});
