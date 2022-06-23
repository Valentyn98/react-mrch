import React from 'react';

const SpaceShow = (props) => {
    let {flight_number,launch_year,mission_patch_small} =  props
    return (
        <div className={'father'}>
            <div className={'FNumber'}>
            FNumber:{flight_number}  Year:{launch_year}
                <img  className={'logo'}  src={mission_patch_small} alt=""/>
            </div>
        </div>
    );
};

export default SpaceShow;