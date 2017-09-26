

document.addEventListener("DOMContentLoaded", function() {

  document.addEventListener("mousewheel", handleScroll);
  document.addEventListener("DOMMouseScroll", handleScroll);


  function handleScroll() {

    // NOTE: Based off the active section height, check to see where
    //       in that section they are currnetly in their scroll.
    //       Then use that as a timeline to show 'x' percent of whatevever shape / slide
    //       needs to be animated.

    // setup
    const current_scroll_position = window.scrollY;
    const section_block_scroll_height = 700;
    const total_height = 2100;
    const current_scroll_percentage =  Math.round((current_scroll_position / total_height) * 300);

    console.log(current_scroll_position);

    // content blocks
    const block_two_content = document.getElementsByClassName("section-content__two")[0];

    // shapes
    const shape_block_one = document.getElementsByClassName("shape-block__one")[0];
    const shape_block_two = document.getElementsByClassName("shape-block__two")[0];

    // animations
    shape_block_one.style.transform = `translate3d(0, -${current_scroll_percentage}%, 0)`;

    if ( current_scroll_position >= 250 ) { //show section two content
      block_two_content.classList.remove("section-content--hidden");
    } else {
      block_two_content.classList.add("section-content--hidden");
    }


    // for any shapes after the firt slide, we'll keep each section to its own timeline.

    if ( current_scroll_position >= 415 ) { //show section two and three shapes

      const section_block_two_top = 700;
      const section_block_two_bottom = 1400;

      console.log(current_scroll_percentage);

    }









  } // end handleScroll


})
