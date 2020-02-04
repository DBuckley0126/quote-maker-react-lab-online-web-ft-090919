import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import spies from 'chai-spies';
import { Provider } from 'react-redux';
import App from '../../src/App';
import Quotes from '../../src/containers/Quotes';
import QuoteForm from '../../src/components/QuoteForm';
import { createStore } from 'redux'
import rootReducer from '../../src/reducers/index'
import Adapter from 'enzyme-adapter-react-16'
import QuoteCard from '../../src/components/QuoteCard';

configure({ adapter: new Adapter() })
