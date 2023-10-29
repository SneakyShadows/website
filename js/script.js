window.addEventListener('scroll', function() {
    var header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})
const jobs = [
    {
        title:"Software Developer",
        image:"/static/software-development.png",
        details:"Responsible for designing, developing and maintaining software applications.",
        openPositions:"1",
        link:"#",
    },
    {
        title:"Data Analyst",
        image:"/static/data-scientist.png",
        details:"Responsible for management, maintenance and analysis of data. Also include database management and server analysis.",
        openPositions:"1",
        link:"#",
    },
    {
        title:"Python Developer",
        image:"/static/python.png",
        details:"Responsible for designing, developing and maintaining python programs and applications.",
        openPositions:"3",
        link:"#",
    },
    {
        title:"Website Developer",
        image:"/static/webDeveloper.png",
        details:"Responsible for designing and maintaining website and web applications.",
        openPositions:"2",
        link:"#",
    },
    {
        title:"Website Developer",
        image:"/static/webDeveloper.png",
        details:"Responsible for designing and maintaining website and web applications.",
        openPositions:"2",
        link:"#",
    },
    {
        title:"Website Developer",
        image:"/static/webDeveloper.png",
        details:"Responsible for designing and maintaining website and web applications.",
        openPositions:"2",
        link:"#",
    },
    
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobsSearch = document.querySelector(".jobs-list-container .job-search");

if(jobs.length == 1){
    jobsHeading.innerHTML =`${jobs.length} Job`;
}else{
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createJobListingCards = () => {
    jobs.forEach((job) =>{
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");

        let image = document.createElement("img");
        image.src = job.image;

        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");

        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");

        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");

        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
        if (job.openPositions == 1){
            openPositions.innerHTML = `${job.openPositions} Open Position`;
        }else{
            openPositions.innerHTML = `${job.openPositions} Open Positions`;
        } 

        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);

        jobsContainer.appendChild(jobCard);

    });
};
createJobListingCards();

// jobsSearch.addEventListener("input", (e) => {
//     console.log(e.target.value);
// });