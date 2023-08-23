import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {inputValue: ''}

  inputElement = event => {
    this.setState({inputValue: event.target.value})
  }

  onArrow = value => {
    this.setState({inputValue: value})
  }

  render() {
    const {inputValue} = this.state
    const {suggestionsList} = this.props

    const searchedResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inputValue.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="image"
          alt="google logo"
        />
        <div className="details-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="searchInput"
              onChange={this.inputElement}
              placeholder="Search Google"
              value={inputValue}
            />
            <ul>
              {searchedResults.map(eachSuggestion => (
                <SuggestionItem
                  suggestionDetails={eachSuggestion}
                  key={eachSuggestion.id}
                  onArrow={this.onArrow}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
