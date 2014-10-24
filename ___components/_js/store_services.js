// Store Services
$.getJSON('___components/_json/store_services.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#store_services_template_holder');

    $.get('___components/_mustache/store_services.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#store_services_template').html(), templateData));
    });
});