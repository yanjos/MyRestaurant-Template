// Footer
$.getJSON('___components/_json/footer.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#footer_template_holder');

    $.get('___components/_mustache/footer.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#footer_template').html(), templateData));
    });
});