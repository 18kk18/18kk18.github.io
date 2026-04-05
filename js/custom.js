document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video-bg");
  const siteInfo = document.querySelector("#site-info");

  if (video && siteInfo) {
    video.addEventListener("loadeddata", function () {
      siteInfo.classList.add("show");
    });
  }
});