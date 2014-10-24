// Account Navigation
$.getJSON('___components/_json/account_navigation.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#account_navigation_template_holder');

    $.get('___components/_mustache/account_navigation.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#account_navigation_template').html(), templateData));
    });
});