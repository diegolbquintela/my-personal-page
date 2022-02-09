import SkillListItem from './SkillListItem';

import classes from './SkillList.module.css';

// TODO: find a way of linking skills with respective projects

const SkillList = () => {
  const skills = [
    {
      type: 'languages',
      skillList: ['JavaScript', 'Java', 'Python'],
    },
    {
      type: 'tools',
      skillList: [
        'React',
        'Node.js',
        'Rest APIs',
        'Spring Boot',
        'Version Control',
      ],
    },
    {
      type: 'platforms',
      skillList: ['Web', 'AWS', 'Docker', 'Unix/Linux'],
    },
    {
      type: 'databases',
      skillList: ['Postgres', 'MySQL', 'MongoDB'],
    },
  ];

  return (
    <ul className={classes.skill__list}>
      {skills.map((skill) => (
        <SkillListItem
          key={Math.random() * 100}
          type={skill.type}
          skillList={skill.skillList.join(' / ')}
        />
      ))}
    </ul>
  );
};

export default SkillList;
