export default ({ store, redirect }) => {
  console.log('auth js')
  if (!store.getters['auth/check']) {
    return redirect('/login')
  }
}
