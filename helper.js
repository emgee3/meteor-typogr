if (Package.templating) {
  var Template = Package.templating.Template;
  var UI = Package.ui.UI; // implied by `templating`
  var HTML = Package.htmljs.HTML; // implied by `ui`
  var Blaze = Package.blaze.Blaze; // implied by `ui`

  UI.registerHelper("typogr", Template.__create__('typogr', function () {
    var view = this;
    var content = '';
    if (view.templateContentBlock) {
      content = Blaze.toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
    }
    return HTML.Raw(Typogr.typogrify(content));
  }));
}
