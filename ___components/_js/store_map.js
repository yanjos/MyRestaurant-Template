// Store Map
$.getJSON('___components/_json/store_map.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#store_map_template_holder');

    $.get('___components/_mustache/store_map.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#store_map_template').html(), templateData));
    });
});