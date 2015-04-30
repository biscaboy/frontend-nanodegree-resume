var bio = {
	"name"     : "David J. Dickinson",
	"role"     : "Web Developer",
	"contacts" : {
		"mobile"   : "480-600-2619",
		"email"    : "djdlearn@gmail.com",
		"twitter"  : "@djdickins",
		"github"   : "biscaboy",
		"blogName" : "Musings...",
		"blogURL"  : "http://www.davidjdickinson.com/category/news/"
	},
	"picURL"   : "images/photo.jpg",
	"welcome"  : "Coding Solutions for Your Web Ideas",
	"skills"   : ["Fun loving", 
				  "Great collaborator", 
				  "HTML", 
				  "Javascript", 
				  "JQuery", 
				  "SQL", 
				  "Java"]
};

var work = {
	"jobs" : [
		{
			"title" : "Freelance Web Developer",
			"employer" : "Contract",
			"dates" : "2005 - 2015",
			"description" :  "Customized application software and improved application performance for AppointmentJournal.com (PHP/MySQL/UNIX scripting). Developed AppointmentJournal.com marketing website. Developed and maintained client websites."
		},
		{
			"title" : "Consultant",
			"employer" : "Apelon, Inc.",
			"dates" : "2004",
			"description" :  "Developed custom software for the Veteran’s Administration, Enterprise Runtime Terminology System."
		},
		{
			"title" : "Software Engineer - Team Lead",
			"employer" : "Apelon, Inc.",
			"dates" : "2001-2004",
			"description" :  "Project and technical team lead for Apelon’s flagship product, Distributed Terminology Services (DTS). Project and technical lead of New Term Rapid Turnaround, a web-based custom solution for the Veteran’s Administration. Upgraded core components of Apelon’s Context Based Indexing and Retrieval (CBIR) product including the browser-based Index Reviewer and a browser-based search application for marketing demonstrations."
		},
		{
			"title" : "Sr. Consultant",
			"employer" : "IIS, Inc.",
			"dates" : "2000 - 2001",
			"description" :  " Architect of a B2B web site for Honeywell’s Business, Regional and General Aviation product and service offerings (www.myflite.com). Technology: JSP/Java/XML/SSL/Entigo/iPlanet Enterprise Web Server/ Oracle.  Developed a B2C web site for Gold Star Nurseries, New England Nursery chain (www.seasons-four.com). Completed requirement analysis, created design and implemented database/business logic. Technology: ASP/COM/IIS/SQL Server.  Led a team of eight developers to create a knowledge-sharing solution containing over 400 separate components delivered to the Unisys Corporation. Technology: XML/JSP/Java/Netscape App. Server/SQL Server.  Developed core system components of an enterprise-wide task scheduling system for the Action Performance Companies, the leading manufacturer and marketer of NASCAR memorabilia. System included over 300 Java classes and interfaces. Technology: JavaScript/JSP/Java/IBM WebSphere App. Server/DB2."
		},
		{
			"title" : "Programmer Analyst",
			"employer" : "Arizona Public Service",
			"dates" : "1997 - 2000",
			"description" :  "• Upgraded APS’s ERP financial package, GEAC Smartstream for Y2K compliance.  Led a Y2K project replacing a mainframe accounts payable system with a customized distributed system processing 80,000 documents a year. Eliminated all AP system errors by implementing solutions using Sybase SQL, C and UNIX scripts.Updated asset management system that tracked $6 billion in assets by gathering and implementing business logic. Integrated fleet management and accounting systems to allow business leaders to justify their organization’s existence."
		}
	]

};

var education = {
	"schools" : [
		{
			"name" : "Arizona State University",
			"city" : "Tempe, AZ",
			"degree" : "MS",
			"major" : ["Information Management"],
			"dates"  : "1997",
			"url"  : "https://wpcarey.asu.edu/masters-programs/information-technology"
		},
		{
			"name" : "Ambassador University",
			"city" : "Big Sandy, TX",
			"degree" : "BS",
			"major" : ["Business Administration"],
			"dates"  : "1996",
			"url"  : "http://www.ambassador.edu/"			
		},
		{
			"name" : "Scottsdale Community College",
			"city" : "Scottsdale, AZ",
			"degree" : "AA",
			"major" : ["Theatre"],
			"dates"  : "2006",
			"url"  : "http://www.scottsdalecc.edu/"			
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Nano-Degree",
			"school" : "Udacity",
			"dates"  : "2015",
			"url"  : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"			
		},
		{
			"title" : "Into to Databases",
			"school" : "Stanford University",
			"dates"  : "2013",
			"url"  : "https://lagunita.stanford.edu/courses/DB/2014/SelfPaced/about"			
		}
	]
};

var projects = {
	"project" : [
		{
			"title" : "Online Resume",
			"dates" : "2015",
			"description" : "An interactive online resume",
			"images" : []
 		},
		{
			"title" : "Portfolio",
			"dates" : "2015",
			"description" : "Personal project portfolio",
			"images" : []
		}
	]
} 

var formattedName    = HTMLheaderName.replace("%data%", bio.name);
var formattedRole    = HTMLheaderRole.replace("%data%", bio.role);
var formattedMoblie  = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail   = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub  = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog    = HTMLblog.replace("%data%", bio.contacts.blogURL)
//var formattedBlog    = formattedBlog.replace("%data%", bio.blogName);
var formattedPic     = HTMLbioPic.replace("%data%", bio.picURL);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills   = new Array(bio.skills.length);

// initialize and populate skills array
for (var i = 0; i < bio.skills.length; i++){
	
}

// insert header section
$("#header").append(formattedWelcome);
$("#header").append(formattedPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedMoblie);
$("#header").append(formattedEmail);
$("#header").append(formattedTwitter);
$("#header").append(formattedGithub);
$("#header").append(formattedBlog);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills){
		$("#skills").prepend(HTMLskills.replace("%data%", bio.skills[skill]));
	}
}

if (work.jobs.length > 0){
	
	for (job in work.jobs){
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedJob = formattedEmployer + formattedTitle + formattedJobDates + formattedJobDescription;
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedJob);

	}
}

var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';




