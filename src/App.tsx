import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="map-size">
        <Button top = {780} left = {270}/>
        <Button top = {620} left = {470}/>
        <Button top = {490} left = {660}/>
        <Button top = {250} left = {520}/>
        <Button top = {270} left = {570}/>
        <Button top = {750} left = {450}/>
        <Button top = {470} left = {530}/>
    </div>
  );
}

export default App;
