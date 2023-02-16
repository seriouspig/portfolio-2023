import React from 'react'

const Skill = (props) => {
  return (
    <div class="skill">
      <p>{props.name}</p>
      <div class="skill-container">
        <div className="skill-bar" style={{ width: props.percentage }}>
          <div class="skill-value value"></div>
        </div>
        <div className="skill-text-bar" style={{ width: props.percentage }}>
          <p class="skill-text" style={{ left: props.percentage }}>
            {props.percentage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill