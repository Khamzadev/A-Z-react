import About from "../pages/About";
import Login from "../pages/Login";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/", element: <About />, exact: true },
  { path: "/posts", element: <Posts />, exact: true },
  { path: "/posts/:id", element: <PostPage />, exact: true },
];

export const publicRoutes = [
  { path: "/login", element: <Login />, exact: true },
];
