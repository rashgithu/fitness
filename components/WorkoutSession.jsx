import React from 'react'

const WorkoutSession = () => {
  return (
    <section className="workout_session">
    <div className="wrapper">
      <h1>Top workout session</h1>
      <p>Start your fitness journey with us and discover a community dedicated to health, strength, and wellness </p>
      <img src="/img5.jpg" alt="workout"></img>
    </div>
    <div className="wrapper">
      <h1>featured bootcamps</h1>
      <p> </p>
      <div className='bootcamps'>
        <div>
          <h4>Strength and Power Bootcamp</h4>
          <p>Build your strength and endurance with guided weightlifting and resistance training routines.</p>
        </div>
        <div>
          <h4>Functional Fitness Bootcamp</h4>
          <p>Train for real-life strength with exercises that improve your agility, balance, and core stability.</p>
        </div>
        <div>
          <h4>Weight Loss Challenge Bootcamp</h4>
          <p> A results-driven program combining cardio, nutrition advice, and accountability to help you shed pounds effectively.</p>
        </div>
        <div>
          <h4>Flexibility and Mobility Bootcamp</h4>
          <p>Focus on stretching and mobility exercises to prevent injuries and enhance overall body movement.</p>
        </div>
        <div>
          <h4>Cardio Blast Bootcamp</h4>
          <p>A high-energy session packed with running, cycling, and bodyweight exercises to elevate your heart rate. </p>
      </div>
      <div>
          <h4>Athlete's Edge Bootcamp</h4>
          <p>Train like a pro with performance-enhancing workouts designed for budding athletes.</p>
      </div>
    </div>
      </div>
    </section>
  )
}

export default WorkoutSession
