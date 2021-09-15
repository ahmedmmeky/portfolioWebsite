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
];

let theme = localStorage.getItem("theme");

let themeDots = document.getElementsByClassName("theme-dot");

const postWrapper = document.querySelector(".post-wrapper");

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
             <a href=${project.link} target="blank">View Project</a>
          </div>
        </div>
      
`;
  });

  displayCard = displayCard.join("");
  postWrapper.innerHTML = displayCard;
}
