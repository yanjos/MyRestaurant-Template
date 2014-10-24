// Store Services Quick Order
$.getJSON('___components/_json/store_services_quick_order.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#store_services_quick_order_template_holder');

    $.get('___components/_mustache/store_services_quick_order.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#store_services_quick_order_template').html(), templateData));
    });
});