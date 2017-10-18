
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



function menuDropdown() {
  var button = $('li.header__navigation__item-drop'),
      dropdown = $('.dropdown-header'),
      index = false;
  $(button).click(function () {
    if (index == false) {
      $(dropdown).addClass('dropdown-header_droped')
      index = true
    }else{
      $(dropdown).removeClass('dropdown-header_droped')
      index = false      
    }
  })
}
menuDropdown()

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

