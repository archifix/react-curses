import PageFooter from "./Footer"
import PageHeader from "./Header"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <PageHeader />
      <div className="container mx-auto">{children}</div>
      <PageFooter />
    </div>
  )
}

export default Layout
