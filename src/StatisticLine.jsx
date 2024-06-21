const Statistics = (props) => {
    /// ...
    return(
      <div>
        <StatisticLine text="good" value ={props.good} />
        <StatisticLine text="neutral" value ={props.neutral} />
        <StatisticLine text="bad" value ={props.bad} />
    
      </div>
    )
  }
  export default Statistics;