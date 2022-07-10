import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';

const sections = [
  'Courses',
  'Education',
  'Experience',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Shelen R. Ells' Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>

        </div>
      </header>
      <Courses data={courses} />
      <Education data={degrees} />
      <Experience data={positions} />
      <References />

    </article>
  </Main>
);

export default Resume;
