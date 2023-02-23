const csv = require("csvtojson");
const { writeFileSync } = require("fs");

const csvFilePath = "./data/projects.csv";

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    const projects = jsonObj;

    const formattedProjects = projects.map((project) => {
      let formattedProject = {};
      for (const [key, value] of Object.entries(project)) {
        if (value !== "") {
          formattedProject[key] = value;
        }
      }
      if (formattedProject.industry) {
        formattedProject.industry = formattedProject.industry.split(", ");
      }
      return formattedProject;
    });

    const stringify = JSON.stringify(formattedProjects, null, 2);

    const data = `import ProjectType from "../src/types/ProjectType";

export const projects: ProjectType[] = ${stringify}`;

    writeFileSync("./data/projects.ts", data);
    console.log("Done");
  });
