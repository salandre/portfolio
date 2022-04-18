document.addEventListener('DOMContentLoaded', () => {
    for(let i = 1; i < 10; i++) {
        const projet = document.querySelector(".projet" + i);
        projet.addEventListener("click", function(){ showProject(i); } );
    }
});

function showProject(numProject) {
    const resume = document.querySelector("#resume" + numProject)
    resume.style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
    resume.addEventListener("click", function(){ document.querySelector('body').style.overflow = 'visible'; resume.style.display = 'none'; } );
}