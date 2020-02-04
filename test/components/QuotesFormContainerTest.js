import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from '../../src/reducers/index'
import App from '../../src/App';
import QuoteForm from '../../src/components/QuoteForm';

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
