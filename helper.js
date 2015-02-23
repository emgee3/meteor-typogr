if (Package.templating) {
  var Template = Package.templating.Template;
  var Blaze = Package.blaze.Blaze; // implied by `templating`
  var HTML = Package.htmljs.HTML; // implied by `blaze`

  Blaze.Template.registerHelper("typogr", new Template('typogr', function () {
    var view = this;
    var content = '';
    if (view.templateContentBlock) {
      content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
    }
    return HTML.Raw(Typogr.typogrify(content));
  }));
}
