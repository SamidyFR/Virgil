(function () {
  const params = new URLSearchParams(window.location.search);
  const engine = params.get("engine") || "games";

  let cx;
  let placeholder;
  let title;

  if (engine === "games") {
    cx = "904ead0bae8c845f0";
    placeholder = "Search for a game...";
    title = "Virgil Game Search";
  } else if (engine === "software") {
    cx = "c288da2c020ec4091";
    placeholder = "Search for software...";
    title = "Virgil Software Search";
  } else if (engine === "android") {
    cx = "d175f6f92fc134b38";
    placeholder = "Search for an Android app...";
    title = "Virgil Android Search";
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
