// Create objects for each resume section: Work, Projects, Bio, and Education.

var work = {
  "jobs" : [
    {
      "employer" : "Corwin Beverage",
      "title" : "Senior Graphic Designer",
      "location" : "Ridgefield, WA",
      "dates" : "2013 - present",
      "description" : "Creative lead on internal design team."
    },
    {
      "employer" : "Formations Design Group",
      "title" : "Graphic Designer",
      "location" : "Vancouver, WA",
      "dates" : "2007 - 2012",
      "description" : "Graphic design and web development in small, versatile design agency."
    },
    {
      "employer" : "Premier Graphics",
      "title" : "Prepress Technician",
      "location" : "Bellingham, WA",
      "dates" : "2001 - 2007",
      "description" : "Prepare design files for accurate print output. Preflight, proofing, and last-minute edits."
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
      ]
    },
    {
      "title" : "Terminal Gravity",
      "dates" : "2016",
      "description" : "Package design",
      "images" : [
        "images/terminal-gravity-thumb.jpg",
      ]
    },
    {
      "title" : "Kendall's Pioneer Distributing",
      "dates" : "2014",
      "description" : "Branding & logo design",
      "images" : [
        "images/kendalls-thumb.jpg"
      ]
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
    "twitter" : " ",
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
      "url" : " ",
      "majors" : [
        "Fine Art/Painting"
      ]
    },
    {
      "name" : "Whatcom Community College",
      "location" : "Bellinghame, WA",
      "degree" : "AA",
      "dates" : "2004 - 2006",
      "url" : " ",
      "major" : [
        "Graphic Design"
      ]
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-end Nanodegree",
      "school" : "Udacity",
      "dates" : "2016 - 2017",
      "url" : "udacity.com"
    }
  ]
};

// Create the display functions for each object. Functions are encapsulated within their respective objects using dot notation.

work.display = function(){

  for(i=0; i < work.jobs.length; i++) {
    // Add the container div for each job
    $("#workExperience").append(HTMLworkStart);

    // Add Employer and Title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
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

  };

};




projects.display = function(){

  for(i=0; i < projects.projects.length; i++){
    $('#projects').append(HTMLprojectStart);

    var formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
    var formattedHTMLprojectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
    var formattedHTMLprojectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);

    $('.project-entry:last').append(formattedHTMLprojectTitle, formattedHTMLprojectDates,  formattedHTMLprojectDescription);

    // The images property is an array, so we use the forEach method
    projects.projects[i].images.forEach(function(img) {
      var image = HTMLprojectImage.replace("%data%", img);
      $(".project-entry:last").append(image);
    });

  };

};




bio.display = function(){

  // Add name and role
  var formattedHeaderName = HTMLheaderName.replace('%data%', bio.name);
  var formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.role);

  $('#header').prepend(formattedHeaderName, formattedHeaderRole);

  // Add contact info.
  // I put the formatted contact items into an array so we can append them all at once in the loop below.
  var contactArray = [
    formattedHTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobile),
    formattedHTMLemail = HTMLemail.replace('%data%', bio.contacts.email),
    formattedHTMLtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter),
    formattedHTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github),
    formattedHTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location)
  ]

  for (i=0; i < contactArray.length; i++) {
    $('#topContacts').append(contactArray[i]);
  }

  // Add picture and welcome messsage.
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMesssage);

  $('#header').append(formattedBioPic, formattedHTMLwelcomeMsg);

  // Add skillz.
  $('#header').append(HTMLskillsStart); // Just grabbing a piece of required HTML from the helper file.

  // Loop through skills and append them to the #skills list.
  for (i=0; i < bio.skills.length; i++) {
    formattedHTMLSkills = HTMLskills.replace('%data%', bio.skills[i]);
    $('#skills').append(formattedHTMLSkills);
  }

}; // End of the bio.display function.

education.display = function(){

};

// Run the functions

bio.display();
work.display();
projects.display();




































//
