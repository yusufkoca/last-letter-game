import Loadable from 'react-loadable';

import Loading from '../../components/Loading/Loading';

const LoadableGame = Loadable({
  loader: () => import('./Game'),
  loading: Loading,
});

export default LoadableGame;
