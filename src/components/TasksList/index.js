import './index.css'

const TasksList = props => {
  const {taskDetails} = props
  const {id, searchInput, selectInput} = taskDetails
  return (
    <li key={id}>
      <div>
        <p>{searchInput}</p>
        <p>{selectInput}</p>
      </div>
    </li>
  )
}

export default TasksList
