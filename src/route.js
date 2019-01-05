const Test = r => require.ensure([], () => r(require('@/pages/test')), 'Test')

export default {
  routes: [
    {
      path: '/',
      component: Test
    }
  ]
}