import Auth from '../components/auth'

const AuthPage = () => {
  return (
    <main
      // eslint-disable-next-line tailwindcss/no-arbitrary-value
      className={`flex h-[calc(100vh-56px)] flex-col items-center justify-center`}
    >
      <Auth />
    </main>
  )
}

export default AuthPage
