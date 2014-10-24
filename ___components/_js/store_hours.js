// Store Hours
$.getJSON('___components/_json/store_hours.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#store_hours_template_holder');

    $.get('___components/_mustache/store_hours.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#store_hours_template').html(), templateData));
    });
});