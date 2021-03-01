const modalSections = document.querySelectorAll(".has-modal");
const body = document.querySelector("body");
const classToCheck = "modal-open";

modalSections.forEach((section) => {
  var prevClassState = section.classList.contains(classToCheck);
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName == "class") {
        var currentClassState = mutation.target.classList.contains(
          classToCheck
        );
        if (prevClassState !== currentClassState) {
          prevClassState = currentClassState;
          if (currentClassState) {
            body.classList.add("h-screen", "overflow-hidden");
          } else {
            body.classList.remove("h-screen", "overflow-hidden");
          }
        }
      }
    });
  });
  observer.observe(section, { attributes: true });
});
