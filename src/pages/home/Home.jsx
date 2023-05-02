import Chart from "../../components/chart/Chart"
import FanPump from "../../components/fanPump/FanPump"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Statusbar from "../../components/statusbar/Statusbar"
import "./home.css"

export default function Home() {
  return (
    <div className="home">
        <Statusbar/>
        <FeaturedInfo/>
        <FanPump/>
        <Chart/>
    </div>
  )
}
