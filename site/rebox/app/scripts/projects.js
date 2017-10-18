
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
  var button = $('li.header__navigation__item-drop'),
      dropdown = $('.dropdown-header'),
      arrow = $('.header__navigation__item-arrow'),
      index = false;
  $(button).click(function () {
    if (index == false) {
      $(dropdown).addClass('dropdown-header_droped')
      $(arrow).addClass('header__navigation__item-arrow--active')
      index = true
    }else{
      $(dropdown).removeClass('dropdown-header_droped')
      $(arrow).removeClass('header__navigation__item-arrow--active')
      index = false      
    }
  })
}
menuDropdown()

function basketDropdown() {
  var button = $('.header__basket__link'),
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
  var button = $('.header__mobile'),
      dropdown = $('.header__mobile-drop'),
      index = false;
  $(button).click(function () {
    if (index == false) {
      $(dropdown).addClass('header__mobile-drop_droped')
      index = true
    }else{
      $(dropdown).removeClass('header__mobile-drop_droped')
      index = false      
    }
  })
}
mobileDropdown()
