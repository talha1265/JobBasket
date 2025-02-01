document.addEventListener("DOMContentLoaded", () => {
    const jobContainer = document.getElementById("jobContainer");

    // Load jobs from localStorage
    function getStoredJobs() {
        return JSON.parse(localStorage.getItem("jobs")) || [];
    }

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

    // Load jobs when page loads
    displayJobs(jobContainer, getStoredJobs());
});
