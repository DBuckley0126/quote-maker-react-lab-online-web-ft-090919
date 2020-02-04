import uuid from 'uuid';
import { expect } from 'chai';
import reducer from '../../src/reducers/quotes';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import App from '../../src/App';
import { createStore } from 'redux'
import rootReducer from '../../src/reducers/index'
import Adapter from 'enzyme-adapter-react-16'
import QuoteCard from '../../src/components/QuoteCard';

configure({ adapter: new Adapter() })
