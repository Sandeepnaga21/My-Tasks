import './index.css'

const TagsList = props => {
  const {tagDetails, getFiterData} = props
  const {optionId, displayText} = tagDetails

  const onClickBtn = () => {
    getFiterData(optionId)
  }

  return (
    <li key={optionId} className="tg-list">
      <button className="style" type="button" onClick={onClickBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TagsList
