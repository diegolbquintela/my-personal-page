const ProjectItem = (props) => {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={`${props.link}`}>{props.link}</a>
    </li>
  );
};

export default ProjectItem;
