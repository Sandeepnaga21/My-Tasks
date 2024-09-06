import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TasksList from './components/TasksList'
import TagsList from './components/TagsList'
import './App.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    isClicked: false,
    selectInput: tagsList[0].optionId,
    tasksList: [],
  }

  onClickSubmit = event => {
    event.preventDefault()
  }

  onChangeselect = event => {
    this.setState({selectInput: event.target.value})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  addTask = () => {
    this.setState({isClicked: true})
    const {searchInput, selectInput} = this.state
    const newTask = {
      id: uuidv4(),
      searchInput,
      selectInput,
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
    }))
  }

  getFiterData = optionId => {
    const {tasksList} = this.state
    const filterData = tasksList.filter(
      eachTag => eachTag.optionId === optionId,
    )
    this.setState({tasksList: filterData})
  }

  render() {
    const {tasksList, isClicked} = this.state

    return (
      <div className="container">
        <form className="c-container" onSubmit={this.onClickSubmit}>
          <h1 className="heading">Create a task</h1>
          <label className="t-label" htmlFor="Task">
            Task
          </label>
          <input
            type="text"
            label="Task"
            onChange={this.onChangeInput}
            className="input"
            placeholder="Enter the task here"
          />
          <label className="t-label" htmlFor="Tags">
            Tags
          </label>
          <select
            label="Tags"
            className="select"
            onChange={this.onChangeselect}
          >
            {tagsList.map(each => (
              <option key="optionId">{each.optionId}</option>
            ))}
          </select>
          <button type="button" onClick={this.addTask} className="a-button">
            Add Task
          </button>
        </form>
        <div className="t-container">
          <div className="tag">
            <h1 className="t-heading">Tags</h1>
            {tagsList.map(eachTag => (
              <TagsList tagDetails={eachTag} getFiterData={this.getFiterData} />
            ))}
          </div>
          <div className="tasks">
            <h1 className="t-heading">Tasks</h1>
            {isClicked ? (
              <ul>
                {tasksList.map(eachTask => (
                  <TasksList taskDetails={eachTask} key={eachTask.id} />
                ))}
              </ul>
            ) : (
              <p className="n-para">No Tasks Added Yet</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
