import { Fragment } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProjectList from './components/projects/ProjectList';
import SkillList from './components/skills/SkillList';
import Description from './components/description/Description';

function App() {
  return (
    <Fragment>
      <Header />
      <Description />
      <SkillList />
      <ProjectList />
      <Footer />
    </Fragment>
  );
}

export default App;
