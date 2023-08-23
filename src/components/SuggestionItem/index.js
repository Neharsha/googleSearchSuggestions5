import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onArrow} = props
  const {suggestion} = suggestionDetails

  const onClickArrow = () => {
    onArrow(suggestion)
  }
  return (
    <li className="suggestionItemContainer">
      <p className="suggestion">{suggestion}</p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
