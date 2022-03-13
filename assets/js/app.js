// job description
let jobInfo = document.querySelectorAll(".job-card");

for (let i = 0; i < jobInfo.length; i++)
  jobInfo[i].addEventListener("click", handleJobSubmit);

function handleJobSubmit(event) {
  console.log("Fuck You");
  return true;
}

// project description
let projInfo = document.querySelectorAll(".proj-card");

for (let i = 0; i < projInfo.length; i++)
  projInfo[i].addEventListener("click", handleProjSubmit);

function handleProjSubmit(event) {
  console.log("Fuck You2");
  return true;
}
