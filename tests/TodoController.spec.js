describe('Todo Controller',() => {
  let $controller, TodoController

  beforeEach(module('app'))

  beforeEach(inject(($injector) => {
    $controller = $injector.get('$controller')
    const $scope = {}
    const TodoService = function () {}
    TodoService.prototype.$save = function () {}
    TodoService.query = () => {
      return {
        $promise: {
          then: (callback) => {
            callback([
              {
                id: 1,
                title: 'Example Todo',
                userId: 1
              }
            ])
          }
        }
      }
    }

    TodoService.delete = () => true

    // instantiate the controller
    TodoController = $controller('TodoController as todo', {
      $scope,
      TodoService
    })
  }))

  it('should have get items from the service', () => {
    const resp = TodoController.getTodos()
    expect(TodoController.list[0]).toEqual({
      id: 1,
      title: 'Example Todo',
      userId: 1
    })
  })

  it('should delete the item from the service', () => {
    TodoController.deleteTodo(1)
    expect(TodoController.list.length).toEqual(0)
  })

  it('should create a new item', () => {
    TodoController.title = 'Example Title'
    TodoController.newTodo()
    expect(TodoController.list.length).toEqual(1)
  })
})
