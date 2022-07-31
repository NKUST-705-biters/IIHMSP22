$(function(){
    $.ajaxSetup ({ 
        cache: false //關閉AJAX相應的快取 
    });
    function linkInit(){
        $('a.insite').click(function(){
            var _url = $(this).attr('href')
            $.get(_url,undefined,function(result){
                //console.log(result)
                $('#mainFrame').html(result)
            }).fail(function() {
                var _url = './template/utils/AVAsoon.html'
                $.get(_url,undefined,function(result){
                    $('#mainFrame').html(result)
                })
            });
            return false
        })
    }
    $('ul.scroll-noshow .nav-item>a.nav-link').click(function(){
        //console.log($(this).attr('href'))
        $('ul.scroll-noshow .nav-item>a.nav-link').removeClass('active')
        console.log($(this).parent())
        var _LSt = $(this).attr('LinkState')
        var _url = (_LSt === undefined) ? $(this).attr('href') : './template/utils/AVAsoon.html'
        var _url = (_LSt === 'Online') ? './template/utils/HeldOnline.html' : _url
        console.log(_LSt + _url)
        $.get(_url,undefined,function(result){
            //console.log(result)
            $('#mainFrame').html(result)
            if (_LSt !== undefined && _LSt != '' )
                $('#AVADate').html('Site Available on <strong>' + _LSt + '</strong>')
            if (_LSt === 'Online')
                $('#HOlne').html('<strong class="text-oce-d1">' + $('#cf_Alias').text() + '</strong> will be held <strong class="text-success">Online</strong>.')
            linkInit()
        }).fail(function() {
            $.get(_url,undefined,function(result){
                //console.log(result)
                $('#mainFrame').html(result)
            })
        });
        $(this).addClass('active')
        return false
    })
    //$.get()
});