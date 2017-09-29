document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("mousewheel", handleScroll);
  document.addEventListener("DOMMouseScroll", handleScroll);

  function offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  function handleScroll(e) {
    const viewportHeight = window.innerHeight;
    const currentScrollPosition = window.scrollY;
    const delta = event.wheelDelta || -event.detail;

    // SECTION 1

    //  console.log("SCROLL: ", currentScrollPosition, "section b top", offset(document.getElementsByClassName("js_section_one_b")[0]).top)

    const sectionOneContainer = document.getElementsByClassName(
      "js_section_one_container"
    )[0];
    const sectionOneA = document.getElementsByClassName("js_section_one_a")[0];
    const sectionOneB = document.getElementsByClassName("js_section_one_b")[0];

    if (
      currentScrollPosition >=
      offset(document.getElementsByClassName("js_section_one_b")[0]).top
    ) {
      sectionOneB.classList.remove("section--relative");
      sectionOneB.classList.add("section--fixed");
    }

    if (
      sectionOneB.classList.contains("section--fixed") &&
      currentScrollPosition <= 800
    ) {
      sectionOneB.classList.add("section--relative");
      sectionOneB.classList.remove("section--fixed");
    }

    // SECTION 2

    const sectionTwoContainer = document.getElementsByClassName(
      "js_section_two_container"
    )[0];
    const sectionTwoA = document.getElementsByClassName("js_section_two_a")[0];
    const sectionTwoB = document.getElementsByClassName("js_section_two_b")[0];

    //console.log("SCROLL: ", currentScrollPosition, "section 2 A top", offset(document.getElementsByClassName("js_section_two_a")[0]).top)

    if (currentScrollPosition >= offset(sectionTwoA).top) {
      sectionTwoA.classList.remove("section--relative");
      sectionTwoA.classList.add("section--fixed");
    }

    if (
      sectionTwoA.classList.contains("section--fixed") &&
      currentScrollPosition <= 1600
    ) {
      sectionTwoA.classList.add("section--relative");
      sectionTwoA.classList.remove("section--fixed");
    }

    const section_two_a_25p = document.getElementsByClassName(
      "js_section_two_a_25p"
    )[0];
    const section_two_a_50p = document.getElementsByClassName(
      "js_section_two_a_50p"
    )[0];
    const section_two_a_75p = document.getElementsByClassName(
      "js_section_two_a_75p"
    )[0];
    const section_two_a_100p = document.getElementsByClassName(
      "js_section_two_a_100p"
    )[0];

    console.log("SCROLL: ", currentScrollPosition);
    console.log("SECTION 2 B TOP", offset(sectionTwoB).top);
    // console.log("SECTION TWO A 25P TOP: ", offset(section_two_a_25p).top);
    // console.log("SECTION TWO A 50P TOP: ", offset(section_two_a_50p).top);
    // console.log("SECTION TWO A 75P TOP: ", offset(section_two_a_75p).top);
    // console.log("SECTION TWO A 100P TOP: ", offset(section_two_a_100p).top);

    if (
      offset(section_two_a_100p).top <= offset(sectionTwoB).top &&
      offset(section_two_a_100p).top >= offset(sectionTwoB).top - 200
    ) {
      console.log("show the first phone slide");
    }
    if (
      offset(section_two_a_75p).top <= offset(sectionTwoB).top &&
      offset(section_two_a_75p).top >= offset(sectionTwoB).top - 200
    ) {
      console.log("show the second phone slide");
    }
    if (
      offset(section_two_a_50p).top <= offset(sectionTwoB).top &&
      offset(section_two_a_50p).top >= offset(sectionTwoB).top - 200
    ) {
      console.log("show the third phone slide");
    }
    if (
      offset(section_two_a_25p).top <= offset(sectionTwoB).top &&
      offset(section_two_a_25p).top >= offset(sectionTwoB).top - 200
    ) {
      console.log("show the fourth phone slide");
    }

    if (currentScrollPosition >= offset(sectionTwoB).top) {
      sectionTwoB.classList.remove("section--relative");
      sectionTwoB.classList.add("section--fixed");
    }

    if (
      sectionTwoB.classList.contains("section--fixed") &&
      currentScrollPosition <= 2400
    ) {
      sectionTwoB.classList.add("section--relative");
      sectionTwoB.classList.remove("section--fixed");
    }
  }
});
