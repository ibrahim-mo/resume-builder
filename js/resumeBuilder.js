/*
An Interactive Resume Builder App
Ibrahim Almohandes, 2016
*/

var job1_description =
    "<ul><li>- Object-oriented design and C++ cross-platform (Linux/Windows) development of some Lattie EDA software tools including: " +
    "backend annotator converting full-chip design into Verilog/VHDL/SDF files; and module generator for customizing PCS/Serdes hard-IP block into Verilog/VHDL format.</li>" +
    "<li>- Developed C++ API’s and tools for supporting the IEEE-P1735 encryption/decryption standard, using the OpenSSL open-source libraries. Implementation verified with both Lattice and third-party EDA synthesis/simulation tools.</li>" +
    "<li>- Wrote C++ APIs for parsing Lattice timing constraint files by the Lattice Synthesis Engine (LSE), as well as APIs for the LSE schematic viewer and netlist analyzer.</li>" +
    "<li>- Developed scripts in Perl, UNIX shell, and Windows batch for: process automation of library watermarking/encryption, and synthesis header-file generation. " +
    "Created TCL user commands for end-users to easily compile Lattice FPGA simulation libraries.</li>" +
    "<li>- Developed in Java a tool that automates the watermarking process of OEM simulation libraries, by automatically sendsing/receiving e-mails from/to the simulation vendor as part of the daily build.</li>" +
    "<li>- Contributed to Lattice FPGA/CPLD Programmer Team by: enabling programming/configuration features of a new FPGA device in the deployment tool, and pre-silicon verification (in a Linux emulation environment) of the device’s bitstream configuration operations.</li>" +
    "<li>- HDL modelling of FPGA device simulation libraries; functional/timing verification and debugging of Verilog/VDHL simulation models and designs.</li></ul>";

var job2_description =
    "<ul><li>- RTL design of an energy-efficient 3G turbo decoder; FPGA prototyping (on a Xilinx Virtex-II) and testing of the turbo codec (with an ARM Integrator board). " +
    "Algorithm modelling, simulation, and synthesis, utilizing Matlab, C, and VHDL.</li> " +
    "<li>- Grad courses studied include: Introduction to Optimization, and Computer Network Security.</li>" +
    "<li>- Worked as Teaching Assistant of: Programming Languages and Translators, Algorithms and Data Structures, Real-Time Operating Systems, and Computer Structures. " +
    "Also (as a TA), wrote shell scripts for auto-marking, coded Java and Prolog programming assignments, and developed C-like test processes for RTOS project.</li></ul>";

var job3_description =
    "<ul><li>- Developed Java components for an eBusiness project, using Sun’s JDK/JDBC and SQL, which was hosted on an IBM WebSphere server.</li>" +
    "<li>- Built an Intranet-based customer database system, using MS InterDev, JavaScript, ASP/VBScript, and MS Access.</li>" +
    "<li>- Performed web authoring using HTML and FrontPage.</li></ul>";

var bio = {
    "name": "Ibrahim Almohandes",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "(xxx)xxx-xxxx", //hidden
        "email": "heema111@gmail.com",
        "github": "https://github.com/ibrahim-mo",
        //"twitter": "https://twitter.com/xxx",
        "location": "Union City, CA"
    },
    "welcomeMessage": "Software Engineer with 10+ years of experience developing cross-platform object-oriented solutions.",
    "skills": [
        "C", "C++", "Java", "Python", "Perl", "JavaScript", "SQL", "HTML", "CSS", "XML", "Linux", "Windows", "Android",
        "Analytical and Probem Solving", "Self-Starter", "Cross-Organisational", "Data Structures and Algorithms"
    ],
    "bioPic": "images/mycomic-pic.jpg" //"images/fry.jpg"
};

var education = {
    "schools": [{
        "name": "University of Waterloo",
        "location": "Waterloo, ON",
        "degree": "PhD",
        "majors": ["Electrical and Computer Engineering"],
        "dates": "2000 - 2005",
        "url": "https://uwaterloo.ca"
    }, {
        "name": "Ain Shams University",
        "location": "Cairo, Egypt",
        "degree": "MS",
        "majors": ["Electrical Engineering (Electronics and Communications)"],
        "dates": "1995 - 1998",
        "url": "http://www.asu.edu.eg/"
    }, {
        "name": "Al-Azhar University",
        "location": "Cairo, Egypt",
        "degree": "BS",
        "majors": ["Systems and Computer Engineering"],
        "dates": "1989 - 1994",
        "url": "http://www.azhar.edu.eg"
    }],
    "onlineCourses": [{
        "title": "Machine Learning Foundations: A Case Study Approach",
        "school": "University of Washington on Coursera",
        "dates": "6/2016",
        "url": "https://www.coursera.org/account/accomplishments/certificate/9BQQJXVCWN8G"
    }, {
        "title": "Machine Learning: Regression",
        "school": "University of Washington on Coursera",
        "dates": "7/2016",
        "url": "https://www.coursera.org/account/accomplishments/certificate/6FA26MMALMWB"
    }, {
        "title": "Machine Learning: Classification",
        "school": "University of Washington on Coursera",
        "dates": "8/2016",
        "url": "https://www.coursera.org/account/accomplishments/certificate/N6YJBPVH28PQ"
    }]
};

var work = {
    "jobs": [{
        "employer": "Lattice Semiconductor",
        "title": "Software Development Engineer",
        "location": "San Jose, CA",
        "dates": "2005 - 2015",
        "description": job1_description
    }, {
        "employer": "University of Waterloo",
        "title": "Research Assistant",
        "location": "Waterloo, ON",
        "dates": "2000 - 2005",
        "description": job2_description
    }, {
        "employer": "Mindwork",
        "title": "Java and Internet Developer",
        "location": "Cairo, Egypt",
        "dates": "1998 - 1999",
        "description": job3_description
    }]
};

var projects = [{
    "title": "Interactive Resume",
    "dates": "2016",
    "description": "An HTML/CSS/JavaScript Resume Builder App that reads resume content from JSON objects and dynamically displays it within a template.",
    "images": ["images/resume-project.png"]
}, {
    "title": "Court Counter App",
    "dates": "2016",
    "description": "An android app for calculating the scores of two basketball teams.",
    "images": ["images/court-counter.png"]
}];

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend([formattedRole]);
    $("#header").prepend([formattedName]);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    //var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append([formattedMobile]);
    $("#topContacts").append([formattedEmail]);
    $("#topContacts").append([formattedGithub]);
    //$("#topContacts").append([formattedTwitter]);
    $("#topContacts").append([formattedLocation]);

    $("#footerContacts").append([formattedMobile]);
    $("#footerContacts").append([formattedEmail]);
    $("#footerContacts").append([formattedGithub]);
    //$("#footerContacts").append([formattedTwitter]);
    $("#footerContacts").append([formattedLocation]);

    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append([formattedPic]);

    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append([formattedMsg]);

    if (bio.skills.length > 0) {
        $("#header").append([HTMLskillsStart]);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append([formattedSkill]);
        }
    }
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append([HTMLschoolStart]);
        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        for (var i = 0; i < school.majors.length; i++) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors[i]);
            $(".education-entry:last").append(formattedMajor);
        }
        var formattedUrl = HTMLonlineURL.replace("%data%", school.url);
        $(".education-entry:last").append(formattedUrl);
    });
    if (education.onlineCourses.length > 0) {
        $("#education").append([HTMLonlineClasses]);
        education.onlineCourses.forEach(function(course) {
            $("#education").append([HTMLschoolStart]);
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedTitle + formattedSchool);
            $(".education-entry:last").append(formattedDates);
            var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedUrl);
        });
    }
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append([HTMLworkStart]);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    });
};

projects.display = function() {
    projects.forEach(function(project) {
        $("#projects").append([HTMLprojectStart]);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        for (var i = 0; i < project.images.length; i++) {
            var formattedImage = HTMLprojectImage.replace("%data%", project.images[i]);
            $(".project-entry:last").append(formattedImage);
        }
    });
};

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
