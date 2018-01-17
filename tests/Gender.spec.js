describe('Gender', () => {
  let $filter;

  beforeEach(module('app'))
  beforeEach(inject(($injector) => {
    $filter = $injector.get('$filter')
  }))

  it('should filter out based on gender', () => {
    const list = [{
      name: 'Baltz',
      gender: 'male'
    }, {
      name: 'Karol',
      gender: 'female'
    }]
    const result = $filter('gender')(list, 'male')
    expect(result.length).toEqual(1)
    expect(result[0].name).toEqual('Baltz')
  })
})
