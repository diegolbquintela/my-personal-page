import ProjectItem from './ProjectsItem';

const ProjectList = (props) => {
  const DUMMY_PROJECTS = [
    {
      id: 'p1',
      title: 'Food Order App',
      description: 'app for ordering food',
      link: 'www.github.com',
    },
  ];

  return (
    <ul>
      {DUMMY_PROJECTS.map((project) => (
        <ProjectItem
          key={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
