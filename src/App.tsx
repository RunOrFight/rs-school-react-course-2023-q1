import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { AboutPage, FormPage, HomePage, NotFoundPage } from 'pages';
import { MainLayout } from 'layouts';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
