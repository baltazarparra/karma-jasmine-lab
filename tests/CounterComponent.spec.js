describe('Counter Component', () => {
  let $componentController, controller, initialCount = 200

  beforeEach(module('app'))
  beforeEach(inject(($injector) => {
    $componentController = $injector.get('$componentController')
    controller = $componentController('counterComponent',
      {$scope: {}},
      {initialCount}
    )
  }))

  it('should have an initial count of 0', () => {
    expect(controller.count).toEqual(0)
  })

  it('should initialize to the correct initial count', () => {
    expect(controller.count).toEqual(0)
    controller.$onInit()
    expect(controller.count).toEqual(initialCount)
  })

  it('should increment the counter correctly', () => {
    controller.increment()
    expect(controller.count).toEqual(1)
  })

  it('should decrement the counter correctly', () => {
    controller.decrement()
    expect(controller.count).toEqual(-1)
  })
})
