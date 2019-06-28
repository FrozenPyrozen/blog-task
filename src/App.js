import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from './configs/routes';
import Loader from './components/Loader/Loader';

const AsyncPostsPage = lazy(() =>
  import(/* webpackChunkName: "Posts-page" */ './pages/PostListPage'),
);
const AsyncPostPage = lazy(() =>
  import(/* webpackChunkName: "Post-page" */ './pages/PostPage'),
);

const AsyncNotFoundPage = lazy(() =>
  import(/* webpackChunkName: "NotFound-page" */ './pages/NotFoundPage'),
);

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Redirect exact from="/" to={routes.posts} />
          <Route exact path={routes.posts} component={AsyncPostsPage} />
          <Route path={routes.postItem} component={AsyncPostPage} />
          <Route component={AsyncNotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
