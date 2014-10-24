// Store Location Pickup/Delivery Info
$.getJSON('___components/_json/store_location_pickup_delivery_info.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#store_location_pickup_delivery_info_template_holder');

    $.get('___components/_mustache/store_location_pickup_delivery_info.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#store_location_pickup_delivery_info_template').html(), templateData));
    });
});