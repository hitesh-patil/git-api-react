import SearchGitUser from '../components/SearchGitUser'
import PageNotFound from '../components/PageNotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={SearchGitUser} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;