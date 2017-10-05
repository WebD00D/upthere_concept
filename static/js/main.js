document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("mousewheel", handleScroll);
  document.addEventListener("DOMMouseScroll", handleScroll);



  // initialize phoneLastAnimated time
  const initTime = Date.now();
  document
    .getElementsByClassName("js-phone-container")[0]
    .setAttribute("data-phone-last-animated", initTime);

  function handleScroll(e) {
    const viewportHeight = window.innerHeight;
    const currentScrollPosition = window.scrollY;
    const delta = event.wheelDelta || -event.detail;

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
      sectionOneB.classList.add("section--fixed-b");
      updateLinks("light");
    } else {
      updateLinks("dark");
    }

    if (
      sectionOneB.classList.contains("section--fixed-b") &&
      currentScrollPosition <= 800 // was 800
    ) {
      sectionOneB.classList.add("section--relative");
      sectionOneB.classList.remove("section--fixed-b");
    }

    // SECTION 2

    const sectionTwoContainer = document.getElementsByClassName(
      "js_section_two_container"
    )[0];
    const sectionTwoA = document.getElementsByClassName("js_section_two_a")[0];
    const sectionTwoB = document.getElementsByClassName("js_section_two_b")[0];

    const section_one_b_25p = document.getElementsByClassName(
      "js_section_one_b_25p"
    )[0];
    const section_one_b_50p = document.getElementsByClassName(
      "js_section_one_b_50p"
    )[0];
    const section_one_b_75p = document.getElementsByClassName(
      "js_section_one_b_75p"
    )[0];
    const section_one_b_100p = document.getElementsByClassName(
      "js_section_one_b_100p"
    )[0];

    const leftShape = document.getElementsByClassName("left-shape")[0];
    const leftShapeShadow = document.getElementsByClassName(
      "left-shape--shadow"
    )[0];

    const rightShape = document.getElementsByClassName("right-shape")[0];

    const sectionTwoContent = document.getElementsByClassName(
      "js_section-two-content-box"
    )[0];

    if (sectionOneB.classList.contains("section--fixed-b")) {
      leftShape.classList.add("left-shape--visible");
      leftShapeShadow.classList.add("left-shape--shadow--visible");
      sectionTwoContent.classList.remove("o-none");
      rightShape.classList.add("right-shape--visible");

      if (sectionTwoA.classList.contains("section--fixed")) {
        sectionTwoContent.classList.add("o-none");
      }
    } else {
      leftShape.classList.remove("left-shape--visible");
      leftShapeShadow.classList.remove("left-shape--shadow--visible");
      sectionTwoContent.classList.add("o-none");
      rightShape.classList.remove("right-shape--visible");
    }

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

    if (sectionTwoA.classList.contains("section--relative")) {
      leftShape.style.left =
        offset(section_one_b_25p).top / 1600 * 150 - 150 + "%";

      leftShapeShadow.style.left =
        offset(section_one_b_25p).top / 1600 * 150 - 150 + "%";

      rightShape.style.right =
        offset(section_one_b_25p).top / 1600 * 150 - 150 + "%";
    } else {
      leftShape.style.left = "0.0%";
      leftShapeShadow.style.left = "0%";
      rightShape.style.right = "-0.05%";

      updateLinks("dark");
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

    const phoneLastAnimated = document
      .getElementsByClassName("js-phone-container")[0]
      .getAttribute("data-phone-last-animated");

    const timeNow = Date.now();
    const delay = 1500;

    if (
      offset(section_two_a_100p).top <= offset(sectionTwoB).top &&
      offset(section_two_a_100p).top >= offset(sectionTwoB).top - 200
    ) {
      handlePhoneVisibility("js-phone-one", true);
    } else {
      handlePhoneVisibility("js-phone-one", false);
    }

    if (
      offset(section_two_a_75p).top <= offset(sectionTwoB).top &&
      offset(section_two_a_75p).top >= offset(sectionTwoB).top - 200
    ) {
      handlePhoneVisibility("js-phone-two", true);
    } else {
      handlePhoneVisibility("js-phone-two", false);
    }

    if (
      offset(section_two_a_50p).top <= offset(sectionTwoB).top &&
      offset(section_two_a_50p).top >= offset(sectionTwoB).top - 200
    ) {
      handlePhoneVisibility("js-phone-three", true);
    } else {
      handlePhoneVisibility("js-phone-three", false);
    }

    if (
      offset(section_two_a_25p).top <= offset(sectionTwoB).top &&
      offset(section_two_a_25p).top >= offset(sectionTwoB).top - 200
    ) {
      handlePhoneVisibility("js-phone-four", true);
    } else {
      handlePhoneVisibility("js-phone-four", false);
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

    const section_three_a = document.getElementsByClassName(
      "js_section_three_a"
    )[0];
    console.log("top", offset(section_three_a).top, currentScrollPosition);

    const phone_four = document.getElementsByClassName("js-phone-four")[0];

    if (
      offset(section_three_a).top === 3200 &&
      currentScrollPosition > 3400 &&
      phone_four.classList.contains("phone-slide--visible")
    ) {
      updateLinks("light");
    } else {
      //updateLinks("dark");
    }
  } // end handleScroll
});

function updateLinks(shade) {

  const currentScrollPosition = window.scrollY;
  const navDivs = document
    .getElementsByClassName("navbar__links")[0]
    .getElementsByTagName("div");

  switch (shade) {
    case "light":
      // set links to be white;
      for (var i = 0; i < navDivs.length; i++) {
        navDivs[i].classList.add("white");
      }

      document
        .getElementsByClassName("js_signup-button")[0]
        .classList.add("upthere_button--white");

      const section_one_b = document.getElementsByClassName("js_section_one_b")[0]

      if ( !section_one_b.classList.contains("section--fixed-b") ) {
        document
          .getElementsByClassName("logo-link-wrap")[0]
          .classList.add("logo-link-wrap--white");
      }

      const section_three_a = document.getElementsByClassName(
        "js_section_three_a"
      )[0];
      const phone_four = document.getElementsByClassName("js-phone-four")[0];

      if (
        offset(section_three_a).top === 3200 &&
        currentScrollPosition > 3400 &&
        phone_four.classList.contains("phone-slide--visible")
      ) {
        document
          .getElementsByClassName("logo-link-wrap")[0]
          .classList.add("logo-link-wrap--white");
      }


      break;
    case "dark":
      // set linksto be dark;
      for (var i = 0; i < navDivs.length; i++) {
        navDivs[i].classList.remove("white");
      }

      document
        .getElementsByClassName("js_signup-button")[0]
        .classList.remove("upthere_button--white");

        document
          .getElementsByClassName("logo-link-wrap")[0]
          .classList.remove("logo-link-wrap--white");

      break;
    default:
  }
}

function canIAnimate(lastAnimated, currentTime, delay) {
  if (currentTime - lastAnimated > delay) {
    return true;
  }
  return false;
}

function handlePhoneVisibility(el, show) {
  if (show) {
    document
      .getElementsByClassName(el)[0]
      .classList.add("phone-slide--visible");
  } else {
    document
      .getElementsByClassName(el)[0]
      .classList.remove("phone-slide--visible");
  }
}

function setLastAnimatedTime(time) {
  document
    .getElementsByClassName("js-phone-container")[0]
    .setAttribute("data-phone-last-animated", time);
}


function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
