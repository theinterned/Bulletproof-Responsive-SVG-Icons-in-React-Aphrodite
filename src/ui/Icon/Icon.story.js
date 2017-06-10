import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../../elements/Text';
import Icon from './Icon';


storiesOf('Icon', module)
  .add('default', () => (
    <div>
      <Text><Icon name="Baby" /> Baby Icon</Text>
      <Text><Icon name="Balloon" /> Balloon Icon</Text>
      <Text><Icon name="Globe" /> Globe Icon</Text>
      <Text><Icon name="Knife" /> Knife Icon</Text>
      <Text><Icon name="Skull" /> Skull Icon</Text>
      <Text><Icon name="Tear" /> Tear Icon</Text>
      <Text><Icon name="Tooth" /> Tooth Icon</Text>
    </div>
  ))
  .add('at different sizes', () => (
    <div>
      <Text size="xs">
        xs:
        <Icon name="Baby" />
        <Icon name="Balloon" />
        <Icon name="Globe" />
        <Icon name="Knife" />
        <Icon name="Skull" />
        <Icon name="Tear" />
        <Icon name="Tooth" />
      </Text>
      <Text size="sm">
         sm:
        <Icon name="Baby" />
        <Icon name="Balloon" />
        <Icon name="Globe" />
        <Icon name="Knife" />
        <Icon name="Skull" />
        <Icon name="Tear" />
        <Icon name="Tooth" />
      </Text>
      <Text size="md">
        md:
        <Icon name="Baby" />
        <Icon name="Balloon" />
        <Icon name="Globe" />
        <Icon name="Knife" />
        <Icon name="Skull" />
        <Icon name="Tear" />
        <Icon name="Tooth" />
      </Text>
      <Text size="lg">
        lg:
        <Icon name="Baby" />
        <Icon name="Balloon" />
        <Icon name="Globe" />
        <Icon name="Knife" />
        <Icon name="Skull" />
        <Icon name="Tear" />
        <Icon name="Tooth" />
      </Text>
      <Text size="xl">
        xl:
        <Icon name="Baby" />
        <Icon name="Balloon" />
        <Icon name="Globe" />
        <Icon name="Knife" />
        <Icon name="Skull" />
        <Icon name="Tear" />
        <Icon name="Tooth" />
      </Text>
      <Text size="xxl">
        xxl:
        <Icon name="Baby" />
        <Icon name="Balloon" />
        <Icon name="Globe" />
        <Icon name="Knife" />
        <Icon name="Skull" />
        <Icon name="Tear" />
        <Icon name="Tooth" />
      </Text>
    </div>
  ))
  .add('In a block of text', () => (
    <Text><Icon name="Balloon" /> lipsumSed velit mentitum, incurreret eu quorum,
    incididunt litteris si iudicem cillum dolor ea duis eu proident enim quis an
    quem ad se expetendis despicationes, noster ad possumus aut velit.
    <Icon name="Skull" /> Noster nam ut
    illum cupidatat, nulla aut nescius do amet ne ad ea illustriora, a labore
    cohaerescant, e tempor labore et possumus si ex nam exquisitaque ad duis probant
    sed concursionibus, an quorum irure ne aliquip. Noster constias ex illum quem.
    Fugiat comprehenderit litteris cillum laboris, mandaremus quae proident,
    incurreret cillum an laboris praesentibus, sint mandaremus concursionibus. <Icon name="Tooth" /></Text>
  ));
