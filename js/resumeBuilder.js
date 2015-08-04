var bio = {
	"name"     : "David J. Dickinson",
	"role"     : "Developer - Analyst - Artist",
	"contacts" : {
		"mobile"   : "480-600-2619",
		"email"    : "djdlearn@gmail.com",
		"github"   : "biscaboy",
		"twitter"  : "@davidjdickinson",
		"location" : "Scottsdale, AZ"
	},
	"welcomeMessage"  : "Always learning, always growing!",
	"skills"   : ["Photoshop", 
				  "HTML", 
				  "Javascript", 
				  "JQuery", 
				  "SQL", 
				  "Java"],
	"biopic"   : "images/headshot.png",
};

/* modifyHeader - adds html before the header, moves #topContacts
 * In an effort not to modify index.html for the assignment I added this method 
 * to insert html to display a custom header. 
 */
bio.modifyHeader = function () {
	$("#topContacts").remove();
	$(HTMLdavidHeader).insertBefore("#header");
	$("#header").toggleClass("center-content");
};

/* bio.display - display bio JSON data 
 * Displays info about me into the header section adds custom header.
 */
bio.display = function() {
	// add html before the header for a custom look 
	this.modifyHeader();

	// add list of skills to the header.
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills){
			$("#skills").prepend(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}
	
	// format bio elements for display
	var formattedName    = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole    = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMoblie  = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail   = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub  = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedPic     = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	// insert bio elements into the header section
	$("#topTitle").prepend(formattedName + formattedRole);
	$("#topHeader").prepend(formattedPic);
	$("#topContactsList").append(formattedLocation);
	$("#topContactsListLinks").append(
		formattedMoblie + 
		formattedEmail + 
		formattedTwitter + 
		formattedGithub);

	// insert the welcome message into the header
	$("#header").prepend(formattedWelcome);
};

var work = {
	"jobs" : [
		{
			"title" : "Freelance Web Developer",
			"employer" : "Contract",
			"location": "Scottsdale, AZ",
			"dates" : "2005 - 2015",
			"description" :  "Website design, website development, WordPress template customization, site administration. Customized application software and improved application performance for AppointmentJournal.com (PHP/MySQL/UNIX scripting). Developed AppointmentJournal.com marketing website. Developed and maintained client websites."
		},
		{
			"title" : "Consultant",
			"employer" : "Apelon, Inc.",
			"location": "Scottsdale, AZ",
			"dates" : "2004",
			"description" :  "Developed custom software for the Veteran’s Administration, Enterprise Runtime Terminology System."
		},
		{
			"title" : "Software Engineer - Team Lead",
			"employer" : "Apelon, Inc.",
			"location": "Ridgefield, CT",
			"dates" : "2001-2004",
			"description" :  "Project and technical team lead for Apelon’s flagship product, Distributed Terminology Services (DTS). Project and technical lead of New Term Rapid Turnaround, a web-based custom solution for the Veteran’s Administration. Upgraded core components of Apelon’s Context Based Indexing and Retrieval (CBIR) product including the browser-based Index Reviewer and a browser-based search application for marketing demonstrations."
		},
		{
			"title" : "Sr. Consultant",
			"employer" : "IIS, Inc.",
			"location": "Tempe, AZ",
			"dates" : "2000 - 2001",
			"description" :  " Architect of a B2B web site for Honeywell’s Business, Regional and General Aviation product and service offerings (www.myflite.com). Technology: JSP/Java/XML/SSL/Entigo/iPlanet Enterprise Web Server/ Oracle.  Developed a B2C web site for Gold Star Nurseries, New England Nursery chain (www.seasons-four.com). Completed requirement analysis, created design and implemented database/business logic. Technology: ASP/COM/IIS/SQL Server.  Led a team of eight developers to create a knowledge-sharing solution containing over 400 separate components delivered to the Unisys Corporation. Technology: XML/JSP/Java/Netscape App. Server/SQL Server.  Developed core system components of an enterprise-wide task scheduling system for the Action Performance Companies, the leading manufacturer and marketer of NASCAR memorabilia. System included over 300 Java classes and interfaces. Technology: JavaScript/JSP/Java/IBM WebSphere App. Server/DB2."
		},
		{
			"title" : "Programmer Analyst",
			"employer" : "Arizona Public Service",
			"location": "Phoenix, AZ",
			"dates" : "1997 - 2000",
			"description" :  "Upgraded APS’s ERP financial package, GEAC Smartstream for Y2K compliance.  Led a Y2K project replacing a mainframe accounts payable system with a customized distributed system processing 80,000 documents a year. Eliminated all AP system errors by implementing solutions using Sybase SQL, C and UNIX scripts.Updated asset management system that tracked $6 billion in assets by gathering and implementing business logic. Integrated fleet management and accounting systems to allow business leaders to justify their organization’s existence."
		}
	]

};

work.display = function () {
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
};

var education = {
	"schools" : [
		{
			"name" : "Arizona State University",
			"location" : "Tempe, AZ",
			"degree" : "MS",
			"major" : ["Information Management"],
			"dates"  : "1997",
			"url"  : "https://wpcarey.asu.edu/masters-programs/information-technology"
		},
		{
			"name" : "Ambassador University",
			"location" : "Big Sandy, TX",
			"degree" : "BS",
			"major" : ["Business Administration"],
			"dates"  : "1996",
			"url"  : "http://www.ambassador.edu/"			
		},
		{
			"name" : "Scottsdale Community College",
			"location" : "Scottsdale, AZ",
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

education.display = function() {
	if (education.schools.length > 0){
		
		for (s in education.schools) {
			var formattedName = HTMLschoolName.replace("%data%", education.schools[s].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[s].major);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
			var formattedURL = HTMLschoolLocation.replace("%data%", education.schools[s].url);
			var formattedSchool = formattedName +
								  formattedDegree +
								  formattedMajor + 
								  formattedDates +
								  formattedURL;
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedSchool);
		}
	}

	if (education.onlineCourses.length > 0){
			var onlineClassesFormattedHTML = HTMLonlineClasses;
			for (oc in education.onlineCourses) {
				var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[oc].title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[oc].school);
				var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[oc].dates);
				var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[oc].url);
				var formattedSchool = formattedTitle +
									  formattedSchool +
									  formattedDates +
									  formattedURL;
				
				onlineClassesFormattedHTML += formattedSchool;
			}
			$(".education-entry:last").append(onlineClassesFormattedHTML);
		}
};

var projects = {
	"project" : [
		{
			"title" : "Online Resume",
			"dates" : "2015",
			"description" : "An interactive online resume built on HTML/CSS/Javascript and JQuery.  Hint: it's the resume you're looking at right now.",
			"images" : []
 		},
		{
			"title" : "Portfolio",
			"dates" : "2015",
			"description" : "Personal project portfolio that was developed during the first portion of the Front End Web Developers Nano-Degree.  You can down load mine from my GitHub at biscaboy.",
			"images" : []
		}
	]
};

projects.display = function (){
	if (projects.project.length > 0){
	
		for (p in projects.project){
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[p].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[p].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[p].description);
			
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription);

			if (projects.project[p].length > 0){
				for (img in projects.project[p].images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[p].images[img]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}
};

/* display JSON data inserting it into index.html appending a map*/
function displayJSONwithMap() {
	bio.display();
	work.display();
	projects.display();
	education.display();
	$("#mapDiv").append(googleMap);
}

$(displayJSONwithMap());



