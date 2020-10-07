import Loadable from 'react-loadable';

import Loading from '../../components/Loading/Loading';

const LoadableHome = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

export default LoadableHome;
