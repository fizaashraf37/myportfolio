/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fiza Ashraf",
  title: "Hi, I'm Fiza",
  subTitle: emoji(
    "Welcome to my portfolio! I am currently pursuing a Master’s degree in Computer Science at Miami University, Oxford, Ohio, while also working as a Graduate Assistant. With over 7 years of experience in the software industry, I specialize in Backend Development, Distributed Systems, and Data Platforms. As a passionate open-source contributor and tech blogger, I consistently strive to stay at the forefront of emerging technologies. My problem-solving abilities are sharpened through daily challenges on platforms like LeetCode, and I have been recognized for delivering impactful solutions. I have extensive experience with a variety of technologies, including Python, Flask, Django, AWS, Docker, Kubernetes, and more. In my previous role as Backend Lead at Afiniti, I developed scalable APIs and led a team of software engineers to deliver high-quality, efficient solutions. At Motive, I focused on optimizing data pipelines, building data infrastructure, and significantly reducing storage and compute costs. My passion for technology is complemented by my commitment to mentoring and collaborating with cross-functional teams to drive innovation and meet project goals. Let's connect and explore how we can leverage technology to solve complex problems and drive business success."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1a6kjWnPVjidptQSM4NtNDVrG4dQeSMTLzJemfOQlC1U/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fizaashraf37",
  linkedin: "https://www.linkedin.com/in/fiza-ashraf/",
  gmail: "fizaashraf37@gmail.com",
  medium: "https://medium.com/@fizaashraf37",
  leetcode: "https://leetcode.com/u/user4386S/",
  stackoverflow: "https://stackoverflow.com/users/18364911/fiza",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DRIVEN BACKEND ENGINEER ON A MISSION TO OPTIMIZE SYSTEMS, MASTER SCALABILITY, AND DIVE INTO EVERY CHALLENGE THE CLOUD HAS TO OFFER!",
  skills: [
    emoji(
      "⚡Develop and optimize scalable microservices and backend APIs for high-performance systems"
    ),
    emoji("⚡ Design and deploy distributed systems using Kubernetes, Docker, and Terraform"),
    emoji("⚡ Streamline data pipelines with ETL/ELT tools like Airflow, Snowflake, and Spark"),
    emoji(
      "⚡ Integrate third-party services including AWS, Confluent, and Snowflake for seamless workflows"
    ),
    emoji(
      "⚡ Enhance application performance and simplify codebases for maintainable and efficient solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "snowflake",
      fontAwesomeClassname: "far fa-snowflake"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "graphql",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "airflow",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "spark",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Miami University",
      logo: require("./assets/images/miami_university_logo.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2024 - May 2026",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "University of Engineering and Technology, Lahore",
      logo: require("./assets/images/uet-logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "October 2012 - August 2016",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Data Structures, Operating Systems, ...",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "Distributed Systems",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer - Backend (Data Platform)",
      company: "Motive",
      companylogo: require("./assets/images/Motive-logo.jpg"),
      date: "July 2023 – August 2024",
      desc: "San Francisco-based Unicorn Company with a $2.85B valuation, ranked 32nd on Forbes Cloud 100 2023",
      descBullets: [
        "Successfully migrated production code for data pipelines and Table API from a monolithic repository to a modular repository, facilitating easier deployment across new regions.",
        "Collaborated with cross-functional teams to ensure comprehensive testing and validation of the new repository",
        "Conducted PoCs and drafted technical design documents, ensuring efficient infrastructure setup and seamless integration of distributed query engines and data catalog solutions",
        "Deployed and optimized Spark Thrift Server, Kyuubi, Amundsen, Open Metadata, and Hue on Kubernetes, reducing storage and compute by 30%",
        "Debug and refactored complex codebases to remove deprecated code; reduced the number of lines of code by 25,000",
        "Optimized snowflake compute time and storage, reducing compute cost by 9600$ per month and storage by 257TB",
        "Optimized kubernetes resource request usage on staging and production clusters for 40 pipelines, enhancing reliability and reducing CPU requests by 50 cores and memory requests by 50TB",
        "Terraformed confluent and AWS resources, conducted code reviews, monitored production pipelines during on-call schedules, and assisted teams during channel support in managing data aggregation pipeline failures",
        "Skills: Python, Docker, Kubernetes, Terraform, Helm, AWS, Airflow, Spark, Snowflake, Kafka, Debezium, Datadog, Amundsen, Iceberg, AWS Glue, AWS S3, ECR"
      ]
    },
    {
      role: "Software Engineer - Lead Backend Developer",
      company: "Afiniti",
      companylogo: require("./assets/images/afiniti_logo.png"),
      date: "Dec 2020 – July 2023",
      desc: "A leading AI-driven company specializing in optimizing human interactions to enhance business outcomes through advanced data analytics and machine learning.",
      descBullets: [
        "Designed and developed scalable and reliable microservices and backend APIs to automate data-intensive ETL and AIprocesses for Afiniti consumers; reduced the average data processing time from 1 hour to 5 minutes and Go-Live time from 6 months to 1 month",
        "Migrated Linux-based applications to Windows server using dockerized environment; reduced the deployment time of applications on Windows environment from several days to 1 hour and risk factor to 90%",
        "Migrated changes to live production systems including bug fixes, feature development, code refactoring and new service deployment",
        "Participated in the design of new systems for high availability and reliability, code reviews, testing, writing coding standards, writing test cases, unit and integration testing, source control management, and software development life cycle, mentored software engineers and Interns",
        "Used continuous integration/deployment pipelines and rigorous testing to deliver quality products in less time, mentored a team of 5 software engineers in the backend team, conducted regular code reviews using coding standards",
        "Skills: Python, Flask, Pyspark, Airflow, Typescript, GraphQL, Postgres, Dockers, Kubernetes, Git, Bitbucket, AWS, MySQL, Talend Data Integration"
      ]
    },
    {
      role: "Senior Software Engineer - Integrations and Backend",
      company: "Fatima Group",
      companylogo: require("./assets/images/fg-logo.png"),
      date: "Feb 2020 – Jun 2022",
      desc: "A leading conglomerate in Pakistan, specializing in fertilizer, energy, and industrial solutions to drive sustainable growth and innovation.",
      descBullets: [
        "Integrated Fatima group payment system with Pakistan 1Link payment system for online order bookings; generated 10 million rupees of orders within the first week of App Go Live; received IT GEM award for the quarter",
        "Designed and Developed backend APIs and microservices to automate many manual processes including order booking proof of delivery, shipment tracking, and payments; reduced time for proof of delivery from one week to 5 minutes",
        "Led the transition to paperless practice by implementing integration solutions to integrate on-prem applications with cloud applications; reduced the wait time of shipments from 12 hours to 5 minutes and cost by 40%",
        "Participated in full product lifecycle including idea generation, requirements gathering, design documents, prototyping, execution, deployments, and shipping",
        "Skills: Python, Django, Oracle SQL, SVN, Oracle EBS, Oracle Transportation Management, Oracle Integration Cloud, and Oracle Transactional Business Intelligence"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/project-repo-migration.png"),
      projectName: "Monorepo to Multi-repo Migration",
      projectDesc: "As part of this project, I led the migration of production code for data pipelines and the Table API from a monolithic repository to a modular repository, enabling easier deployment across new regions through codebase restructuring. I also successfully transitioned Prow CI jobs from a monorepo to Tekton CI jobs within a new repository, achieving significant performance improvements. This migration reduced the CI job runtime on pull requests from 2 hours to 20 minutes and decreased PR merge time from 30 minutes to just 1 minute, greatly enhancing overall development workflow efficiency. Additionally, I worked closely with multiple teams to ensure thorough testing and validation of the new repository, ensuring its reliability and seamless integration across teams.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/project-optimize-datainfrastructure.png"),
      projectName: "Optimization and Efficiency Enhancement of Data Infrastructure",
      projectDesc: "In this project, I led several key initiatives aimed at improving the efficiency and performance of production systems. I refactored the production code to remove deprecated code, reducing the codebase by 32,000 lines, which significantly enhanced both maintainability and performance. Additionally, I optimized Snowflake compute and storage, resulting in a monthly compute cost reduction of $9,600 and a storage reduction of 257TB. I also optimized Kubernetes resource requests for staging and production clusters across 40 pipelines, improving system reliability and reducing CPU and memory requests by 50 cores and 50TB, respectively. Furthermore, I automated infrastructure using Terraform for Confluent and AWS resources, conducted code reviews, and provided monitoring and on-call support for production pipelines. I also assisted teams in managing data aggregation pipeline failures during channel support, ensuring smooth operations and minimizing downtime.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/project-spark-thrift-server.png"),
      projectName: "Deployment and Optimization of Distributed Query Engines and Data Catalog Solutions on Kubernetes",
      projectDesc: "In this project, I conducted Proofs of Concept (PoCs) and created detailed technical design documents to ensure the efficient setup and seamless integration of distributed query engines and data catalog solutions. I successfully deployed and optimized several key components on Kubernetes, including the Spark Thrift Server for running SQL queries on iceberg tables stored in AWS S3, integrated with AWS Glue data catalog; Kyuubi, deployed as a more efficient alternative to Spark Thrift Server, offering improved performance and resource management; Amundsen and Open Metadata for robust data cataloging and metadata management; and Hue as a frontend SQL assistant for facilitating query execution. These deployments resulted in a 30% reduction in storage and compute costs through optimized resource management. Additionally, I conducted a comparative analysis between Spark Thrift Server and Kyuubi during the PoC phase, leading to the adoption of Kyuubi due to its superior performance and efficiency.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/project-airo.png"),
      projectName: "AIRO - Automated Solution for Intelligent Call Center Pairing",
      projectDesc: "AIRO is an in-house developed project that provides customers with a fully automated solution for creating and scheduling data pipelines, training models, and making predictions to optimize the intelligent pairing of call center agents with customers. My responsibilities included developing APIs and new features, writing test cases for both new and existing features with 100% coverage, and integrating microservices with the backend. I actively participated in product design discussions, conducted feature demos for upper management, and contributed to daily stand-up calls (scrum) to ensure alignment with the team. Additionally, I was responsible for providing immediate fixes to production and QA bugs. The tools and technologies used in the project included Python, GraphQL, TypeScript, Docker, Kubernetes, and AWS.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/project-talflow.webp"),
      projectName: "Talflow - Data Pipeline Tool for Afiniti Clients",
      projectDesc: "Talflow is an in-house project designed to provide a tool for data engineers and analysts to create data pipelines for Afiniti clients, using Afiniti's data standards and security protocols. The tool is built using PySpark, Airflow, Flask, and React, and deployed as Docker containers on both Windows and Linux machines. As a backend developer, my responsibilities included developing APIs and new features, writing comprehensive test cases for both new and existing features with 100% coverage, and providing project demos to upper management. I also participated in daily stand-up calls (scrum), deployed production and QA releases to respective servers, and addressed production and QA bugs promptly. The tools and technologies used in the project included Python, Flask, Apache Airflow, Apache PySpark, Docker, Postgres, MySQL, and React.js.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/project-smwa.png"),
      projectName: "Student Management Web Application Using Django and React",
      projectDesc: "I developed a simple CRUD (Create, Read, Update, Delete) application using Django for the backend and React JS for the frontend, allowing users to manage a list of students. To support beginners in learning the process, I also created step-by-step instructional content, including Medium articles and YouTube videos, detailing the development of both the backend and frontend of the application from scratch. The backend tutorial can be found here, and the frontend tutorial is available here.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/project-sarsabz-asaan.webp"),
      projectName: "Sarsabz Asaan App  - Dealer Management App for Fatima Group",
      projectDesc: "Sarsabz Asaan is a mobile app developed specifically for Fatima Group Dealers, providing a one-stop solution for online order booking, payments, live shipment tracking, electronic proof of delivery, pricing information, and a dashboard for statistics. As a backend developer, I was responsible for developing APIs in Django and creating integrations to connect the app with both cloud and on-prem applications. My key responsibilities included gathering requirements through meetings with business users, developing the project plan and charter, preparing PowerPoint presentations, designing app screen mockups, and building integrations with Oracle Cloud and on-prem applications. I also developed APIs for the app's backend, led meetings with business users for prototype demos, and created technical design and production migration documents.",
      footerLink: [
        {
          name: "Visit on Playstore",
          url: "https://play.google.com/store/apps/details?id=com.ffl.sarsabzaasaan&pli=1"
        }
      ]
    },
    {
      image: require("./assets/images/project-onlink-integration.png"),
      projectName: "One Link Integration with Fatima Group Payments System",
      projectDesc: "I worked on integrating the Pakistan One Link API with Fatima Group's on-prem payment system to enable seamless online payments, replacing the previous manual process where dealers had to prepare a Demand Draft and submit it to Fatima Group warehouses for order booking. This integration allowed dealers to make payments directly through online banking and book their orders via the Sarsabz Asaan app. My responsibilities included gathering requirements through meetings with business users, collaborating with One Link for technical requirements, designing and developing the API, and preparing technical design and production migration documents. This integration led to Fatima Group receiving millions in transactions within the first week of the app's launch, significantly increasing the number of orders, and earned the IT Gem Award for the quarter. The project was developed using Python and Django.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/project-integration-soltuion.png"),
      projectName: "Custom Integration Solution to Integrate OTM cloud orders and shipments data with Oracle EBS",
      projectDesc: " developed a custom integration solution to connect Oracle Transportation Management (OTM) Cloud orders and shipments data with Oracle E-Business Suite (EBS) on-prem, enabling seamless data transfer between the two systems. My responsibilities included gathering requirements from business users, creating documentation, and developing the project plan and charter. I conducted extensive research on Oracle OTM and EBS integration, gaining a deep understanding of OTM agents, REST APIs, SOAP services, and transmission management. I designed the integration architecture, wrote technical and production migration documents, and led the implementation, including testing and training. I managed the project independently from start to finish, achieving successful UAT with minimal bugs and receiving recognition from the IT department, including a certificate of appreciation. The project utilized Python, PySimpleGUI, Oracle Linux, Oracle SQL, OTM Cloud, Oracle EBS, XML Parsing, REST API, and SOAP.",
      footerLink: [
        {
          name: "View on Github",
          url: "https://github.com/fizaashraf37/OTM-EBS-Integration"
        }
      ]
    },
    {
      image: require("./assets/images/project-plate-recognition.webp"),
      projectName: "Detect and Read Number Plates from a Realtime Surveillance Camera",
      projectDesc: "I prepared, annotated, and collected a traffic dataset containing various formats of number plates under different environmental conditions. I then trained this dataset using Convolutional Neural Networks (CNN) to recognize number plates and YOLOv3 for plate detection. As a result, I achieved over 96% accuracy on the test dataset.",
      footerLink: [
        {
          name: "View on Github",
          url: "https://github.com/fizaashraf37/LicencePlateRecognition"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/aws-badge.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/3399a171-b03c-4e16-8baa-f7ad38aeee12/linked_in_profile"
        }
      ]
    },
    {
      title: "Algoexpert Certificate",
      subtitle:
        "Solved 150+ Data Structures and Algoirthms problems on Algoexpert",
      image: require("./assets/images/algoexpert_logo.jpg"),
      imageAlt: "Algoexpert Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-bd0443748a"
        }
      ]
    },

    {
      title: "Software Architecture: Breaking a Monolith into Microservices",
      image: require("./assets/images/linkedin-logo.png"),
      imageAlt: "Linkedin Logo",
      footerLink: [
        {name: "Certification", url: "https://www.linkedin.com/learning/certificates/4e24e81d2bee768c283826dadce2c5164ffaa5294ea3b8d4f6ad5659a4a8890b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Be5kKBWdWRNancsOpLBjHhA%3D%3D"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@fizaashraf37/develop-a-crud-application-using-django-and-react-part-1-2e8927a1e0c8",
      title: "Develop a CRUD Application using Django and React",
      description:
         "In this Article you will learn to develop a simple student management web application with CRUD operations using Django Rest Framework for backend and React Js for frontend."
    },
    {
      url: "https://medium.com/@fizaashraf37/run-docker-linux-containers-on-windows-server-2019-lcow-step-by-step-guide-452cf6bf3180",
      title: "Run Docker Linux Containers on Windows Server 2019 (LCOW) — Step by Step Guide",
      description:
        "In this article, I will show you how you can Install docker engine from DockerMSFTProvider and run both windows and Linux containers on this."
    },
    {
      url: "https://medium.com/@fizaashraf37/install-kubernetes-on-local-machine-617d7549faa0",
      title: "Install Kubernetes on Local Machine",
      description:
        "In this article you will learn how you can setup Kubernetes (Learning Environment) on your local machine."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "fizaashraf37@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "FizaAshraf4", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
