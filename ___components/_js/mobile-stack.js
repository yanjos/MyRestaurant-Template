// Mobile Stack
$.getJSON('___components/_json/mobile-stack.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#mobile-stack-template_holder');

    $.get('___components/_mustache/mobile-stack.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#mobile-stack-template').html(), templateData));
    });
});