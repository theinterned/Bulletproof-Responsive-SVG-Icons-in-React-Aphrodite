import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';

storiesOf('Text', module)
  .add('default', () => (
    <div>
      <Text size="xs">8/10 &mdash; xs</Text>
      <Text size="sm">12/15 &mdash; sm</Text>
      <Text size="md">16/20 &mdash; md</Text>
      <Text size="lg">20/25 &mdash; lg</Text>
      <Text size="xl">24/30 &mdash; xl</Text>
      <Text size="xxl">28/35 &mdash; xxl</Text>
    </div>
  ))
  .add('Lorem Ipsum', () => (
    <div>
      <Text><b>Fabulas adipisicing aut incididunt</b> <i>iis anim a doctrina non malis.</i> Ut laborum a
      cernantur, incididunt labore ne eiusmod adipisicing, ullamco velit in deserunt
      illustriora, nostrud anim ad occaecat efflorescere. O aliqua cillum summis
      laboris, ea et multos probant.</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
       anim id est laborum.</Text>
    </div>
  ))
  .add('accepts style', () => (
    <Text style={{
      fontStyle: 'italic',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      padding: '1em',
      outline: '.5em dotted red',
    }}>I have an outline</Text>
  ));
