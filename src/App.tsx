import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './App.scss';
import ParentComponent from './components/ParentChildRelation/ParentComponent';

export const App = ()=> {
  return (
    <div className="container">
      <ParentComponent />
    </div>
  );
}

