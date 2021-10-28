import React from 'react';
import Header from './components/Header';
import './default.scss';

export default function App () {
  return (
    <div className="main">
      <Header />
      <h3 className="title">Yo React!</h3>
    </div>
  )
}