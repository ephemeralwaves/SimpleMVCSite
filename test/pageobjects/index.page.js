var path = require('path');

class IndexPage {

	get button() { return $( '#button-img' ); }
	get buttonText() { return $( '#button-text' ); }

	open() {
		browser.url(path.join("file:///",process.cwd(),'index.html'));
	}
}

module.exports = new IndexPage();
