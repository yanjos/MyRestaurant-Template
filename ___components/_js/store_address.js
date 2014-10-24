// Store Address
$.getJSON('___components/_json/store_address.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#store_address_template_holder');

    $.get('___components/_mustache/store_address.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#store_address_template').html(), templateData));
    });
});