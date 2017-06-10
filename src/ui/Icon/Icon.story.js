import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../../elements/Text';
import Icon from './Icon';


storiesOf('Icon', module)
  .add('default', () => (
    <Text><Icon name="Baby" /> A Baby</Text>
  ))
  .add('In a block of text', () => (
    <Text><Icon name="Baby" /> lipsumSed velit mentitum, incurreret eu quorum,
    incididunt litteris si iudicem cillum dolor ea duis eu proident enim quis an
    quem ad se expetendis despicationes, noster ad possumus aut velit.
    <Icon name="Baby" /> Noster nam ut
    illum cupidatat, nulla aut nescius do amet ne ad ea illustriora, a labore
    cohaerescant, e tempor labore et possumus si ex nam exquisitaque ad duis probant
    sed concursionibus, an quorum irure ne aliquip. Noster constias ex illum quem.
    Fugiat comprehenderit litteris cillum laboris, mandaremus quae proident,
    incurreret cillum an laboris praesentibus, sint mandaremus concursionibus. <Icon name="Baby" /></Text>
  ));
