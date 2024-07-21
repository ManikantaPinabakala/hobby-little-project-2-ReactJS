import {Component} from 'react'

import LanguageItem from '../LanguageItem'

import {
  AppContainer,
  AppHeading,
  LanguageList,
  GreetingImage,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class LanguageApp extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
  }

  clickLanguage = id => {
    this.setState({activeLanguageId: id})
  }

  render() {
    const {activeLanguageId} = this.state
    const activeLanguageItem = languageGreetingsList.find(
      eachLanguageItem => eachLanguageItem.id === activeLanguageId,
    )

    return (
      <AppContainer>
        <AppHeading>Multilingual Greetings</AppHeading>
        <LanguageList>
          {languageGreetingsList.map(eachLanguageItem => (
            <LanguageItem
              key={eachLanguageItem.id}
              isActive={activeLanguageId === eachLanguageItem.id}
              eachLanguageItem={eachLanguageItem}
              clickLanguage={this.clickLanguage}
            />
          ))}
        </LanguageList>
        <GreetingImage
          src={activeLanguageItem.imageUrl}
          alt={activeLanguageItem.imageAltText}
        />
      </AppContainer>
    )
  }
}

export default LanguageApp
