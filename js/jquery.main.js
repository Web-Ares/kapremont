$(function(){

    $('.gallery__item').each(function () {
        $(".group").fancybox({
            padding : 0,
            cyclic: false,
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    });

    $('.swiper-container').each(function () {
        Slider($(this));
    });


    $('input[type=tel]').each(function () {
        $(this).inputmask("+7 ( 999 ) 999 - 99 - 99", ({promptChar: "."}));
    });

    var myMap;

    function init () {
        myMap = new ymaps.Map('map', {
            center: $('.map__item').eq(0).attr('data-coord').split(', '),
            zoom: 14
        });
        myMap.controls
            .add('zoomControl', { left: 5, bottom: 5 })
            .add('typeSelector')
            .add('mapTools', { left: 35, bottom: 5 });



        myMap.behaviors.disable('drag');

        $.each($('.map__item'), function(i){
            var curElem = $(this);

            if (curElem.attr('data-coord')) {
                var coord = curElem.attr('data-coord').split(', ');

                myMap.geoObjects.add(new ymaps.Placemark(
                    [coord[0], coord[1]],
                    {   hintContent: "Описание",
                        balloonContentBody: curElem.find('a').text() }, {
                        iconLayout: 'default#image',
                        iconImageOffset: [-15, -25]
                    }

                ));
            }
        });
    }

    ymaps.ready(init);

    $('.map__item span').on({
        'click':function(){
            var coord = $(this).parent().attr('data-coord').split(', ');

            myMap.setCenter(coord);

            return false;
        }
    });

} );

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
    if (_obj.hasClass( 'gallery__slider-wrap' )) {

        $( '.gallery-lens__item' ).click( function (){

        var curElem = $(this),
            curAttr = curElem.data( 'gallery' );

        $( '.gallery-lens__item' ).removeClass( 'active' );
            curElem.addClass( 'active' );

        $( '.gallery__next' ).show();
        $( '.gallery__prev' ).show();

        $( '.gallery__item' ).hide();

        $( '.gallery__item' ).each( function () {

            var curElemShow = $( this ),
                curAttrShow = curElemShow.data( 'gallery' );

            if( curAttr == curAttrShow ){
                curElemShow.show();
            }
        });

        _slider2.updateSlidesSize();
        _slider2.slideTo(0, 1);
    });
        var _slider2 = new Swiper(_obj, {
            nextButton: '.gallery__next',
            prevButton: '.gallery__prev',
            slidesPerView: 1,
            paginationClickable: true

        });

    }
    if (_obj.hasClass('gallery-lens-wrap')) {
        var _slider3 = new Swiper(_obj, {
            nextButton: '.gallery-lens__next',
            prevButton: '.gallery-lens__prev',
            slidesPerView: 4,
            paginationClickable: true

        });

    }
    //public properties

    //public methods

    _init();
};