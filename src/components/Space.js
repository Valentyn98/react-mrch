import React, {useEffect, useState} from 'react';
import SpaceShow from "./SpaceShow";

const Space = () => {

      let [board,setBoard] = useState([])

        useEffect(()=>{
            fetch('https://api.spacexdata.com/v3/launches/')
                .then(value => value.json())
                .then(value => {
                    setBoard(value.filter(value => value.launch_year !== '2020'))
                })
        },[])

    console.log(board)
    return (
        <div>
            {board.map(value => <SpaceShow flight_number={value.flight_number} launch_year={value.launch_year} mission_patch_small={value.links.mission_patch_small} />)}
        </div>
    );
};

export default Space;