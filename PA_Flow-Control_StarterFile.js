/*
    Author: Kelsey Marison
    Date:   10/1/2026
    Purpose:Create an external JS to display loops with a for loop and create
    a form to recommend trails.
*/

/* =========================================
   GREENWAY PARK TRAIL DATA
========================================= */

const trails = [
    { name: "River Walk", difficulty: "low", time: 20 },
    { name: "Forest Loop", difficulty: "medium", time: 45 },
    { name: "Hill Summit Trail", difficulty: "high", time: 90 },
    { name: "Lake Side Path", difficulty: "low", time: 30 },
    { name: "Rock Ridge Trail", difficulty: "high", time: 75 },
    { name: "Sunset Ridge", difficulty: "medium", time: 90 },
    { name: "Mountain Vista", difficulty: "high", time: 120 },
    { name: "kelmar9517 Trail", difficulty: "low", time: 30 }
];

/* =========================================
   TODO: DISPLAY TRAILS VIA LOOP
========================================= */

const trailContainers = document.getElementById("trailContainer");
for (let i=0; i<trails.length; i++){
   trailContainers.innerHTML += `
      <article class="card">
         <h3>${trails[i].name}</h3>
         <p>Difficulty: ${trails[i].difficulty}</p>
         <p>Average Time: ${trails[i].time}</p>
      </article>
`}



/* =========================================
   TODO: FORM LOGIC
========================================= */
const form = document.getElementById("trailForm");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const pets = document.querySelector('input[name="pets"]:checked').value;
    const experience = document.getElementById("experience").value;

    let recommendation;

    if (pets === "yes" && experience === "low") {
        recommendation = "River Walk";
    }
    else if (pets === "yes" &&
            (experience === "medium" || experience === "high")) {
        recommendation = "Forest Loop";
    }
    else if (pets === "no" && experience === "low") {
        recommendation = "Lake Side Path";
    }
    else if (pets === "no" && experience === "medium") {
        recommendation = "Forest Loop";
    }
    else if (pets === "no" && experience === "high") {
        recommendation = "Rock Ridge Trail";
    }
    else {
        recommendation = "River Walk";
    }

    results.innerHTML = `
        <h2>Recommended Trail</h2>
        <p>${recommendation}</p>
    `;
});