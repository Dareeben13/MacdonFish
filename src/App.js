import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/hompage'
import GalleryPage from './pages/gallery/gallery-page'


import Header from './component/header/header.component'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/gallery" component={GalleryPage} />
      </Switch>
    </div>
  );
}

export default App;
