let aname = "Christian Paterson";
let a_message = "cs190 JavaScript Lab 2";
let code = 880;

function displayinfo470() {
  alert(`${aname} has completed ${a_message} and his code is ${code}.`);
}

function confirmlink872(linkname) {
  if (confirm("Are you sure you want to jump to " + linkname + "?")) {
    window.location = linkname;
  }
}