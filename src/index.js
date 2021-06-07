
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Academic_Skills from './components/Academic_Skills';
import Interest_Languages from './components/Interest_Languages';

const containerHeader = document.getElementById('Header');
ReactDOM.render(<Header />,containerHeader);

const containerProfile = document.getElementById('Profile');
ReactDOM.render(<Profile />,containerProfile);

const containerExperience = document.getElementById('Experience');
ReactDOM.render(<Experience />,containerExperience);

const containerAcademicskills = document.getElementById('Academic_Skills');
ReactDOM.render(<Academic_Skills />,containerAcademicskills);

const containerInterestlanguages = document.getElementById('Interest_Languages');
ReactDOM.render(<Interest_Languages />,containerInterestlanguages);


