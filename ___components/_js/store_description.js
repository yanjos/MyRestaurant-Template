// Store Description
$.getJSON('___components/_json/store_description.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#store_description_template_holder');

    $.get('___components/_mustache/store_description.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#store_description_template').html(), templateData));
    });
});