$(() => {

  // TOGGLE MOBILE MENU ON CLICK
    $(".mobile-menu").on('click', () => {
      // Toggles display property of hide on/off
      $(".navigation-menu").slideToggle("slow");
      // Dims background while menu is open
      $('article').toggleClass('dim')
    });
  
  
  
  // CAROUSEL
    // https://github.com/Pickles-GitHub-Classroom/corgi-carousel-bryanstark1
  
    // Variable for starting frame
    let currentIndex = 0;
    // Grab image carousel
    const $carouselImgs = $('.carousel-images').children();
    // Grab text carousel
    const $carouselText = $('.carousel-text').children();
  
    // Variable for total number of slides in carousel (like indexes of an array)
    const numOfIndexes = $('.carousel-images').children().length - 1;
  
    // .children().eq() behaves like an array with indexes starting from 0
  
    // NEXT BUTTON
    $('.next').on('click', () => {
      // Hide current frame
      $carouselImgs.eq(currentIndex).css('display', 'none');
      $carouselText.eq(currentIndex).css('display', 'none');
      // If current frame is less that total amount of frames
      if (currentIndex < numOfIndexes) {
        // Increase frame
        currentIndex++;
      // Else if current frame is more than total amount of frames
      } else {
        // Reset to zero
        currentIndex = 0;
      }
      // Show current frame
      $carouselImgs.eq(currentIndex).css('display', 'block');
      $carouselText.eq(currentIndex).css('display', 'block');
    })
    
    // PREVIOUS BUTTON
    $('.previous').on('click', () => {
      // Hide current frame
      $carouselImgs.eq(currentIndex).css('display', 'none');
      $carouselText.eq(currentIndex).css('display', 'none');
      // If current frame is greater than zero
      if (currentIndex > 0) {
        // Decrease frame
        currentIndex--;
      // Else if current frame is less than or equal to zero
      } else {
        // Reset to end frame
        currentIndex = numOfIndexes;
      }
      // Show currrent frame
      $carouselImgs.eq(currentIndex).css('display', 'block');
      $carouselText.eq(currentIndex).css('display', 'block');
     })
  
  
  
  // MODAL
    // Grab element that opens modal
    const $openBtn = $('#email-button');
    // Grab modal element
    const $modal = $('#modal');
    // Grab element that closes modal
    const $closeBtn = $('#close');
  
    // Open modal on 'Email Me' button click
    $openBtn.on('click', () => {
      $modal.css('display', 'flex')
    });
  
    // Close modal on close button click
    $closeBtn.on('click', () => {
      $modal.css('display', 'none')
    });
  });