document.addEventListener("DOMContentLoaded", function () {
    const jobContainer = document.getElementById("jobContainer");

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
        displayJobs(jobContainer, jobs);
    } else {
        console.error("Job data not loaded!");
    }
});
