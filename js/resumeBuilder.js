// Create objects for each resume section: Work, Projects, Bio, and Education.

var work = {
  "jobs" : [
    {
      "employer" : "Corwin Beverage",
      "title" : "Senior Graphic Designer",
      "location" : "Ridgefield, WA",
      "dates" : "2013 – present",
      "description" : "Creative lead on internal design team.",
      "url" : "http://www.corwinbevco.com/"
    },
    {
      "employer" : "Formations Design Group",
      "title" : "Graphic Designer",
      "location" : "Vancouver, WA",
      "dates" : "2007 - 2012",
      "description" : "Graphic design and web development in small, versatile design agency.",
      "url" : "http://www.formationsdesign.com/"
    },
    {
      "employer" : "Premier Graphics",
      "title" : "Prepress Technician",
      "location" : "Bellingham, WA",
      "dates" : "2001 - 2007",
      "description" : "Prepare design files for accurate print output. Preflight, proofing, and last-minute edits.",
      "url" : "http://www.premiergraphics.biz/"
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Backwoods Brewery",
      "dates" : "2014 - 2016",
      "description" : "Package design & branding",
      "images" : [
        "images/backwoods-thumbnail.jpg"
      ],
      "url" : "http://www.gregdavenportdesign.com/#/backwoods/"
    },
    {
      "title" : "Terminal Gravity",
      "dates" : "2016",
      "description" : "Package design",
      "images" : [
        "images/terminal-gravity-thumb.jpg"
      ],
      "url" : "http://www.gregdavenportdesign.com/#/terminal-gravity-brewing/"

    },
    {
      "title" : "Kendall's Pioneer Distributing",
      "dates" : "2014",
      "description" : "Branding & logo design",
      "images" : [
        "images/kendalls-thumb.jpg"
      ],
      "url" : "http://www.gregdavenportdesign.com/#/kendalls/"
    }
  ]
};

var bio = {
  "name" : "Greg Davenport",
  "role" : "Graphic Designer",
  "welcomeMesssage" : "Let's make cool stuff together!",
  "biopic" : "images/headshot.jpg",
  "contacts" : {
    "mobile" : "360-869-6933",
    "email" : "gregdavenport13@gmail.com",
    "github" : "instantMash",
    "twitter" : "instantMash",
    "location" : "Ridgefield, WA"
  },
  "skills" : [
    "Graphic design",
    "Print production",
    "Front-end web development",
    "Adobe Creative Suite"
  ]
};

var education = {
  "schools" : [
    {
      "name" : "Gordon College",
      "location" : "Wenham, MA",
      "degree" : "BA",
      "dates" : "1995 - 2000",
      "url" : "http://i.giphy.com/cxv9YdPDsAMKs.gif",
      "majors" : [
        "Fine Art/Painting"
      ]
    },
    {
      "name" : "Whatcom Community College",
      "location" : "Bellingham, WA",
      "degree" : "AA",
      "dates" : "2004 - 2006",
      "url" : "http://whatcom.edu/",
      "majors" : [
        "Graphic Design"
      ]
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-end Nanodegree",
      "school" : "Udacity",
      "dates" : "2016 - 2017",
      "url" : "www.udacity.com"
    }
  ]
};

// Create the display functions for each object. Functions are encapsulated within their respective objects using dot notation.

work.display = function(){

  for(i=0; i < work.jobs.length; i++) {
    // Add the container div for each job
    $("#workExperience").append(HTMLworkStart);

    // Add Employer and Title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace('#', work.jobs[i].url);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

    // Concatentate Employer and Title
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    // Not sure why ":last" is required. But it doesn't work without it.
    $(".work-entry:last").append(formattedEmployerTitle);

    // Add dates
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);

    // Add description
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);

  }

}; // End of work.display function

projects.display = function(){

  for(i=0; i < projects.projects.length; i++){
    $('#projects').append(HTMLprojectStart);

    var formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title).replace('#', projects.projects[i].url);

    var formattedHTMLprojectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
    var formattedHTMLprojectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);

    $('.project-entry:last').append(formattedHTMLprojectTitle, formattedHTMLprojectDates,  formattedHTMLprojectDescription);

    // The images property is an array, so we use the forEach method
    projects.projects[i].images.forEach(function(e) {
      var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", e);
      $(".project-entry:last").append(formattedHTMLprojectImage);
    });
  }
}; // End of projects.display function

bio.display = function(){

  // Add name and role
  var formattedHeaderName = HTMLheaderName.replace('%data%', bio.name);
  var formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMesssage); // I changed the order of the welcome message to match my new design.

  $('#header').prepend(formattedHeaderName, formattedHeaderRole, formattedHTMLwelcomeMsg);


  // Add skillz.
  $(HTMLskillsStart).insertBefore('#topContacts'); // Just grabbing a piece of required HTML from the helper file.

  // Loop through skills and append them to the #skills list.
  for (i=0; i < bio.skills.length; i++) {
    formattedHTMLSkills = HTMLskills.replace('%data%', bio.skills[i]);
    $('#skills').append(formattedHTMLSkills);
  }

  // Add contacts
    formattedHTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobile),
    formattedHTMLemail = HTMLemail.replace('%data%', bio.contacts.email),
    formattedHTMLtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter),
    formattedHTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github),
    formattedHTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location)

    $('#topContacts, #footerContacts').append(formattedHTMLmobile, formattedHTMLemail, formattedHTMLtwitter, formattedHTMLgithub, formattedHTMLlocation); // Add contacts to header AND footer



  // Add picture
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $('#header').append(formattedBioPic);

}; // End of the bio.display function.

education.display = function(){
  for (i=0; i < education.schools.length; i++){
    $('#education').append(HTMLschoolStart);

    var formattedHTMLschoolName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
    var formattedHTMLschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
    var schoolNameAndDegree = formattedHTMLschoolName + formattedHTMLschoolDegree;
    var formattedHTMLschoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
    var formattedHTMLschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
    $('.education-entry:last').append(schoolNameAndDegree, formattedHTMLschoolDates, formattedHTMLschoolLocation);

    // The majors property is an array, so we use the forEach method
    education.schools[i].majors.forEach(function(e) {
      var formattedHTMLschoolMajor = HTMLschoolMajor.replace('%data%', e);
      $('.education-entry:last').append(formattedHTMLschoolMajor);
    });
  }

// Online classes
    $('#education').append(HTMLonlineClasses);

    for(i=0; i < education.onlineCourses.length; i++){
      $('#education').append(HTMLschoolStart);

      var formattedHTMLonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);

      var formattedHTMLonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);

      var edTitleAndSchool = formattedHTMLonlineTitle + formattedHTMLonlineSchool;

      edTitleAndSchool = edTitleAndSchool.replace('#', 'https://' + education.onlineCourses[i].url);

      var formattedHTMLonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);

      var formattedHTMLonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url).replace('#', 'https://' + education.onlineCourses[i].url);

      $('.education-entry:last').append(edTitleAndSchool, formattedHTMLonlineDates, formattedHTMLonlineURL);
    }
}; // End of education.display function

// Run the  display functions
bio.display();
work.display();
projects.display();
education.display();

// Add Google map
$('#mapDiv').append(googleMap);
