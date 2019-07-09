var Element = require('./base/element');

(function (win, doc) {
    var root = doc.getElementById('root');
    console.log(root);
    var e = new Element('div', 'ta');
    e.html('Hello World.');
    console.log(e);
    root.appendChild(e.element());

})(window, document);