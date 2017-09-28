document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("mousewheel", handleScroll);
  document.addEventListener("DOMMouseScroll", handleScroll);

  const init_scroll_time = new Date().getTime();
    document
      .getElementsByClassName("homepage")[0]
      .setAttribute("data-app-last-animated", init_scroll_time);

      console.log("INIT SCROL")

  function offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  function handleScroll(e) {
    const block_one = document.getElementsByClassName("js_block_one")[0];
    const block_two = document.getElementsByClassName("js_block_two")[0];
    const block_three = document.getElementsByClassName("js_block_three")[0];
    const block_four = document.getElementsByClassName("js_block_four")[0];

    const total_block_height =
      block_one.scrollHeight +
      block_two.scrollHeight +
      block_three.scrollHeight +
      block_four.scrollHeight;

    const current_scrolling_position = window.scrollY;

    const block_one_top = offset(block_one);
    const block_two_top = offset(block_two);
    const block_three_top = offset(block_three);
    const block_four_top = offset(block_four);

    const block_one_bottom = block_one_top.top + block_one.scrollHeight;
    const block_two_bottom = block_two_top.top + block_two.scrollHeight;
    const block_three_bottom = block_three_top.top + block_three.scrollHeight;
    const block_four_bottom = block_four_top.top + block_four.scrollHeight;

    // NEW PERCENTAGE LOGIC

    let percent_through_block_one;
    let percent_through_block_two;
    let percent_through_block_three;
    let percent_through_block_four;

    let converted_scroll_position;
    let converted_offset;

    // 1. Check what block range we are in based off our scroll position, and the top/bottom of the block.

    // block 1?
    if ( current_scrolling_position >= 0 && current_scrolling_position <= 1402 ) {
      converted_offset = current_scrolling_position - block_one_top.top;
      converted_scroll_position = Math.round( (converted_offset / block_one.scrollHeight) * 100 ) / 100;
      //console.log(`You've scrolled through ${ converted_scroll_position }% of block 1`);

      document.getElementsByClassName("animation_object__one")[0].style.transform = `translate3d(0, -${converted_scroll_position * 100}%, 0)`;


      if ( converted_scroll_position >= 1.12 ) {
        document.getElementsByClassName("js_block_two__test-shape")[0].style.transform = `translate3d(${(135)}%,0, 0)`;
      } else {
        document.getElementsByClassName("js_block_two__test-shape")[0].style.transform = `translate3d(${(converted_scroll_position * 130)}%,0, 0)`;
        document.getElementsByClassName("js_block_two__test-shape-two")[0].style.transform = `translate3d(-${(converted_scroll_position * 75)}%,0, 0)`;
      }


      if ( converted_scroll_position >= .4 ) {
        document.getElementsByClassName("animation_object__content__one")[0].classList.remove("animation_object__content--hidden");
      } else {
        document.getElementsByClassName("animation_object__content__one")[0].classList.add("animation_object__content--hidden");
      }


      if ( converted_scroll_position >= .5 ) {
        document.getElementsByClassName("js_block_two")[0].classList.add("bg-blue");
      } else {
        document.getElementsByClassName("js_block_two")[0].classList.remove("bg-blue");
      }

    }

    // block 2?
    if (
      current_scrolling_position >= 701 &&
      current_scrolling_position <= 1402
    ) {

      converted_offset = current_scrolling_position - block_two_top.top;
      converted_scroll_position = Math.round( (converted_offset / block_two.scrollHeight) * 100 ) / 100;

      // handle app screen scrolling logic here...
      const scroll_locked = document.getElementsByClassName("homepage")[0].getAttribute("data-scroll-locked");
      const delta = e.wheelDelta || -e.detail;
      let scrolling_down = delta < 0 ? true : false;


      if ( converted_scroll_position >= 0.05 ) {

        const timeNow = new Date().getTime();
        const lastAnimated = document.getElementsByClassName("homepage")[0].getAttribute("data-app-last-animated");
        const animationDelay = 1500;
        const active_app_screen = document.getElementsByClassName("homepage")[0].getAttribute("data-active-section");
        const scroll_locked = document.getElementsByClassName("homepage")[0].getAttribute("data-scroll-locked");


        if ( scroll_locked === "yes" ) {
          e.preventDefault();
        }


        // TODO: If we're scrolling up and we're on the fourth slide, and have just entered the 2nd block, let the user
        // scroll to the top of the block until we start animating the rest of the slides....



        if ( timeNow - parseInt(lastAnimated) >= animationDelay) {



          document.getElementsByClassName("homepage")[0].setAttribute("data-app-last-animated", timeNow);

          let next_screen_to_animate;

          console.log("active_app_screen", active_app_screen);

          switch (active_app_screen) {
            case "none":
              next_screen_to_animate = scrolling_down ? "one" : "one";
              break;
            case "one":
              next_screen_to_animate = scrolling_down ? "two" : "one";
              break;
            case "two":
              next_screen_to_animate = scrolling_down ? "three" : "one";
              break;
            case "three":
              next_screen_to_animate = scrolling_down ? "four" : "two";
              break;
            case "four":
              next_screen_to_animate = scrolling_down ? "four" : "three";
              break;
            default:
          }



            if ( active_app_screen != "none" ) {
              document.getElementsByClassName(`js_screen_${active_app_screen}`)[0].classList.add("section-app-screen--hidden");
            }

            document.getElementsByClassName(`js_screen_${next_screen_to_animate}`)[0].classList.remove("section-app-screen--hidden");

            document.getElementsByClassName("homepage")[0].setAttribute("data-active-section", next_screen_to_animate)

            if ( delta < 0 && active_app_screen === "four" ) {
              document.getElementsByClassName("homepage")[0].setAttribute("data-scroll-locked", "no");
            }

        }



      }


    }

    // block 3?
    if (
      current_scrolling_position >= 1403 &&
      current_scrolling_position <= 2104
    ) {
      converted_offset = current_scrolling_position - block_three_top.top;
      converted_scroll_position = Math.round( (converted_offset / block_three.scrollHeight) * 100 ) / 100;
      console.log(`You've scrolled through ${ converted_scroll_position }% of block 3`);
    }

    // block 4?
    if (
      current_scrolling_position >= 2105 &&
      current_scrolling_position <= 2806
    ) {
      converted_offset = current_scrolling_position - block_four_top.top;
      converted_scroll_position = Math.round( (converted_offset / block_four.scrollHeight) * 100 ) / 100;
      console.log(`You've scrolled through ${ converted_scroll_position }% of block 4`);
    }

    // END NEW PERCENTAGE LOGIC

    // get percentage of in view for each one?

    const block_one_scrolled_percent =
      Math.round(current_scrolling_position / (block_one_top.top + 700) * 100) /
      100;
    const block_two_scrolled_percent =
      Math.round(current_scrolling_position / (block_two_top.top + 700) * 100) /
      100;
    const block_three_scrolled_percent =
      Math.round(
        current_scrolling_position / (block_three_top.top + 700) * 100
      ) / 100;

    // console.log(
    //   "BLOCK ONE:", block_one_scrolled_percent,
    //   "  BLOCK TWO:", block_two_scrolled_percent,
    //   "  BLOCK THREE:", block_three_scrolled_percent
    // );

    // HANDLES SLIDE ONE


    // if ( block_one_scrolled_percent > .30 ) {
    //     document.getElementsByClassName("animation_object__content__one")[0].classList.remove("animation_object__content--hidden");
    // } else {
    //     document.getElementsByClassName("animation_object__content__one")[0].classList.add("animation_object__content--hidden");
    // }

    // HANDLES SLIDE TWO

    //document.getElementsByClassName("animation_object__two")[0].style.transform = `translate3d(-${ 100 - (block_two_scrolled_percent * 300)}%, -${block_two_scrolled_percent * 300}%, 0) `;
    //document.getElementsByClassName("animation_object__three")[0].style.transform = `translate3d(-${ block_two_scrolled_percent * 300 }%, -${block_two_scrolled_percent * 300}%, 0)`;

    const animation_object_three_x_coordinate =
      150 - block_two_scrolled_percent * 400;
    if (animation_object_three_x_coordinate <= 0) {
      //document.getElementsByClassName("animation_object__three")[0].style.transform = `translate3d(0%, -${block_two_scrolled_percent * 300}%, 0)`;
    } else {
      // document.getElementsByClassName("animation_object__three")[0].style.transform = `translate3d(${ animation_object_three_x_coordinate }%, -${block_two_scrolled_percent * 300}%, 0)`;
    }

    // TODO: Figure out how to pull slide three in from the right..

    // NOTE: Based off the active section height, check to see where
    //       in that section they are currnetly in their scroll.
    //       Then use that as a timeline to show 'x' percent of whatevever shape / slide
    //       needs to be animated.
    // setup
    // const current_scroll_position = window.scrollY;
    // const section_block_scroll_height = 700;
    // const total_height = 2100;
    // const current_scroll_percentage =  Math.round((current_scroll_position / total_height) * 300);
    //
    // //console.log(current_scroll_position);
    //
    // // content blocks
    // const block_two_content = document.getElementsByClassName("section-content__two")[0];
    //
    // // shapes
    // const shape_block_one = document.getElementsByClassName("shape-block__one")[0];
    // const shape_block_two = document.getElementsByClassName("shape-block__two")[0];
    //
    // // animations
    // shape_block_one.style.transform = `translate3d(0, -${current_scroll_percentage}%, 0)`;
    // //shape_block_two.style.transform = `translate3d(-${ current_scroll_percentage * 100 / 10}%, -${current_scroll_percentage}%, 0)`;
    //
    // // content reveals
    // if ( current_scroll_position >= 250 ) { //show section two content
    //   block_two_content.classList.remove("section-content--hidden");
    // } else {
    //   block_two_content.classList.add("section-content--hidden");
    // }
  } // end handleScroll
});
