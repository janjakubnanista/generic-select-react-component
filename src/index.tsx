import { App } from './components/App';
import { CalendarEvent } from './types';
import { render } from 'react-dom';
import React from 'react';

const container = document.getElementById('app');

render(<App />, container);