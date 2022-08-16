import React from 'react';
import {Routes, Route} from 'react-router-dom';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import PostPage from '../pages/PostPage';
import Posts from '../pages/Posts';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;