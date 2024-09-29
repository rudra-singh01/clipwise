import LowerSection from "./components/LowerSection"
import ProductPage from "./components/ProductPage"
import UpperSection from "./components/UpperSection"

const App = () => {
  return (
    <div className="bg-zinc-950 ">
     <UpperSection/>
     <ProductPage/>
     <LowerSection/>
    </div>
  )
}

export default App