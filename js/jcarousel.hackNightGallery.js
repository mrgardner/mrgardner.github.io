(function($) {
    $(function() {
        $('.jcarousel4')
            .jcarousel({
                wrap: 'circular',
                scroll: 1,
                moduleWidth: 290,
                rows:2,
                animation: 'slow'
            });

        $('.jcarousel-control-prev4')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next4')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination4')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);