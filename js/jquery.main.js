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
    $('.address-map').each(function () {
        var myMap;
        function init () {
            myMap = new ymaps.Map('map', {
                center: $('.address-map').attr('data-coord').split(', '),
                zoom: 16
            });
            myMap.controls
                .add('zoomControl', { left: 5, top: 5 })
                .add('typeSelector')
                .add('mapTools', { left: 35, top: 5 });
        }
        ymaps.ready(init);
    });
    //public properties

    //public methods

    _init();
};