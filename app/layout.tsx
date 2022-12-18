import '../styles/globals.css'
import NavBar from './components/nav-bar'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
