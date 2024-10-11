#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import open from "open";
import inquirer from "inquirer";

// Your CV Information
const information = {
  first_name: "Mahdi",
  last_name: "Hazrati",
  full_name: "Mahdi Hazrati",
  title: "Front End Developer",
  gmail: "mahdihazratimailbox@gmail.com",
  description: `
Mahdi Hazrati is a 23-year-old Computer Science student and highly skilled
front-end developer with three years of experience building dynamic
and user-friendly web applications. Specializing in React, Next.js.
Mahdi has successfully led and contributed to a variety of projects,
delivering optimized, responsive interfaces. With a strong focus
on clean code, performance, and user experience, Mahdi is eager to take on
mid-level roles where he can apply his expertise and contribute to innovative
development teams. Passionate about continuous learning and problem solving,
Mahdi thrives in fast-paced, collaborative environments.
   `,
  cv_pdf: {
    download_url:
      "https://mahdihazrati.ir/assets/files/Mahdi%20Hazrati%20Portfolio%20-%20v3.0.2%20-%202024%2010%2004-encrypted.pdf",
  },
  website: {
    label: "MahdiHazrati.ir",
    url: "https://mahdihazrati.ir",
  },
  github: {
    label: "Github",
    url: "https://github.com/Mahdi-Hazrati",
  },
  telegram: {
    label: "Telegram",
    url: "https://t.me/TheMahdiiHazrati",
  },
  linkedin: {
    label: "Linkedin",
    url: "https://linkedin.com/in/mahdihazratidev",
  },
  npm: {
    label: "NPM",
    url: "https://www.npmjs.com/~mahdihazrati",
  },
  next_production: {
    label: "NextProduction.dev",
    url: "https://nextproduction.dev/",
  },
  youtube: {
    label: "Youtube",
    url: "https://youtube.com/@DiscoverWithMahdi",
  },
};

// Styling for the outer box and inner white box
const fullBoxOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "double",
  borderColor: "white",
  backgroundColor: "#1e1e1e", // Dark outer background
};

const innerBoxOptions = {
  padding: 1,
  margin: 1,
  backgroundColor: "#ffffff", // White inner background
};

// Construct the inner box content (CV details)
const innerBoxContent = `
${chalk.bold.blue(information.full_name)}
${chalk.green(information.title)}

${chalk.black(information.description)}

${chalk.bold("Website:")} ${chalk.cyan(information.website.url)}
${chalk.bold("GitHub:")} ${chalk.green(information.github.url)}
${chalk.bold("Telegram:")} ${chalk.magenta(information.telegram.url)}
${chalk.bold("LinkedIn:")} ${chalk.blue(information.linkedin.url)}
${chalk.bold("NPM:")} ${chalk.yellow(information.npm.url)}
${chalk.bold("NextProduction:")} ${chalk.green(information.next_production.url)}
${chalk.bold("YouTube:")} ${chalk.red(information.youtube.url)}
`;

// Show the final CV with a white box inside a darker one
const output = boxen(innerBoxContent, innerBoxOptions);
console.log(boxen(output, fullBoxOptions));

// Interactive menu for further actions
const menuOptions = [
  {
    type: "list",
    name: "action",
    message: chalk.yellow("What would you like to do next? 🚀"),
    choices: [
      { name: "👨‍💻 View PDF CV", value: "view_cv" },
      { name: "📧 Send an Email to Mahdi", value: "send_email" },
      { name: "🌐 Open Mahdi's Website", value: "open_website" },
      { name: "💻 Visit Mahdi's GitHub", value: "open_github" },
      { name: "🔗 Visit Mahdi's LinkedIn", value: "open_linkedin" },
      { name: "🌍 Visit NextProduction.dev", value: "open_next_production" },
      { name: "🎥 Visit Mahdi's YouTube Channel", value: "open_youtube" },
    ],
  },
];

// Handle interactive selection
inquirer.prompt(menuOptions).then((answers) => {
  switch (answers.action) {
    case "view_cv":
      open(information.cv_pdf.download_url); // Open the CV PDF
      break;
    case "send_email":
      open(`mailto:${information.gmail}`); // Open email client
      break;
    case "open_website":
      open(information.website.url); // Open Mahdi's website
      break;
    case "open_github":
      open(information.github.url); // Open GitHub
      break;
    case "open_linkedin":
      open(information.linkedin.url); // Open LinkedIn
      break;
    case "open_next_production":
      open(information.next_production.url); // Open NextProduction website
      break;
    case "open_youtube":
      open(information.youtube.url); // Open YouTube channel
      break;
    default:
      console.log(chalk.red("Oops! Invalid selection, please try again."));
  }
});

// Catch Ctrl + C / Ctrl + X interrupts
process.on("SIGINT", () => {
  console.log(chalk.green("\n👋 Thank you for visiting! Best of luck with your projects, and keep coding! 🚀✨"));
  process.exit();
});

process.on("SIGTERM", () => {
  console.log(chalk.green("\n👋 Thank you for visiting! Best of luck with your projects, and keep coding! 🚀✨"));
  process.exit();
});
