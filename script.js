let mode = false;

function switch_modes() {
  let body = document.body;
  let btn = document.querySelector("#toggle-theme");

  body.classList.toggle("bdy-dark");

  if (mode) {
    btn.innerHTML = "dark_mode";
  } else {
    btn.innerHTML = "light_mode";
  }

  mode = !mode;
}

document.addEventListener("DOMContentLoaded", () => {
  let apps = document.querySelector(".apps-c");

  function createUtilities() {
    let utility_container = document.createElement("div");
    let utility_image = document.createElement("img");
    let utility_title = document.createElement("p");

    utility_container.classList.add("utility-c");
    utility_image.classList.add("utility-img");
    utility_title.classList.add("utility-title");

    utility_container.onclick = () => logg();
    utility_container.appendChild(utility_image);
    utility_container.appendChild(utility_title);

    apps.appendChild(utility_container);
  }

  createUtilities();
  createUtilities();
  createUtilities();
  createUtilities();
});

function logg() {
  console.log("hello, world");
}
