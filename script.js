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

    if (typeof jobs !== "undefined") {
        const firstThreeJobs = jobs.slice(0, 2); // First 3 jobs
        const remainingJobs = jobs.slice(2); // Rest of the jobs

        // Display first 3 jobs before the first ad banner
        displayJobs(jobContainer, firstThreeJobs);

        // Display the remaining jobs in `moreJobsContainer`
        displayJobs(moreJobsContainer, remainingJobs);
    } else {
        console.error("Job data not loaded!");
    }
});
