// Store Location Search
$.getJSON('___components/_json/store_location_search.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#store_location_search_template_holder');

    $.get('___components/_mustache/store_location_search.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#store_location_search_template').html(), templateData));
    });
});