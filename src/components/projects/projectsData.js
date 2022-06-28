const react = "./images/react.png";
const sass = "./images/sass.png";
const css = "./images/css.png";
const js = "./images/js.png";
const html = "./images/html.png";

export let projectsData = [
  {
    id: 1,
    name: "Interactive comments section",
    imageMobile: "./images/comments-section-mobile.png",
    description:
      "An interactive comments section page, where the user can upvote or downvote, add a comment or a reply and can manage the comments by editing or deleting them. The reply list can be collapsed after pressing the `Replies` button.",
    technology: [react, html, css],
    liveLink: "https://andrei-tc.github.io/comments-section/",
    codeLink: "https://github.com/Andrei-TC/comments-section",
  },
  {
    id: 2,
    name: "Random advice generator",
    imageMobile: "./images/advice-generator-mobile.png",
    description:
      "An interactive random advice gadget. (the api won't work if the user taps on the `generate` button before 2 seconds past from the last tap)",
    technology: [sass, html, css, js],
    liveLink:
      "https://andrei-tc.github.io/GitHub/challenges/advice-generator-app-main/",
    codeLink:
      "https://github.com/Andrei-TC/GitHub/tree/main/challenges/advice-generator-app-main",
  },
  {
    id: 3,
    name: "Preview Huddle landing page",
    imageMobile: "./images/huddle-landing-page-mobile.png",
    description: "A preview of the Huddle landing page. - Static website",
    technology: [sass, html, css],
    liveLink:
      "https://andrei-tc.github.io/GitHub/challenges/huddle-landing-page-with-alternating-feature-blocks-master/",
    codeLink:
      "https://github.com/Andrei-TC/GitHub/tree/main/challenges/huddle-landing-page-with-alternating-feature-blocks-master",
  },
  {
    id: 4,
    name: "Preview chat application",
    imageMobile: "./images/preview-chat-app-mobile.png",
    description:
      "A CSS oriented  project. This project putted my CSS skills to the test. Finding the problems was the first step, but after I managed to create a efficient solution for the secific problems, the project went smoothly. - Static website",
    technology: [sass, html, css],
    liveLink:
      "https://andrei-tc.github.io/GitHub/challenges/chat-app-css-illustration-master/",
    codeLink:
      "https://github.com/Andrei-TC/GitHub/tree/main/challenges/chat-app-css-illustration-master",
  },
  {
    id: 5,
    name: "Preview order summary card",
    imageMobile: "./images/preview-order-summary-card-mobile.png",
    description:
      "A preview of the order summary card. This project was one of my first projects. - Static website",
    technology: [sass, html, css],
    liveLink:
      "https://andrei-tc.github.io/GitHub/challenges/order-summary-component-main/",
    codeLink:
      "https://github.com/Andrei-TC/GitHub/tree/main/challenges/order-summary-component-main",
  },
];
