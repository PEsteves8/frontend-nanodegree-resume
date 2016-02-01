var bio = {
  "name" : "Paulo Esteves",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "+351919595441",
    "email" : "pauloesteves8@gmail.com",
    "github" : "https://github.com/PEsteves8",
    //"twitter" : "@pauloesteves8",
    "location" : "Porto, Portugal"
   },
   "welcomeMessage": "Welcome! I built this CV as a way to practice using jQuery and JSON to keep the HTML uploaded. It was originally one of Udacity's projects for their Front-End Nanodegree, but it sure does a fine job as an actual CV! Feel free to contact me.",
   "skills" : [
     "Javascript", "HTML", "CSS", "Python", "Video Production",
      "Adobe Premiere Pro", "Adobe After Effects"
   ],
  "pictureURL" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/070/049/276f628.jpg"
};

var work = {
  "jobs" : [
    {
    "employer": "SurveyMonkey Inc.",
    "title": "Marketing Intern",
    "location": "Dublin, Ireland",
    "dates": "Feb 2015 - Aug 2015",
    "description": "During my stay at SurveyMonkey Inc. (part of the <a href='http://www.portugalglobal.pt/PT/InovContacto/Paginas/AboutInovContacto.aspx' class='icontacto' target='_blank'>Inov Contacto</a> internship program) I had a number of different tasks:<br><br>- Interviewed B2B customers to help with the development of case studies for promotional purposes.<br>- Developed animations featuring fictionalized sales processes to be presented internally among sales teams.<br>- Translated various documents (PT to EN).<br>- Gathered contacts of key employees of potential customers for outbound initiatives using Linkedin and Datanyze.<br>- Assisted the financial team."
  },
  {
    "employer": "Smartling Inc.",
    "title": "Translator (English to Portuguese(PT)",
    "location": "Online",
    "dates": "2013-2016",
    "description": "Smartling is a fast and easy way for people to translate and localize their websites and apps.<br>For the past few years, I've been working as one of the English to Portuguese (PT) translators."
  },
  {
    "employer": "Freelancer",
    "title": "Video Producer",
    "location": "Porto",
    "dates": "2011-2016",
    "description": "I occasionally work as a freelance video producer, doing both corporate videos and content for TV and web."
  }
]
};

var projects = {
  "projects" : [
    {
    "title": "Portfolio Site",
    "dates": "Jan 2016",
    "images": [],
    "description": "A simple portfolio webpage created using the boostrap framework"
  },
  {
    "title": "CV",
    "dates": "Feb 2016",
    "images": [],
    "description": "The page you're visiting right now. The page gets loaded dynamically using Javascript and JSON"
  }
]
}

var education = {
  "schools": [
    {
      "name": "School of Accounting and Administration of Porto",
      "location": "Porto, Portugal",
      "degree": "BA - 3 year degree",
      "majors": ["Marketing"],
      "dates": "2007-2010",
      "url": "http://iscap.ipp.pt/"
    },
    {
      "name": "Faculty of Engineering of the University of Porto",
      "location": "Porto, Portugal",
      "degree": "N/A - 1st year attendance",
      "majors": ["Electrical Engineering"],
      "dates": "2006-2007",
      "url": "https://sigarra.up.pt/feup/pt/web_page.inicial"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Nanodegree (Non-Paid Version)",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Intro to Computer Science",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
    },
    {
      "title": "HTML, CSS and Javascript",
      "school": "Coursera - The Hong Kong University of Science and Technology",
      "dates": 2015,
      "url": "https://www.udacity.com/course/programming-languages--cs262"
    },
    {
      "title": "Computer Science (multiple courses): Algorithms, Cryptography, Information Theory ",
      "school": "Khan Academy",
      "dates": 2015,
      "url": "https://www.khanacademy.org/computing/computer-science"
    },
    {
      "title": "Programming (multiple courses): HTML, CSS, Javascript and jQuery; Intro to SQL; JS: Games and Visualizations; JS: Natural Simulations ",
      "school": "Khan Academy",
      "dates": 2014,
      "url": "https://www.khanacademy.org/computing/computer-programming"
    }

  ]
}




bio.display = function() {

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcome_message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);

if (bio.contacts.twitter) {
$("#topContacts").append(formattedTwitter);
}
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPictureURL);
$("#header").append(formattedWelcome_message);


$("#header").append(HTMLskillsStart);
for (key in bio.skills) {
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[key]);
  $("#skills").append(formattedSkills);
}

// Code to simply add the basic contact info in the footer
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);

}

work.display = function() {
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


education.display = function() {
  for (key in education.schools) {
    if (education.schools.hasOwnProperty(key)) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[key].name).replace("#", education.schools[key].url);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[key].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[key].dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[key].location);

      $(".education-entry:last").append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      if (education.schools[key].majors.length > 0) {
        for (majorKey in education.schools[key].majors) {
          var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[key].majors[majorKey]);
          $(".education-entry:last").append(formattedMajor);
        }
      }




    }
  }

if (education.onlineCourses.length > 0) {
  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);

}

  for (key in education.onlineCourses) {

    if (education.onlineCourses.hasOwnProperty(key)) {


      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[key].title).replace("#", education.onlineCourses[key].url);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[key].school);
      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[key].dates);
      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[key].url);
      $(".education-entry:last").append(formattedTitle + formattedSchool);
      $(".education-entry:last").append(formattedDates);
      //$(".education-entry:last").append(formattedURL);


    }
  }

}

projects.display = function() {
  for (key in projects.projects) {
    if (projects.projects.hasOwnProperty(key)) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
      $(".project-entry:last").append(formattedTitle);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[key].dates);
      $(".project-entry:last").append(formattedDates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);
      $(".project-entry:last").append(formattedDescription);
      if (projects.projects[key].images.length > 0) {
        for (imageKey in projects.projects[key].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[key].images[imageKey]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
}

bio.display();
work.display();
education.display()
projects.display()

// Code to add the "Where I worked" map
$("#mapDiv").append(googleMap);



// Part of one of the quizzes, this code logs the position of each mouse click
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

// Part of one of the quizzes, this code adds a button that changes de capitalization
// of the name of the CV holder
/* $("#main").append(internationalizeButton);

function inName() {
    var name = bio.name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
*/
