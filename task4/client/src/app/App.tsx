import {memo, Suspense} from 'react';

import {AppRouter} from './router';
import {Navbar} from '../widget/Navbar';

const App = memo(() => (
  <Suspense fallback=''>
    <Navbar/>
    <AppRouter/>
  </Suspense>
));

export default App;
