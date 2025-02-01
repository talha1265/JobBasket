document.addEventListener("DOMContentLoaded", async () => {
    const jobContainer = document.getElementById("jobContainer");

    // Load job data from external file
    const loadJobs = async () => {
        try {
            const response = await fetch("data.js");
            const text = await response.text();
            const jobs = eval(text); // Evaluate the script content as JavaScript

            displayJobs(jobContainer, jobs);
        } catch (error) {
            console.error("Error loading jobs:", error);
        }
    };

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
    await loadJobs();
});
