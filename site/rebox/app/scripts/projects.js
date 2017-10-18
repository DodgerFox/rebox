
var swiper = new Swiper('.welcome-slider', {
        pagination: true,
        paginationClickable: true,
        slidesPerView: 1,
        nextButton: '.welcome-slider__pagination__right',
        prevButton: '.welcome-slider__pagination__left',
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



function menuDropdown() {
  var button = $('li.navigation__item-drop'),
      dropdown = $('.dropdown-header'),
      arrow = $('.navigation__item-arrow'),
      index = false;
  $(button).click(function () {
    if (index == false) {
      $(dropdown).addClass('dropdown-header_droped')
      $(arrow).addClass('navigation__item-arrow--active')
      index = true
    }else{
      $(dropdown).removeClass('dropdown-header_droped')
      $(arrow).removeClass('navigation__item-arrow--active')
      index = false      
    }
  })
}
menuDropdown()

function basketDropdown() {
  var button = $('.basket__link'),
      dropdown = $('.basket-drop'),
      arrow = $('.header__navigation__item-arrow'),
      index = false;
  $(button).click(function () {
    if (index == false) {
      $(dropdown).addClass('basket-drop_droped')
      $(arrow).addClass('header__navigation__item-arrow--active')
      index = true
    }else{
      $(dropdown).removeClass('basket-drop_droped')
      $(arrow).removeClass('header__navigation__item-arrow--active')
      index = false      
    }
  })
}
basketDropdown()

function mobileDropdown() {
  var button = $('.mobile'),
      dropdown = $('.dropdown-mobile'),
      index = false;
  $(button).click(function () {
    if (index == false) {
      $(dropdown).addClass('dropdown-mobile_droped')
      index = true
    }else{
      $(dropdown).removeClass('dropdown-mobile_droped')
      index = false      
    }
  })
}
mobileDropdown()
