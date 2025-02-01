document.addEventListener("DOMContentLoaded", () => {
    const jobForm = document.getElementById("jobForm");

    jobForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newJob = {
            title: document.getElementById("title").value,
            company: document.getElementById("company").value,
            location: document.getElementById("location").value,
            date: document.getElementById("date").value,
            url: document.getElementById("url").value
        };

        // Get existing jobs from localStorage or initialize empty array
        let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

        // Add new job
        jobs.push(newJob);

        // Save updated jobs list to localStorage
        localStorage.setItem("jobs", JSON.stringify(jobs));

        alert("Job added successfully!");

        // Reset form
        jobForm.reset();
    });
});
