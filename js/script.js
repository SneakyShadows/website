window.addEventListener('scroll', function() {
    var header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})
const jobs = [
    {
        title:"Software Developer",
        image:"/static/software-development.png",
        details:"Responsible for designing, developing and maintaining software applications.",
        openPositions:"2",
        link:"#",
    },
    {
        title:"Data Analyst",
        image:"/static/data-scientist.png",
        details:"Responsible for management, maintenance and analysis of data. Also include database management and server analysis.",
        openPositions:"2",
        link:"#",
    },
    {
        title:"Python Developer",
        image:"/static/python.png",
        details:"Responsible for designing, developing and maintaining python programs and applications.",
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
    {
        title:"Website Developer",
        image:"/static/webDeveloper.png",
        details:"Responsible for designing and maintaining website and web applications.",
        openPositions:"2",
        link:"#",
    },
    
];

const jobsHeading = document.querySelector(".jobs-list-container .jobs-heading");
if(jobs.length == 1){
    jobsHeading.innerHTML = `${jobs.length} Job`;
}else{
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
}