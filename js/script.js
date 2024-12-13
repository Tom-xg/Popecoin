(function () {
  "use strict";
  jQuery(document).ready(function () {
    // copy to clipboard
    $(document).ready(function () {
      const tokenText = $("#tokenText").text();
      const copyIcon = $("#copyIcon");

      copyIcon.on("click", function () {
        navigator.clipboard.writeText(tokenText).then(
          function () {
            alert("Copied to clipboard: " + tokenText);
          },
          function (err) {
            console.error("Could not copy text: ", err);
          }
        );
      });
    });
    // copy to clipboard
    $(document).ready(function () {
      const tokenText = $("#tokenTextTwo").text();
      const copyIcon = $("#copyIconTwo");

      copyIcon.on("click", function () {
        navigator.clipboard.writeText(tokenText).then(
          function () {
            alert("Copied to clipboard: " + tokenText);
          },
          function (err) {
            console.error("Could not copy text: ", err);
          }
        );
      });
    });
  });
})();
