import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import classes from './Description.module.css';

const Description = () => {
  return (
    <>
      <article className={classes.description}>
        <div>
          <h1>Hello, I'm Diego Quintela</h1>
        </div>
        <div className={classes.description_subtitle}>
          <h3>
            Full-stack developer based in Toronto, currently exploring libraries
            such as ReactJS, Frameworks such as NextJS and NodeJS.
          </h3>
          <span>-</span>
        </div>
        <div>
          <p>Selected projects below.</p>
        </div>
      </article>
      <div className={classes.arrow}>
        <span>
          <KeyboardArrowDownIcon sx={{ fontSize: 100 }} />
        </span>
      </div>
    </>
  );
};

export default Description;
