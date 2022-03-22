let user_things;
let record_count = 0;
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

async function option_new() {
  if (!confirm("Clear all?")) {
    return;
  }

  user_things.value = "";

  let temp = user_things.style.backgroundColor;

  user_things.style.backgroundColor = mode
    ? "var(--light-mode-color)"
    : "var(--dark-mode-color)";
  await new Promise((resolve) => setTimeout(resolve, 100));
  user_things.style.backgroundColor = "transparent";
}

function option_save() {
  let blob = new Blob([user_things.value], {
    type: "text/plain;charset=utf-8",
  });

  let filename =
    prompt("Input file name:", "netpad-record-" + ++record_count) + ".txt";

  if (window.navigator.msSaveOrOpenBlob)
    window.navigator.msSaveOrOpenBlob(blob, filename);
  else {
    var a = document.createElement("a"),
      url = URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}

async function option_open() {
  let input = document.getElementById("fileSelector");
  let file = input.files[0];
  let txt = await file.text();

  if (confirm("Replace existing notes?")) {
    user_things.value = txt;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Fetch element when the DOM is loaded
  user_things = document.getElementById("user");
});
