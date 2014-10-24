// Promo
$.getJSON('___components/_json/promo.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#promo_template_holder');

    $.get('___components/_mustache/promo.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#promo_template').html(), templateData));
    });
});