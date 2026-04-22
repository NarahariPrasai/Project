import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const Router = createBrowserRouter([
    { link:"/login", element: <login/>},
    { link:"/register", element:<register/>},
]);

export default Router;