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

    //public properties

    //public methods

    _init();
};