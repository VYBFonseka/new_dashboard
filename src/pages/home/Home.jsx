

import SourceMeter from "../../components/SourceMeter/SourceMeter"
import StartEndBtn from "../../components/StartEndBtn/StartEndBtn"
import Chart from "../../components/chart/Chart"

import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Statusbar from "../../components/statusbar/Statusbar"
import "./home.css"

export default function Home() {
  return (
    <div className="home">
        <Statusbar/>
        <FeaturedInfo/>
        <SourceMeter/>
        <StartEndBtn/> 
    </div>
  )
}
