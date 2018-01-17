describe('Remove Vowels', () => {
  let $filter;

  beforeEach(module('app'))
  beforeEach(inject(($injector) => {
    $filter = $injector.get('$filter')
  }))

  it('should remove the vowels of a word', () => {
    const result = $filter('removeVowels')('abcdefg')
    expect(result).toEqual('bcdfg')
  })
})
