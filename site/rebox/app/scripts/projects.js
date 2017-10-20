window.onload = function () {
  initSwiperMini()
  resizeWindow()
}

var swiper = new Swiper('.welcome-slider', {
        pagination: '.welcome-slider__dots',
        paginationClickable: true,
        slidesPerView: 1,
        nextButton: '.welcome-slider__pagination .pagination__right',
        prevButton: '.welcome-slider__pagination .pagination__left'
        
    });


var swiper = new Swiper('.how-this-work__slider', {
        pagination: '.how-this-work__dots',
        paginationClickable: true,
        slidesPerView: 1,
        nextButton: '.how-this-work__pagination .pagination__right',
        prevButton: '.how-this-work__pagination .pagination__left',
    });

var swiper = new Swiper('.our-cooks__slider', {
        pagination: '.our-cooks__dots',
        paginationClickable: true,
        slidesPerView: 1,
        nextButton: '.our-cooks__pagination .pagination__right',
        prevButton: '.our-cooks__pagination .pagination__left',
    });


function bigDropdownWrap() {
    var buttonMenu = $('li.navigation__item-drop'),
      dropdownMenu = $('.dropdown-header'),
      arrowMenu = $('.navigation__item-arrow'),
      indexMenu = false;
    var buttonBasket = $('.basket__link'),
      dropdownBasket = $('.basket-drop'),
      arrowBasket = $('.basket__arrow'),
      indexBasket = false;
    var buttonMobile = $('.mobile'),
      dropdownMobile = $('.dropdown-mobile'),
      arrowMobile = $('.mobile__arrow'),
      indexMobile = false;
    var buttonGamburger = $('.gamburger'),
        buttonGamburgerClose = $('.gamburger__icon-close'),
        buttonGamburgerMain = $('.gamburger__icon'),
        mobileMenu = $('.navigation'),
        mobileIndex = false;


function mobileMenuClose() {
    $(buttonGamburger).removeClass('gamburger--close')
    $(mobileMenu).removeClass('navigation--active')
    $(buttonGamburgerClose).removeClass('gamburger__icon-close--visible')
    $(buttonGamburgerMain).removeClass('gamburger__icon--close')
    mobileIndex = false
}

function dropdownMobileClose() {
      $(dropdownMobile).removeClass('dropdown-mobile_droped')
      $(buttonMobile).removeClass('mobile--active')
      $(arrowMobile).removeClass('mobile__arrow--active')
      indexMobile = false 
}

function dropdownBasketClose() {
      $(dropdownBasket).removeClass('basket-drop_droped')
      $(arrowBasket).removeClass('basket__arrow--active')
      indexBasket = false  
}

function dropdownMenuClose() {
  $(dropdownMenu).removeClass('dropdown-header_droped')
      $(buttonMenu).removeClass('navigation__item-drop--active')
      $(arrowMenu).removeClass('navigation__item-arrow--active')
      indexMenu = false  
}

  $(buttonGamburger).click(function () {
    if (mobileIndex == false) {
        $(buttonGamburger).addClass('gamburger--close')
        $(mobileMenu).addClass('navigation--active')
        $(buttonGamburgerClose).addClass('gamburger__icon-close--visible')
        $(buttonGamburgerMain).addClass('gamburger__icon--close')
        mobileIndex = true
      }else{
        mobileMenuClose()
      }
  })

  $(buttonMenu).click(function () {
    if (indexMenu == false) {
      $(dropdownMenu).addClass('dropdown-header_droped')
      $(buttonMenu).addClass('navigation__item-drop--active')
      $(arrowMenu).addClass('navigation__item-arrow--active')
      indexMenu = true
      dropdownBasketClose()
      dropdownMobileClose()
    }else{
      dropdownMenuClose()
    }
  })



  
  $(buttonBasket).click(function () {
    if (indexBasket == false) {
      $(dropdownBasket).addClass('basket-drop_droped')
      $(arrowBasket).addClass('basket__arrow--active')
      indexBasket = true
      dropdownMobileClose()
      dropdownMenuClose()
    }else{
      dropdownBasketClose()
    }
  })



  
  $(buttonMobile).click(function () {
    if (indexMobile == false) {
      $(dropdownMobile).addClass('dropdown-mobile_droped')
      $(buttonMobile).addClass('mobile--active')
      $(arrowMobile).addClass('mobile__arrow--active')
      indexMobile = true
      dropdownMenuClose()
      dropdownBasketClose()
    }else{
      dropdownMobileClose()     
    }
  })


}

bigDropdownWrap()

function initSwiperMini() {
  console.log('working!')
  var mainWindow =  window.innerWidth;

    if (mainWindow < 840) {
      var swiperFeedbacks = new Swiper('.feedbacks__container', {
        pagination: '.feedbacks__dots',
        paginationClickable: true,
        slidesPerView: 1,
        nextButton: '.feedbacks__pagination .pagination-basic__right',
        prevButton: '.feedbacks__pagination .pagination-basic__left',
      });
      var swiperWhy = new Swiper('.why-yes__container', {
        pagination: '.why-yes__dots',
        paginationClickable: true,
        slidesPerView: 1,
        nextButton: '.why-yes__pagination .pagination-basic__right',
        prevButton: '.why-yes__pagination .pagination-basic__left',
      });

    }else{
      if (swiperFeedbacks){
        console.log('yeah')
          swiperFeedbacks.destroy();
          swiperFeedbacks = undefined;
      }
    }
  }



function resizeWindow() {
  window.onresize = function () {
    initSwiperMini()
  }
}