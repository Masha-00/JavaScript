import SongaList from "./pages/SongList";
import About from "./pages/About";
import SongDetails from "./pages/SongDetails";
import Login from "./pages/Login";

export const privateRoutes = [
    { path: '/songs', component: SongaList, exact: true },
    { path: '/songs/:id', component: SongDetails, exact: true },
    { path: '/about', component: About, exact: false },
];

export const publicRoutes = [
    { path: '/login', component: Login, exact: true },
];