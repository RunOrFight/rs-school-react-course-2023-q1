import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { AboutPage, HomePage, NotFoundPage } from 'pages';
import { MainLayout } from 'components/layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
