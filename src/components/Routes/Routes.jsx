import NotFound from "Pages/404/NotFound"
import Edit from "Pages/Edit/Edit"
import Home from "Pages/Home"

import { Route, Switch } from "react-router-dom"

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/edit/:id' component={Edit} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Routes
