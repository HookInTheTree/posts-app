import About from "../pages/about";
import Login from "../pages/login";
import PostPage from "../pages/post";
import Posts from "../pages/posts";

export const privateRoutes = [
    {path:"/posts", element: <Posts/>},
    {path:"/posts/:id", element: <PostPage/>},
    {path:"*", element:<Posts/>},
]

export const publicRoutes = [
    {path:"/login", element: <Login/>},
    {path:"/about", element: <About/>},
    {path:"*", element:<Login/>},
]