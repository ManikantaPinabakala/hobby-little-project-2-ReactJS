import {ListItem, LanguageButton} from './styledComponents'

const LanguageItem = props => {
  const {eachLanguageItem, isActive, clickLanguage} = props
  const {id, buttonText} = eachLanguageItem

  const onClickLanguageButton = () => {
    clickLanguage(id)
  }

  return (
    <ListItem>
      <LanguageButton
        type="button"
        isActive={isActive}
        onClick={onClickLanguageButton}
      >
        {buttonText}
      </LanguageButton>
    </ListItem>
  )
}

export default LanguageItem
