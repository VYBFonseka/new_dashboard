

import SourceMeter from "../../components/SourceMeter/SourceMeter"
import StartEndBtn from "../../components/StartEndBtn/StartEndBtn"
import { realdb } from '../../firebase-config';

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