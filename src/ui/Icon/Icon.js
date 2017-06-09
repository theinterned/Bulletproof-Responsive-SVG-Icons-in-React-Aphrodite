// eslint-disable import/no-webpack-loader-syntax
import React from "react";
import PropTypes from "prop-types";
import BabyIcon from './icons/Baby.icon.svg';

const Icon = ({ name }) => <div><BabyIcon /> {name}</div>;
export default Icon;

Icon.propTypes = {
  name: PropTypes.string,
};
