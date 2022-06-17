const qvList = document.querySelector(".career-qv");
const feList = document.querySelector(".career-fe");
const dList = document.querySelector(".career-3d");
const proj = document.querySelector(".proj");
const pulse = document.querySelector(".pulseContainer");
const project = document.querySelector(".projects");
const pp = project.querySelectorAll(".pp");
const r = document.querySelector(":root");
var checkboxDM = document.getElementById("checkbox");

console.log(pp);

checkboxDM.addEventListener("change", () => {
  if (checkboxDM.classList.contains("lm")) {
    setToDarkMode();
  } else setToLightMode();
});
function setToLightMode() {
  r.style.setProperty("--background-color", "#EEEEEE");
  r.style.setProperty("--text-color", "#4E4E48");
  r.style.setProperty("--card-bg-color", "#C0C0C0");
  checkboxDM.classList.add("lm");
  checkboxDM.classList.remove("dm");
}
function setToDarkMode() {
  r.style.setProperty("--background-color", "#292929");
  r.style.setProperty("--text-color", "#fff");
  r.style.setProperty("--card-bg-color", "#1b1b1b");
  checkboxDM.classList.add("dm");
  checkboxDM.classList.remove("lm");
}

if (navigator.userAgent.match(/samsung/i)) {
  alert(
    "You are using a defective browser (Samsung Internet) that " +
      "might not be configured to display this website properly. " +
      "You should consider using a proper standards-compliant " +
      "browser instead. \n\n" +
      "We recommend using Firefox, Microsoft Edge, or Google Chrome."
  );
}
window.onclick = (e) => {
  if (e.target.children[1] == undefined) return;
  var parent = e.target.children[1].parentNode.parentNode.parentNode.parentNode;

  if (parent == qvList) {
    var qvCurrentActive = document.querySelector(".qvActive");
    if ((e.target.children[1].classList = qvCurrentActive)) {
      qvCurrentActive.classList.remove("qvActive");
    }
    if (
      e.target.children[1].classList.contains("qvActive") & !qvCurrentActive
    ) {
      e.target.children[1].classList.remove("qvActive");
    } else {
      e.target.children[1].classList.add("qvActive");
    }
  } else if (parent == feList) {
    var feCurrentActive = document.querySelector(".feActive");
    if ((e.target.children[1].classList = feCurrentActive)) {
      feCurrentActive.classList.remove("feActive");
    }
    if (
      e.target.children[1].classList.contains("feActive") & !feCurrentActive
    ) {
      e.target.children[1].classList.remove("feActive");
    } else {
      e.target.children[1].classList.add("feActive");
    }
  } else if (parent == dList) {
    var dCurrentActive = document.querySelector(".dActive");
    if ((e.target.children[1].classList = dCurrentActive)) {
      dCurrentActive.classList.remove("dActive");
    }
    if (e.target.children[1].classList.contains("dActive") & !dCurrentActive) {
      e.target.children[1].classList.remove("dActive");
    } else {
      e.target.children[1].classList.add("dActive");
    }
  } else return;
};
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

proj.onmouseover = function () {
  if (proj.classList.contains("hovered")) return;
  proj.classList.add("hovered");
  delay(1000).then(
    () => proj.classList.remove("unhover"),
    pulse.classList.remove("pchover")
  );
  for (let i = 0; i < pp.length; i++) {
    pp[i].classList.remove("pp");
  }
};
proj.addEventListener("click", () => {
  if (proj.classList.contains("hovered")) return;
  proj.classList.add("hovered");
  delay(1000).then(
    () => proj.classList.remove("unhover"),
    pulse.classList.remove("pchover")
  );
  for (let i = 0; i < pp.length; i++) {
    pp[i].classList.remove("pp");
  }
});
