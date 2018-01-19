describe('Routes', () => {
  let $state, $http, $httpBackend

  beforeEach(module('app'))
  beforeEach(inject(($injector) => {
    $state = $injector.get('$state')
    $http = $injector.get('$http')
    $httpBackend = $injector.get('$httpBackend')

    $httpBackend
      .when('GET', 'views/home.html')
      .respond('')

      $httpBackend
        .when('GET', '/users/example')
        .respond({
          name: 'Example User'
        })

  }))

  describe('Home Page', () => {
    let state

    it('should have the correct URL', () => {
      state = $state.get('home')
      expect(state.url).toEqual('/')
    })

    it('should have the correct template', () => {
      expect(state.templateUrl).toEqual('views/home.html')
    })

  })

  describe('User Page', () => {
    let state

    it('should have the correct URL', () => {
      state = $state.get('user')
      expect(state.url).toEqual('/user/:name')
    })

    it('should have the correct template', () => {
      expect(state.templateUrl).toEqual('views/user.html')
    })

    it('should use the correct controller', () => {
      expect(state.controller).toEqual('UserController as user')
    })

  })

})
