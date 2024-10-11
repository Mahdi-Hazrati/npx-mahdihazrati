#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';


// Styling the box around your CV info
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "cyan",
  backgroundColor: "#555555"
};

// Your CV data
const data = {
  name: chalk.bold.green("Mahdi Hazrati"),
  work: chalk.white("Front-End Developer at Nextproduction.dev"),
  github: chalk.gray("https://github.com/") + chalk.green("Mahdi-Hazrati"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("mahdi-hazrati"),
  web: chalk.cyan("https://mahdihazrati.ir"),
  labelWork: chalk.white.bold("      Work:"),
  labelGitHub: chalk.white.bold("   GitHub:"),
  labelLinkedIn: chalk.white.bold(" LinkedIn:"),
  labelWeb: chalk.white.bold("      Web:")
};

// Construct the CV string with formatting
const newline = "\n";
const heading = `${data.name}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;

// Final output
const output = heading + newline + newline + working + newline + githubing + newline + linkedining + newline + webing;

console.log(boxen(output, boxenOptions));
