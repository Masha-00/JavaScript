import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from '../routes';

function AppRouter() {
    const { isUserLogin } = useContext(AuthContext);
    console.log(isUserLogin);
    return ( 
        <div>
        {
            isUserLogin ?
            <Switch>
                {
                    privateRoutes.map(route => 
                        <Route 
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact = {route.exact}
                        />
                    )
                }
                <Redirect to="/songs" />
            </Switch> 
            :
            <Switch>
                {
                    publicRoutes.map(route => 
                        <Route 
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact = {route.exact}
                        />
                    )
                }
            <Redirect to="/login" /> {/* use if the path is not correct */}
            </Switch>
        }
        </div>
    );
}

export default AppRouter;