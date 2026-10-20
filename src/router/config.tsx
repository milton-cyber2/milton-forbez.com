import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Classes from "../pages/classes/page";
import BrandCollaborations from "../pages/brand-collaborations/page";
import ServiceDetail from "../pages/services/page";
import Blog from "../pages/blog/page";
import BlogDetail from "../pages/blog/detail";
import Contact from "../pages/contact/page";
import Book from "../pages/book/page";
import About from "../pages/about/page";
import Memberships from "../pages/memberships/page";
import Transformations from "../pages/transformations/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/classes",
    element: <Classes />,
  },
  {
    path: "/brand-collaborations",
    element: <BrandCollaborations />,
  },
  {
    path: "/services/:slug",
    element: <ServiceDetail />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:slug",
    element: <BlogDetail />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/memberships",
    element: <Memberships />,
  },
  {
    path: "/transformations",
    element: <Transformations />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
