
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const StorybookTheme = ({ children }) => (
  <div className={css(styles.theme)}>
    {children}
  </div>
);

export default StorybookTheme;

StorybookTheme.propTypes = { children: PropTypes.node };

const styles = StyleSheet.create({
  theme: {
    position: 'relative',
    width:' calc(100% -  20px)',
    padding: '20px 10px 21px',
    margin: '10px',
    backgroundImage: `
      linear-gradient(0deg, transparent 40px, transparent 40px),
      linear-gradient(to bottom, rgba(0,0,0,0) 95%, rgba(56,255,255,.8) 100%);
    `,
    backgroundSize: '60px 100%, 100% 20px',
    backgroundPosition: '0 1px',
  }
});
