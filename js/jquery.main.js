$(function(){

    $('.swiper-container').each(function () {
        Slider($(this));
    });


} );

$(window).on({
    load: function () {
        
    }
});

var Slider = function (obj) {

    //private properties
    var _self = this,
        _paginator = obj.find($('.slider__icon')),
        _obj = obj;

    //private methods
    var _addEvents = function () {

        },
        _init = function () {
            _addEvents();
        };
    if (_obj.hasClass('slider__wrap')) {
        var _swiperPromo = new Swiper(_obj, {
            slidesPerView: 1,
            autoplay: 15000,
            pagination: _paginator,
            loop: true,
            paginationClickable: true
        });
    }

    if (_obj.hasClass('useful-links__wrap')) {
        var _slider1 = new Swiper(_obj, {
            nextButton: '.useful-links__next',
            prevButton: '.useful-links__prev',
            slidesPerView: 1,
            loop: true,
            paginationClickable: true

        });

    }
    if (_obj.hasClass('gallery__slider-wrap')) {
        var _slider2 = new Swiper(_obj, {
            nextButton: '.gallery__next',
            prevButton: '.gallery__prev',
            slidesPerView: 1,
            loop: true,
            paginationClickable: true

        });

    }
    if (_obj.hasClass('gallery-lens-wrap')) {
        var _slider3 = new Swiper(_obj, {
            nextButton: '.gallery-lens__next',
            prevButton: '.gallery-lens__prev',
            slidesPerView: 4,
            loop: true,
            paginationClickable: true

        });

    }

    //public properties

    //public methods

    _init();
};