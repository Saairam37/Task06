import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import AppContextComponent from "./context/AppContextComponent";


const routes = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/courses",
    element: <CartPage/>
  }
]

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});


const App = () => {
  return (<AppContextComponent>
    <RouterProvider 
    router={router}
    />
  </AppContextComponent>)
}

export default App