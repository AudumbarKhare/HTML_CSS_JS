var IsShow = true;



function toggleMenu() {
  var menuOpen = document.querySelector(".menuOpen");
  var menuClose = document.querySelector(".menuClose");
  var overlay = document.getElementById("menuOverlay");
  IsShow = !IsShow;
  console.log(menuClose);

  overlay.style.display = IsShow ? "none" : "flex";
  menuOpen.style.display = IsShow ? "flex" : "none";
  menuClose.style.display = IsShow ? "none" : "flex";
}
