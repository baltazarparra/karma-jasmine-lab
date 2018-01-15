describe('Counter', () => {
  let $compile, $scope, $controller, element

  beforeEach(module('app'))
  beforeEach(inject(($injector) => {
    $compile = $injector.get('$compile')
    const $rootScope = $injector.get('$rootScope')
    element = angular.element('<counter></counter>')
    $compile(element)($rootScope.$new())
    $controller = element.controller('counter')
    $scope = element.isolateScope() || element.scope()
  }))

  it('should have an initial count of 0', () => {
    expect($controller.count).toEqual(0)
  })

  it('should increment the counter correctly', () => {
    $controller.increment()
    expect($controller.count).toEqual(1)
  })

  it('should decrement the counter correctly', () => {
    $controller.decrement()
    expect($controller.count).toEqual(-1)
  })
})
