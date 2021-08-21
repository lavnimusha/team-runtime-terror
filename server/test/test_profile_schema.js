var expect = require('chai').expect;
 
var Meme = require('../src/Meme');
 
describe('meme', function() {
    it('should be invalid if name is empty', function(done) {
        var m = new Meme();
 
        m.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });
});