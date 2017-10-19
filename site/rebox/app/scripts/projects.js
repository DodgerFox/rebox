
var swiper = new Swiper('.welcome-slider', {
        pagination: true,
        paginationClickable: true,
        slidesPerView: 1,
        nextButton: '.welcome-slider__pagination__right',
        prevButton: '.welcome-slider__pagination__left',
        autoplay: {
          delay: 5000,
        }
    });


var swiper = new Swiper('.how-this-work__slider', {
        pagination: true,
        paginationClickable: true,
        slidesPerView: 1,
        nextButton: '.how-this-work__pagination__right',
        prevButton: '.how-this-work__pagination__left',
    });

var swiper = new Swiper('.our-cooks__slider', {
        pagination: true,
        paginationClickable: true,
        slidesPerView: 1,
        nextButton: '.how-this-work__pagination__right',
        prevButton: '.how-this-work__pagination__left',
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