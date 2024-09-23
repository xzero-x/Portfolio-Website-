 import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    microsoft,
    linux,
    Clogo,
    pythonlogo,
    metasploit,
    snort,
    wireshark,
    github,
    burpsuite,
    splunk,
    zero1,
    directorybuster,
    sos,
    admanger
} from "../assets";
  
const navLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "Skills",
    title: "Skills"
  },
  {
    id: "Experience",
    title: "Experience"
  },
  {
    id: "Projects",
    title: "Projects",
  },
];
  
const services = [
  {
    title: "Programming",
    icon: web,
  },
  {
    title: "Security",
    icon: mobile,
  },
  {
    title: "Networking",
    icon: backend,
  },
  {
    title: "Scripting",
    icon: creator,
  },
];
  
const technologies = [
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "windows",
    icon: microsoft,
  },
  {
    name: "C#",
    icon: Clogo,
  },
  {
    name: "python",
    icon: pythonlogo,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "Security Onion",
    icon: sos,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "metasploit",
    icon: metasploit
  },
  {
    name: "wireshark",
    icon: wireshark
  },
  {
    name: "burpsuite",
    icon: burpsuite
  },
  {
    name: "snort",
    icon: snort
  },
  {
    name: "splunk",
    icon: splunk
  }
];
  
const experiences = [
  {
    title: "Azure VM HoneyPot",
    company_name: "",
    iconBg: "#00cea8",
    date: "",
    points: [
      "Deployed a Windows Virtual machine in Azure using Virtual Desktop, making it vulnerable to attacks by allowing access to all ports and disable windows firewall.",
      "Created a new log in Microsoft Logs Analytics workspace, Monitoring Agent, and Data Collection Rule and connected them to the virtual machine.",
      "Ran a powershell script on the virtual machine with GEOLocation API to track all failed logon attempts and recorded the Country, and State based on the Source IP.",
      "Connected the virtual machine to Microsoft sentinel and set up a workbooks to visualize the data.",
      "Created a world map to plot the location of the failed logon attempted, keeping count of the attempted logons from which country."
    ],
  },
  {
    title: "Windows Server 2022 Active Directory",
    company_name: "",
    iconBg: "#00cea8",
    date: "",
    points: [
      "Download and installed Windows Server 2022 on Vmware Virtual Machine.",
      "Setup Windows Server and installed Active Directory",
      "Setup a basic Active Directory domain.",
      "Created UO, Groups, and Users in the AD Domain.",
      "Created GPO's, Password Policy, Drive Mapping Policy, and Restrict Access Policy"
    ],
  },
  {
    title: "Password Manager",
    company_name: "",
    iconBg: "#00cea8",
    date: "",
    points: [
      "Develoyed a sql server using Microsoft Azure to host the sql database that will store usernames, passwords(hash) to the corresponding website.",
      "Created a python script that that allows a user to enter their information(username, password) and the website the credentials belongs to.", 
      "Implemented argon2 in the script for password hashing to securely store passwords in database.",
      "The script then connects to the Azure sql database and stores the credentials in the credentials tables.",
      "Extented the script an added a password generator for users to generate a random password based on a specific length.",
    ],
  },
  {
    title: "HelpDesk Chatbot",
    company_name: "",
    iconBg: "#00cea8",
    date: "",
    points: [
      "Develoyed a Chatbot that answers commonly asked questions.",
      "Provide a simple loop for direct user interaction, where users can input text, and the chatbot will print the predicted response.",
      "Define and configure a Flask web application to serve as the backend for the chatbot.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];
  
  
const projects = [
  {
    name: "ZeroSecurity",
    description:
    "zerosecurity is a port scanner cli tool made in javascript to scan a target IP and list open and closed ports",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Fuzzing",
        color: "green-text-gradient",
      },
      {
        name: "pentest",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/xzero-x/zerosecurity",
    image: zero1
  },
  {
    name: "Active Directory Manager",
    description:
    "Powershell script that manages Active Directory groups. Add users, remove users, set group policies and more from the cli. ",
    tags: [
      {
        name: "powershell",
        color: "blue-text-gradient",
      },
      {
        name: "windows",
        color: "green-text-gradient",
      },
      {
        name: "Active Directory",
        color: "pink-text-gradient",
      },
    ],
      source_code_link: "https://github.com/xzero-x/Active-Directory-management",
      image: admanger
    },
    {
      name: "DirectoryBuster",
      description:
      "A command line tool made in c# to fuzz for directories of webpages.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Fuzzing",
          color: "green-text-gradient",
        },
        {
          name: "pentest",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/xzero-x/DirectoryBuster",
      image: directorybuster
  },
];
  
export { navLinks, services, technologies, experiences, projects };