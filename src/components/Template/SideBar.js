import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shelen R. Ells</h2>
        <p><a href="mailto:shelen.ells@gmail.com">shelen.ells@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Shelen. I like solving puzzles and fixing things.
        I am an Alumni of the <a href="https://www.hackreactor.com/">Hack Reactor</a> with
        Advanced Software Engineering Certificate program.
        Prior to my transition into Software Engineering,
        I was a Licensed Mortgage Officer with <a href="https://www.rocketmortgage.com">Rocket Mortgage</a>
        ; an Ocular Recovery Technician at <a href="https://www.dnaz.org/">Donor Network of Arizona</a>
        ; and a Patient Care Technician with various Emergency Departments in hospitals such as <a href="https://www.dignityhealth.org/">Dignity Health</a>
        , <a href="https://www.bannerhealth.com/">Banner Health</a>
        , and <a href="https://www.mtgraham.org/">M.G.R.M.C.</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Shelen Ells 2022.</p>
    </section>
  </section>
);

export default SideBar;
