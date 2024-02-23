$(function() {
    const green = '#27a844'
    
    $('.btn-group-vertical').css({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }).children('.btn-secondary').css({
        borderRadius: 5
    })

    $('.jumbotron').css({
        color: '#FFF',
        backgroundColor: '#6b757e',
        textAlign: 'end'
    })
    
    $('.jumbotron .btn').css({
        backgroundColor: green,
        borderColor: green
    })

    $('.row').eq(2).children().each(function(index) {
        if (index === 1) $(this).css({order: 1}).find('.btn').css({
            backgroundColor: green,
            borderColor: green
        })
        if (index === 2) $(this).css({order: 3})
        if (index === 3) $(this).css({order: 2})
        if (index === 4) $(this).css({order: 0})
    })

    const fourItem = $('.list-group .list-group-item').eq(0).clone().text('Quarto item')
    const fiveItem = $('.list-group .list-group-item').eq(0).clone().removeClass('active').text('Quinto item')

    $('.list-group').append([fourItem, fiveItem])
    $('.list-group .list-group-item').eq(0).removeClass('active')
})