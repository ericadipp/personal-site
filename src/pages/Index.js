import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Shelen R. Ells's personal website. "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/resume">resume</Link>, {' '}
            <Link to="/projects">projects</Link>, {' '}
            or <Link to="/contact">contact</Link> me.
          </p>
        </div>
      </header>
      <p> Source available <a href="https://github.com/ShelenElls">here</a> </p>
    </article>
  </Main>
);

export default Index;
