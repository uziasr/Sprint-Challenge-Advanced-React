import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react'
import axios from 'axios'
import PlayerGrid from '../src/components/PlayerGrid'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('loading',()=>{
  const {getByText} = render(<App />);
  getByText(/loading/i)
})

test('axios call test',()=>{
  let actual;
  axios
  .get('http://localhost:5000/api/players')
  .then(res=>{
    expect(typeof res.data).toBe('object')
  })
  .catch(err=>console.log(err))
})
