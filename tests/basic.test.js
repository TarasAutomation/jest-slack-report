
describe('Describe block', () => {
    it('Passed test', () => {
        expect(true).toBe(true);
    })

    it('Failed test', () => {
        expect(true).toBe(false);
    })

    it.skip('Skipped test', () => {
        expect(true).toBe(true);
    })
});

