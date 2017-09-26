

document.addEventListener("DOMContentLoaded", function() {

  document.addEventListener("mousewheel", handleScroll);
  document.addEventListener("DOMMouseScroll", handleScroll);


  function handleScroll() {

    // NOTE: Based off the active section height, check to see where
    //       in that section they are currnetly in their scroll.
    //       Then use that as a timeline to show 'x' percent of whatevever shape / slide
    //       needs to be animated.

    const currentScrollPosition = window.scrollY;
    const currentSection = document.getElementsByClassName("homepage")[0].getAttribute("data-active-section");
    const currentSectionContent = document.getElementsByClassName("section-slide")[0]

    const sectionScrollHeight = document.getElementsByClassName(`section-${currentSection}`)[0].scrollHeight;
    let sectionScrolledPercent = Math.round( (currentScrollPosition / sectionScrollHeight) * 100)
    //let sectionScrolledPercentY = Math.round( (currentScrollPosition / sectionScrollHeight) * 140)

    console.log(sectionScrolledPercent)

    const shapeToAnimate = document.getElementsByClassName("section-two__shape")[0];

    shapeToAnimate.style.transform = `translate3d(0, -${sectionScrolledPercent}%, 0)`;



    //shapeToAnimate.style.transform = `translate3d(${80 - sectionScrolledPercentX}%, ${80- sectionScrolledPercentY}%, 0) rotate(65deg)`;
    // shapeToAnimate.style.top = -sectionScrolledPercentY / 150 + '%';
    //
    // if ( ( 80- sectionScrolledPercentX) <= -30 ) {
    //   currentSectionContent.classList.remove('section-two__content--hidden')
    // } else {
    //   currentSectionContent.classList.add('section-two__content--hidden')
    // }

    if ( sectionScrolledPercent >= 40 ) {
      currentSectionContent.classList.remove('section-slide--hidden')
    } else {
      currentSectionContent.classList.add('section-slide--hidden')
    }







  } // end handleScroll


})
