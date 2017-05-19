import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Hello from '../src/Hello';

storiesOf('hello', module)
    .add('hello', () => (<div>Sag hallo</div>))
    .add('hello2', () => (<Hello><div>Sag hallo</div></Hello>))
;
