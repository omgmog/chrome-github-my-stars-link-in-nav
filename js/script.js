(function () {
    'use strict';

    var main = function () {
        var $li = $('<li />',
            {
                'class': 'header-nav-item'
            }
            );
        var $anchor = $('<a />',
            {
                'class': 'header-nav-link',
                'href': '/stars'
            }
            );
        var $star = $('<span class="octicon octicon-star"></span>');
        $anchor.prepend($star);
        $li.append($anchor);
        $('.user-nav > li:first-child').after($li);
    };

    main();
}());
