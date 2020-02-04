import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import App from '../../src/App';
import Quotes from '../../src/containers/Quotes';
import QuoteForm from '../../src/components/QuoteForm';
import { store } from '../../src/store';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
