function main(){
    console.log('loaded');
    var $li = $('<li />',
        {
            'class':'header-nav-item'
        }
    );
    var $anchor = $('<a />',
        {
            'class':'header-nav-link',
            'href':'https://github.com/stars'
        }
    );
    var $star = $('<span class="octicon octicon-star"></span>');
    $anchor.prepend($star);
    $li.append($anchor);
    $('.user-nav > li:first-child').after($li);
}

main();
