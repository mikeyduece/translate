import React, { Component } from 'react';
import LanguageContext      from '../contexts/LanguageContext'
import UserCreate           from './UserCreate'

class App extends Component {
  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a Language
        </div>

        <i onClick={ () => this.onLanguageChange('english') } className='flag us' />
        <i onClick={ () => this.onLanguageChange('dutch') } className='flag nl' />

        <LanguageContext.Provider value={ this.state.language }>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App;