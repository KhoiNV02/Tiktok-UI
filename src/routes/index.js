import config from '~/config';
import { HeaderOnlyLayout } from '~/layouts';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Upload from '~/Pages/UpLoad';
import Live from '~/Pages/Live';
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.upload, component: Upload, layout: HeaderOnlyLayout },
  { path: config.routes.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
