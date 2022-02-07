import SkillListItem from './SkillListItem';

const SkillList = () => {
  const languages = ['JavaScript', 'Java', 'Python'];
  const tools = [
    'React',
    'Node.js',
    'Rest APIs',
    'Spring Boot',
    'Version Control',
  ];
  const platforms = ['Web', 'AWS', 'Docker', 'Unix/Linux'];
  const databases = ['Postgres, MySQL, MongoDB'];

  return (
    <ul>
      <li>Languages: {languages.join(' ')}</li>
      <li>Tools: {tools.join(' ')}</li>
      <li>Platforms: {platforms.join(' ')}</li>
      <li>Databases: {databases.join(' ')}</li>
    </ul>
  );
};

export default SkillList;
