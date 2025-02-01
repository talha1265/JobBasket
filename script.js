document.addEventListener("DOMContentLoaded", function () {
    const jobContainer = document.getElementById("jobContainer");
    const moreJobsContainer = document.getElementById("moreJobs");

    function displayJobs(container, jobList) {
        container.innerHTML = ""; // Clear previous jobs
        jobList.forEach(job => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("job-card");
            jobCard.innerHTML = `
                <div>
                    <h3><a href="${job.url}" target="_blank">${job.title}</a></h3>
                    <p>${job.company} - ${job.location}</p>
                    <p><strong>Posted on:</strong> ${job.date}</p>
                </div>
                <button class="apply-btn" onclick="window.open('${job.url}', '_blank')">Apply Now</button>
            `;
            container.appendChild(jobCard);
        });
    }

    // Ensure `jobs` is loaded from `data.js`
    if (typeof jobs !== "undefined") {
        const firstThreeJobs = jobs.slice(0, 3); // First 3 jobs
        const remainingJobs = jobs.slice(3); // Rest of the jobs

        // Display first 3 jobs in `jobContainer`
        displayJobs(jobContainer, firstThreeJobs);

        // Display the remaining jobs in `moreJobsContainer`
        displayJobs(moreJobsContainer, remainingJobs);
    } else {
        console.error("Job data not loaded!");
    }
});
