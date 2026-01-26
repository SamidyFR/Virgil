(function () {
  const path = window.location.pathname.toLowerCase();

  let cx;
  let placeholder;
  let title;

  if (path.includes("/games/")) {
    cx = "904ead0bae8c845f0";
    placeholder = "Search for a game...";
    title = "Game Search";
  } else if (path.includes("/software/")) {
    cx = "c288da2c020ec4091";
    placeholder = "Search for software...";
    title = "Software Search";
  } else if (path.includes("/mobile/")) {
    cx = "d175f6f92fc134b38";
    placeholder = "Search For Android Apps...";
    title = "Mobile/APK Search";
  } else {
    return;
  }

  const gcse = document.createElement("script");
  gcse.type = "text/javascript";
  gcse.async = true;
  gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
  const s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(gcse, s);

  function setSearchBox() {
    const searchBox = document.getElementById("gsc-i-id1");
    if (searchBox) {
      searchBox.placeholder = placeholder;
      searchBox.title = title;
      return true;
    }
    return false;
  }

  const interval = setInterval(() => {
    if (setSearchBox()) clearInterval(interval);
  }, 1);
})();
