function confirmlink872(linkname) {
  if (confirm("Are you sure you want to jump to " + linkname + "?")) {
    window.location = linkname;
  }
}