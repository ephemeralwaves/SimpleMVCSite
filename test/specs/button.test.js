const assert = require('assert')
IndexPage = require( '../pageobjects/index.page' );

describe('Index Page', () => {
    it('button should display text when clicked', () => {

        IndexPage.open();
        IndexPage.button.click();
        assert.strictEqual(IndexPage.buttonText.getText(), 'Purr <3 I have been clicked!')

    })
})
