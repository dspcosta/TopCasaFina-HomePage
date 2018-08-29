$('#collapse-nav-bar').on('show.bs.collapse', function(){
    $('.topcasafina-banner').css('transform', 'translate(-50%,10%');
})

$('#collapse-nav-bar').on('hide.bs.collapse', function(){
    $('.topcasafina-banner').css('transform', 'translate(-50%,-50%');
})