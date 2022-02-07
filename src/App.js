import { Fragment } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/projects/ProjectList';

function App() {
  return (
    <Fragment>
      <Header />
      <ProjectList />
      <Footer />
    </Fragment>
  );
}

export default App;
