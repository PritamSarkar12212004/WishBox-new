import Routes from '../routes/MainRoutes'
import HeaderCom from '../components/main/heading/HeaderCom'
import FooterCom from '../components/main/footer/FooterCom'
import HomeWraper from '../components/wraper/HomeWraper'

function App() {
  return (
    <>
      <HeaderCom />
      <HomeWraper>
        <Routes />
      </HomeWraper>
      <FooterCom />
    </>
  )
}

export default App