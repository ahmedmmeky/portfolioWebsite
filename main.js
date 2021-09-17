const projects = [
  {
    imgSrc:
      "https://i.ibb.co/10n9BX5/Screen-Shot-2021-09-15-at-12-57-12-PM.png",
    title: "Club Website 2021",
    stack: "Vanilla JS | HTML/CSS",
    intro:
      "Provides information about my club's events and board members, while linking to several contact streams. My most mobile friendly wesbite!",
    link: "https://pennstatemsa.org/",
  },
  {
    imgSrc: "https://i.ibb.co/NsXnqNj/Screen-Shot-2021-09-15-at-1-00-59-PM.png",
    title: "Cryptocurrency Web App 2021",
    stack: "ReactJS | HTML/CSS",
    intro:
      "Displays live market data for hundreds of cryptocurrencies from the CoinGecko API. Has a search and view feature for the currencies.",
    link: "https://www.kryptobyte.io/",
  },
  {
    imgSrc: "https://i.ibb.co/R3DtX14/Screen-Shot-2021-09-15-at-1-00-15-PM.png",
    title: "Karaoke Web App 2021",
    stack: "ReactJS | Express | HTML/CSS",
    intro:
      "Uses the Spotify API to authenticate the user, allows them to search and play songs, while using the lyrics-finder node library to display lyrics. (This app can only be used if I add you to an email list)",
    link: "https://itskaraoketime.com/",
  },
  {
    imgSrc:
      "https://i.ibb.co/k8Z2KjF/Screen-Shot-2021-09-15-at-12-40-38-PM.png",
    title: "Realtor Website 2019",
    stack: "Wix | Vanilla JS | HTML/CSS",
    intro:
      "Displays information about the realtor, his current listings, neighborhood information, testimonials, and a home value calculator. (Please note that there are a few aspects of its functionality that need some fixing; these bugs did not exist when I completed my contract with him in 2019) ",
    link: "https://www.blakewilderrealtor.com/",
  },
  {
    imgSrc: "https://i.ibb.co/rvTkGxD/Screen-Shot-2021-09-15-at-1-02-18-PM.png",
    title: "Social Emotional Learning Website 2020",
    stack: "WordPress | Vanilla JS | HTML/CSS",
    intro:
      "Website for kids and parents to read interactive story books, allows children to express how they feel with feedback at the end of each story, provides a blog, coloring books, and videos.",
    link: "https://www.penandpals.com/",
  },
  {
    imgSrc: "https://i.ibb.co/bHx5zCZ/Screen-Shot-2021-09-15-at-4-17-27-PM.png",
    title: "Sample Client Webpage",
    stack: "Vanilla JS | HTML/CSS",
    intro:
      "Built a website template to use for informational web pages; has scroll feature to scroll to each section of the page.",
    link: "/10-scroll/index.html",
  },
  {
    imgSrc: "https://i.ibb.co/ZXYf33S/Screen-Shot-2021-09-15-at-4-21-37-PM.png",
    title: "Restaurant Menu",
    stack: "Vanilla JS | HTML/CSS",
    intro:
      "Sample restaurant website for restaurant to dynamically add menu items, and categorize them.",
    link: "/08-menu/index.html",
  },
  {
    imgSrc: "https://i.ibb.co/GtvHszM/Screen-Shot-2021-09-15-at-1-58-37-PM.png",
    title: "Grocery List",
    stack: "Vanilla JS | HTML/CSS",
    intro:
      "Basic grocery list project to add, edit, and delete grocery items to a list.",
    link: "/14-grocery-bud/index.html",
  },

  {
    imgSrc: "https://i.ibb.co/2c3KfJ6/Screen-Shot-2021-09-15-at-4-40-50-PM.png",
    title: "Color Flipper",
    stack: "Vanilla JS | HTML/CSS",
    intro: "Randomly generates colors with regular identifiers and hex code.",
    link: "/01-color-flipper/index.html",
  },
  {
    imgSrc: "https://i.ibb.co/yYzSRXk/Screen-Shot-2021-09-15-at-4-38-00-PM.png",
    title: "Customer Reviews",
    stack: "Vanilla JS | HTML/CSS",
    intro:
      "Sample testimonials component for a customer reviews section. Dynamically shows each review.",
    link: "/03-reviews/index.html",
  },
  {
    imgSrc: "https://i.ibb.co/w0GLD3S/Screen-Shot-2021-09-15-at-4-20-10-PM.png",
    title: "Video Coverpage",
    stack: "Vanilla JS | HTML/CSS",
    intro:
      "Sample video with backdrop which can be used as part of a homepage.",
    link: "/09-video/index.html",
  },
  {
    imgSrc: "https://i.ibb.co/QcZF2yk/Screen-Shot-2021-09-15-at-4-23-42-PM.png",
    title: "Questions Component",
    stack: "Vanilla JS | HTML/CSS",
    intro:
      "Questions component for companies, products, or pretty much any app that needs a FAQ section!",
    link: "/07-questions/index.html",
  },
  {
    imgSrc: "https://i.ibb.co/4d8RGdy/Screen-Shot-2021-09-15-at-4-15-33-PM.png",
    title: "Tabs Component",
    stack: "Vanilla JS | HTML/CSS",
    intro:
      "Used to group common information into categories; useful for a nice and sleek way to group information.",
    link: "/11-tabs/index.html",
  },
  {
    imgSrc: "https://i.ibb.co/GH4m8pR/Screen-Shot-2021-09-15-at-4-11-02-PM.png",
    title: "Paragraph Generator",
    stack: "Vanilla JS | HTML/CSS",
    intro: "Used as a replacement to the lorem septum placeholder text.",
    link: "/13-lorem-ipsum/index.html",
  },

  {
    imgSrc: "https://i.ibb.co/HV3rq9g/Screen-Shot-2021-09-15-at-4-26-06-PM.png",
    title: "Modal/Dialog Component",
    stack: "Vanilla JS | HTML/CSS",
    intro: "",
    link: "/06-modal/index.html",
  },
  {
    imgSrc: "https://i.ibb.co/xC11sKn/Screen-Shot-2021-09-15-at-4-39-05-PM.png",
    title: "Counter",
    stack: "Vanilla JS | HTML/CSS",
    intro: "",
    link: "/02-counter/index.html",
  },
  {
    imgSrc: "https://i.ibb.co/nPNkzf5/Screen-Shot-2021-09-15-at-4-13-38-PM.png",
    title: "Countdown Timer",
    stack: "Vanilla JS | HTML/CSS",
    intro: "Sample countdown website with days, hours, minutes, seconds.",
    link: "/12-coutdown-timer/index.html",
  },
];

let theme = localStorage.getItem("theme");

let themeDots = document.getElementsByClassName("theme-dot");

const postWrapper = document.querySelector(".post-wrapper");

const projectsLink = document.getElementById("projects");

const projectHeading = document.querySelector(".project-heading");

const contactLink = document.getElementById("contact");
const contactHeading = document.querySelector(".contact-heading");

const greetingWrapper = document.querySelector(".greeting-wrapper");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log(mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}

window.addEventListener("DOMContentLoaded", function () {
  displayProjectPosts(projects);
});

projectsLink.addEventListener("click", function () {
  const greetingWrapperHeight = greetingWrapper.getBoundingClientRect().height;
  let position = projectHeading.offsetTop - greetingWrapperHeight;

  position = position + greetingWrapperHeight;

  window.scrollTo({
    left: 0,
    top: position,
  });
});

contactLink.addEventListener("click", function () {
  const greetingWrapperHeight = greetingWrapper.getBoundingClientRect().height;
  let position = contactHeading.offsetTop - greetingWrapperHeight;

  position = position + greetingWrapperHeight;

  window.scrollTo({
    left: 0,
    top: position,
  });
});

function displayProjectPosts(projects) {
  let displayCard = projects.map((project) => {
    return `
        <div class="post">
          <img class="thumbnail" src=${project.imgSrc} />
          <div class="post-preview">
            <h6 class="post-title">${project.title}</h6>
            <p class="post-stack">
              ${project.stack}
            </p>
            <p class="post-intro">
              ${project.intro}
            </p>
             <a href=${project.link} target="blank" ${(onclick = openProject(
      project.link
    ))}>View Project</a>
          </div>
        </div>
      
`;
  });

  function openProject(link) {
    window.open(link, "_blank");
  }

  displayCard = displayCard.join("");
  postWrapper.innerHTML = displayCard;
}
