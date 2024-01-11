import { useEffect, useState } from "react"
import {repositories} from "../../../api/RepositoresApi"
import { useParams } from "react-router-dom"
import ShowSomeRepositories from "./showSomeRepositories/showSomeRepositories"
import CalendarHeatmap from 'react-calendar-heatmap';
import "../../../styles/style2.css"
import HeatMap from '@uiw/react-heat-map';
export default function PinAndEse(props) {

    const [set , setSet] = useState([])

    let username = props.params
    useEffect(() => {

        repositories(username).then((e) => {
            setSet(e)
        })

    } , [])


    const value = [
        { date: '2016/01/11', count: 2 },
        { date: '2016/01/12', count: 20 },
        { date: '2016/01/13', count: 10 },
        ...[...Array(19)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
        { date: '2016/04/11', count: 2 },
        { date: '2016/05/01', count: 5 },
        { date: '2016/05/02', count: 5 },
        { date: '2016/05/04', count: 11 },
      ];

    const today = new Date();
    return (
        <div className="p">
                <h6>Popular repositories</h6>
            <div className="part1">
                {set.map((e) => {
                    
                   return <ShowSomeRepositories name = {e.name} type={e.private} language = {e.language} />
                    
                })}
            </div>
            <div className="part2">
            
      {/* <HeatMap
        value={value}
        weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
        startDate={new Date('2016/01/01')}
        width={600}
      /> */}

      <div className="calendar">
      <CalendarHeatmap
      showMonthLabels = {true}
      showWeekdayLabels = {true}
      showOutOfRangeDays = {true}
      horizontal = {true}
      
  startDate={new Date('2016-01-01')}
  endDate={new Date('2017-04-01')}
  gutterSize = {2}
  values={[
    { date: '2016-01-01', count: 12 },
    { date: '2016-01-22', count: 122 },
    { date: '2016-01-30', count: 38 },
    // ...and so on
  ]}
/>
      </div>
      
            

            </div>
            

        </div>
    )
}