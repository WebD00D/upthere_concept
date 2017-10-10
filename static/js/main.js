document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("mousewheel", handleScroll);
  document.addEventListener("DOMMouseScroll", handleScroll);


  document.getElementById("js_play-video").onclick = function(e){
    e.preventDefault();
    document.getElementsByClassName("video-modal")[0]
    .classList
    .remove("video-modal--hidden");
    document.getElementById("video").setAttribute("src", "https://player.vimeo.com/video/176397741?autoplay=1");
    document.getElementsByClassName("video-modal")[0].setAttribute("video-playing", "yes");
  }

  document.getElementsByClassName("video-modal")[0].onclick = function(){
    document.getElementsByClassName("video-modal")[0]
    .classList
    .add("video-modal--hidden");
    document.getElementById("video").setAttribute("src", "");
    document.getElementsByClassName("video-modal")[0].setAttribute("video-playing", "no");
  }


  // initialize phoneLastAnimated time
  const initTime = Date.now();
  document
    .getElementsByClassName("js-phone-container")[0]
    .setAttribute("data-phone-last-animated", initTime);

  function handleScroll(e) {

    const isMobile = window.innerWidth <= 860 ? true : false;

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
      offset(document.getElementsByClassName("js_section_one_b")[0]).top + 200
    ) {
      sectionOneB.classList.remove("section--relative");
      // sectionOneB.classList.add("section--fixed-b");
      sectionOneB.classList.add("section--fixed-b");
      updateLinks("light");
    } else {
      updateLinks("dark");
    }

    if (
      sectionOneB.classList.contains("section--fixed-b") &&
      currentScrollPosition <= 1070
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
      // sectionTwoContent.classList.remove("o-none");
      rightShape.classList.add("right-shape--visible");

      if (sectionTwoA.classList.contains("section--fixed")) {
        //  sectionTwoContent.classList.add("o-none");
      }
    } else {
      leftShape.classList.remove("left-shape--visible");
      leftShapeShadow.classList.remove("left-shape--shadow--visible");
      // sectionTwoContent.classList.add("o-none");
      rightShape.classList.remove("right-shape--visible");
    }

    if (offset(sectionOneB).top == 800 && currentScrollPosition >= 700) {
      sectionTwoContent.classList.remove("o-none");
    } else {
      if (sectionOneB.classList.contains("section--fixed-b")) {
        sectionTwoContent.classList.remove("o-none");
      } else {
        sectionTwoContent.classList.add("o-none");
      }
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

    // PHONE ANIMATION CODE...

    const phoneLastAnimated = document
      .getElementsByClassName("js-phone-container")[0]
      .getAttribute("data-phone-last-animated");

    const timeNow = Date.now();
    const delay = 1500;

    // NOTE:
    // When a section animation is initialized - set a data attribute for
    // when it was animated. If user tries scrolling again before the delay,
    // disable the scroll.

    const phoneContainer = document.getElementsByClassName(
      "js-phone-container"
    )[0];

    const phone_one = document.getElementsByClassName("js-phone-one")[0];
    const phone_two = document.getElementsByClassName("js-phone-two")[0];
    const phone_three = document.getElementsByClassName("js-phone-three")[0];
    const phone_four = document.getElementsByClassName("js-phone-four")[0];

    const delayed = phoneContainer.getAttribute("data-in-current-delay");

    const phone_one_has_animated = phoneContainer.getAttribute(
      "data-phone-one-animated"
    );
    const phone_two_has_animated = phoneContainer.getAttribute(
      "data-phone-two-animated"
    );
    const phone_three_has_animated = phoneContainer.getAttribute(
      "data-phone-three-animated"
    );
    const phone_four_has_animated = phoneContainer.getAttribute(
      "data-phone-four-animated"
    );

    if (
      offset(section_two_a_100p).top <= offset(sectionTwoB).top &&
      offset(section_two_a_100p).top >= offset(sectionTwoB).top - 200
    ) {
      //NOTE: Alot of this code will be placed in a separate function..

      // setting all other data-phone-animated to "no".
      phoneContainer.setAttribute("data-phone-two-animated", "no");
      phoneContainer.setAttribute("data-phone-three-animated", "no");
      phoneContainer.setAttribute("data-phone-four-animated", "no");

      // Are we in the middle of a delay?
      if (delayed === "yes") {
        //  Date.now() (minus) data-phone-last-animated > delay  ?
        if (timeNow - phoneLastAnimated > delay) {
          // Threshold has past. Let's set delayed to false.
          phoneContainer.setAttribute("data-in-current-delay", "no");
        } else {
          // we'll return true here for shouldAnimationDelay();
          e.preventDefault();
        }
      } else {
        // delayed === no

        // has this section already been animated in the same "section scroll session" ?
        if (phoneContainer.getAttribute("data-phone-one-animated") === "no") {
          // 1. run the animation.
          handlePhoneVisibility("js-phone-one", "show");
          handleIndicatorChange("one");

          // 2. set data-phone-last-animated to Date.now()
          phoneContainer.setAttribute("data-phone-last-animated", timeNow);
          phoneContainer.setAttribute("data-in-current-delay", "yes");
          phoneContainer.setAttribute("data-phone-one-animated", "yes");
        } else {
          // else it has an we don't need to run anything let the user scroll.
          // we'll return false here for shouldAnimationDelay();
        }
      }
    } else {
      handlePhoneVisibility("js-phone-one", false);
    }

    if (
      offset(section_two_a_75p).top <= offset(sectionTwoB).top &&
      offset(section_two_a_75p).top >= offset(sectionTwoB).top - 200
    ) {
      // setting all other data-phone-animated to "no".
      phoneContainer.setAttribute("data-phone-one-animated", "no");
      phoneContainer.setAttribute("data-phone-three-animated", "no");
      phoneContainer.setAttribute("data-phone-four-animated", "no");

      // Are we in the middle of a delay?
      if (delayed === "yes") {
        //  Date.now() (minus) data-phone-last-animated > delay  ?
        if (timeNow - phoneLastAnimated > delay) {
          // Threshold has past. Let's set delayed to false.
          phoneContainer.setAttribute("data-in-current-delay", "no");
        } else {
          // we'll return true here for shouldAnimationDelay();
          e.preventDefault();
        }
      } else {
        // delayed === no

        // has this section already been animated in the same "section scroll session" ?
        if (phoneContainer.getAttribute("data-phone-two-animated") === "no") {
          // 1. run the animation.
          handlePhoneVisibility("js-phone-two", "show");
          handleIndicatorChange("two");

          // 2. set data-phone-last-animated to Date.now()
          phoneContainer.setAttribute("data-phone-last-animated", timeNow);
          phoneContainer.setAttribute("data-in-current-delay", "yes");
          phoneContainer.setAttribute("data-phone-two-animated", "yes");
        } else {
          // else it has an we don't need to run anything let the user scroll.
          // we'll return false here for shouldAnimationDelay();
        }
      }
    } else {
      handlePhoneVisibility("js-phone-two", false);
    }

    if (
      offset(section_two_a_50p).top <= offset(sectionTwoB).top &&
      offset(section_two_a_50p).top >= offset(sectionTwoB).top - 200
    ) {
      // handlePhoneVisibility("js-phone-three", true);

      // setting all other data-phone-animated to "no".
      phoneContainer.setAttribute("data-phone-one-animated", "no");
      phoneContainer.setAttribute("data-phone-two-animated", "no");
      phoneContainer.setAttribute("data-phone-four-animated", "no");

      // Are we in the middle of a delay?
      if (delayed === "yes") {
        //  Date.now() (minus) data-phone-last-animated > delay  ?
        if (timeNow - phoneLastAnimated > delay) {
          // Threshold has past. Let's set delayed to false.
          phoneContainer.setAttribute("data-in-current-delay", "no");
        } else {
          // we'll return true here for shouldAnimationDelay();
          e.preventDefault();
        }
      } else {
        // delayed === no

        // has this section already been animated in the same "section scroll session" ?
        if (phoneContainer.getAttribute("data-phone-three-animated") === "no") {
          // 1. run the animation.
          handlePhoneVisibility("js-phone-three", "show");
          handleIndicatorChange("three");

          // 2. set data-phone-last-animated to Date.now()
          phoneContainer.setAttribute("data-phone-last-animated", timeNow);
          phoneContainer.setAttribute("data-in-current-delay", "yes");
          phoneContainer.setAttribute("data-phone-three-animated", "yes");
        } else {
          // else it has an we don't need to run anything let the user scroll.
          // we'll return false here for shouldAnimationDelay();
        }
      }
    } else {
      handlePhoneVisibility("js-phone-three", false);
    }

    if (
      offset(section_two_a_25p).top <= offset(sectionTwoB).top &&
      offset(section_two_a_25p).top >= offset(sectionTwoB).top - 200
    ) {
      // setting all other data-phone-animated to "no".
      phoneContainer.setAttribute("data-phone-one-animated", "no");
      phoneContainer.setAttribute("data-phone-two-animated", "no");
      phoneContainer.setAttribute("data-phone-three-animated", "no");

      // Are we in the middle of a delay?
      if (delayed === "yes") {
        //  Date.now() (minus) data-phone-last-animated > delay  ?
        if (timeNow - phoneLastAnimated > delay) {
          // Threshold has past. Let's set delayed to false.
          phoneContainer.setAttribute("data-in-current-delay", "no");
        } else {
          // we'll return true here for shouldAnimationDelay();
          e.preventDefault();
        }
      } else {
        // delayed === no

        // has this section already been animated in the same "section scroll session" ?
        if (phoneContainer.getAttribute("data-phone-four-animated") === "no") {
          // 1. run the animation.
          handlePhoneVisibility("js-phone-four", "show");
          handleIndicatorChange("four");

          // 2. set data-phone-last-animated to Date.now()
          phoneContainer.setAttribute("data-phone-last-animated", timeNow);
          phoneContainer.setAttribute("data-in-current-delay", "no");
          phoneContainer.setAttribute("data-phone-four-animated", "yes");
        } else {
          // else it has an we don't need to run anything let the user scroll.
          // we'll return false here for shouldAnimationDelay();
        }
      }

      //handlePhoneVisibility("js-phone-four", true);
    } else {
      handlePhoneVisibility("js-phone-four", false);
    }

    // END PHONE ANIMATION CODE...

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

    //  const phone_four = document.getElementsByClassName("js-phone-four")[0];

    if (
      offset(section_three_a).top === 3200 &&
      currentScrollPosition > 3400 &&
      phone_four.classList.contains("phone-slide--visible")
    ) {
      updateLinks("light");
    } else {
      //updateLinks("dark");
    }


    // Handle footer phone animation..
    const footerSection = document.getElementsByClassName("section-three")[0];
    const footerPhones = document.getElementsByClassName("js_footer-phones")[0];

    if ( currentScrollPosition >= offset(footerSection).top + 200 ) {
      // animate in the phones
      footerPhones.classList.remove("opacity-none");
      footerPhones.classList.add("js_footer-phones--active");
    } else {
      // hide 'em
      footerPhones.classList.add("opacity-none");
      footerPhones.classList.remove("js_footer-phones--active");
    }

    // if left / right shape don't have the visibility class, then reset the what phone has been
    // animated data attributes.

    const shapeToCheck = document.getElementsByClassName("left-shape")[0];

    if (!shapeToCheck.classList.contains("left-shape--visible")) {
      const phoneContainerDup = document.getElementsByClassName(
        "js-phone-container"
      )[0];
      phoneContainerDup.setAttribute("data-phone-one-animated", "no");
      phoneContainerDup.setAttribute("data-phone-two-animated", "no");
      phoneContainerDup.setAttribute("data-phone-three-animated", "no");
      phoneContainerDup.setAttribute("data-phone-four-animated", "no");
    }


  } // end handleScroll
});

function handleIndicatorChange(activeSlide) {
  const indicators = document.getElementsByClassName(
    "slide-indicators__indicator"
  );

  for (var i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("slide-indicators__indicator--active");
  }

  document
    .getElementsByClassName("js_indicator_" + activeSlide)[0]
    .classList.add("slide-indicators__indicator--active");
}

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

      const section_one_b = document.getElementsByClassName(
        "js_section_one_b"
      )[0];

      if (!section_one_b.classList.contains("section--fixed-b")) {
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

function handlePhoneVisibility(el, show) {
  const sectionTwoB = document.getElementsByClassName("js_section_two_b")[0];

  if (show) {
    document
      .getElementsByClassName(el)[0]
      .classList.add("phone-slide--visible");
  } else {
    document
      .getElementsByClassName(el)[0]
      .classList.remove("phone-slide--visible");

    if (el === "js-phone-four") {
      document
        .getElementsByClassName("js-phone-container")[0]
        .setAttribute("data-phone-four-animated", "no");
    }
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
