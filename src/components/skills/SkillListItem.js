import classes from './SkillListItem.module.css';

const SkillListItem = (props) => {
  return (
    <li>
      <h3>{props.type}</h3>
      <ul className={classes.skill__list}>
        <li className={classes.skill__list__item}>
          <h4>{props.skillList}</h4>
        </li>
      </ul>
    </li>
  );
};

export default SkillListItem;
