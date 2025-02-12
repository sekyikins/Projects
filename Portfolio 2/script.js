document.addEventListener('DOMContentLoaded', function() {
    // Select all project titles
    const projectTitles = document.querySelectorAll('.project-title');

    // Add click event listener to each project title
    projectTitles.forEach(title => {
        title.addEventListener('click', function() {
            // Toggle visibility of project details
            const details = this.nextElementSibling;
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
    });
});
