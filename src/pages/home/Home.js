import SourceMeter from "../../components/SourceMeter/SourceMeter"
import StartEndBtn from "../../components/StartEndBtn/StartEndBtn"


import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Statusbar from "../../components/statusbar/Statusbar"
import "./home.css"

import { realdb } from "../../firebase-config";
import { onValue, ref } from "firebase/database";
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const query = ref(realdb, "ADAS_0001");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          console.log(project)
          // setProjects((projects) => [...projects, project]);
        });
      }
    });
  }, []);

  return (
    <div className="home">
        <Statusbar/>
        <FeaturedInfo/>
        <SourceMeter/>
        {/* <StartEndBtn/>  */}
    </div>
  )
}

