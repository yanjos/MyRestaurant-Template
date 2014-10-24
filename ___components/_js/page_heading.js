// Page Heading
$.getJSON('___components/_json/page_heading.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#page_heading_template_holder');

    $.get('___components/_mustache/page_heading.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#page_heading_template').html(), templateData));
    });
});