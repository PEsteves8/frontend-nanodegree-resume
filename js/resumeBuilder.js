var bio = {
  "name" : "Paulo Esteves",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "+351919595441",
    "email" : "pauloesteves8",
    "github" : "https://github.com/pauloesteves8",
    "twitter" : "@pauloesteves8",
    "location" : "Porto, Portugal"
   },
   "welcomeMessage": "Hi, welcome to my CV!",
   "skills" : [
     "Javascript", "HTML", "CSS", "Python"
   ],
  "pictureURL" : "https://placehold.it/250x250"
};

var work = {
  "jobs" : [
    {
    "employer": "SurveyMonkey Inc.",
    "title": "Marketing Intern",
    "location": "Dublin, Ireland",
    "dates": "Feb 2015 - Aug 2015",
    "description": "Case study interviews and media projects for internal distribution"
  },
  {
    "employer": "Smartling Inc.",
    "title": "Translator (English to Portuguese(PT))",
    "location": "Valongo",
    "dates": "2013-2016",
    "description": "Translation phone and tablet apps and their websites"
  }
]
};

var education = {
  "schools": [
    {
      "name": "Faculty of Engineering of the University of Porto",
      "location": "Porto, Portugal",
      "degree": "N/A",
      "major": ["Electrical Engineering"],
      "dates": "2006-2007",
      "url": "www.fe.up.pt"
    },
    {
      "name": "School of Accounting and Administration of Porto",
      "location": "Porto, Portugal",
      "degree": "BA",
      "majors": ["Marketing"],
      "dates": "2007-2010",
      "url": "www.iscap.ipp.pt"
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro to Computer Science",
      "school": "Udacity",
      "dates": 2015,
      "url": "www.udacity.com"
    }
  ]
}


var projects = {
  "projects" : [
    {
    "title": "Portfolio Site",
    "dates": "Jan 2016",
    "images": ["https://placehold.it/250x250"],
    "description": "A simple webpage created using the boostrap framework"
  },
  {
    "title": "CV",
    "dates": "Feb 2016",
    "images": ["https://placehold.it/250x250", "https://placehold.it/250x250"],
    "description": "A CV using a page that gets loaded dynamically using Javascript and JSON"
  }
]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcome_message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPictureURL);
$("#header").append(formattedWelcome_message);

if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkills);
}

var displayWork = function() {
  for (key in work.jobs) {
    if (work.jobs.hasOwnProperty(key)) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[key].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[key].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[key].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[key].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[key].description);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

displayWork();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

function inName() {
    var name = bio.name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

projects.display = function() {
  for (projectKey in projects.projects) {
    if (projects.projects.hasOwnProperty(key)) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectKey].title);
      $(".project-entry:last").append(formattedTitle);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[projectKey].dates);
      $(".project-entry:last").append(formattedDates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectKey].description);
      $(".project-entry:last").append(formattedDescription);
      if (projects.projects[projectKey].images.length > 0) {
        for (imageKey in projects.projects[projectKey].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[projectKey].images[imageKey]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
}
projects.display()

$("#mapDiv").append(googleMap);
