// Header
//$.getJSON('___components/_json/header.json', {}, function(templateData, textStatus, jqXHr) {
//    var templateHolder = $('#header_template_holder');
//
//    $.get('___components/_mustache/header.mustache.html', function(template, textStatus, jqXhr) {
//        templateHolder.append(Mustache.render($(template).filter('#header_template').html(), templateData));
//    });
//});



var headerData, navigationData;
var templateHolder = $('#header_template_holder');
$.when(
    $.getJSON('___components/_json/header.json', function(data) {
        headerData = data;
    }),
    $.getJSON('___components/_json/navigation_primary.json', function(data) {
        navigationData = data;
    })
).then(function() {
    if (headerData && navigationData) {
        var templateData = $.extend(headerData, navigationData);
        $.get('___components/_mustache/header.mustache.html', function(template, textStatus, jqXhr) {
            templateHolder.append(Mustache.render($(template).filter('#header_template').html(), templateData));
        });
    }
});