import React from 'react'
import { useEffect, useRef } from "react"
import { Line, Circle } from "rc-progress";



const Skill = (props) => {

    const barWidth = useRef();

    useEffect(() => {
        // const styles = getComputedStyle(barWidth.current);
        // const styles = barWidth.getBoundingClientRect();
        console.log(barWidth.current.clientWidth)
    }, [])

    // const color = getComputedStyle(document.documentElement).getPropertyValue(
    //   "--logo-color"
    // );
    // console.log(color);

  return (
    <div className="skill">
      <p>{props.name}</p>
      <div className="skill-container">
        <div className="skill-bar" style={{ width: props.percentage }}>
          <div className="skill-value value"></div>
        </div>
        {/* <Line percent={50} strokeWidth={4} strokeColor={"#fff"} trailWidth={4}/> */}
        <div
          className="skill-text-bar"
          ref={barWidth}
          style={{ width: props.percentage }}
        >
          <p className="skill-text" style={{ left: props.percentage }}>
            {props.percentage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill