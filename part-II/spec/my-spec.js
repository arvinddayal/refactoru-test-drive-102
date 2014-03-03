describe('join', function() {

	it('should return normal string', function() {
		expect(join(['one', 'two', 'three'], 'and')).toBe('one and two and three');
	});

	it('should return normal string', function() {
		expect(join(['lions', 'tigers', 'bears'], 'plus')).toBe('lions plus tigers plus bears');
	});

	it('should join numbers and strings', function(){
		expect(join(['pizza', 2, 'hello'], 'and')).toBe('pizza and 2 and hello');
	});

	
});