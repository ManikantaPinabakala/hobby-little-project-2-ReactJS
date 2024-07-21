import styled from 'styled-components'

export const ListItem = styled.li``

export const LanguageButton = styled.button`
  background-color: ${props => (props.isActive ? '#db1c48' : 'transparent')};
  border: ${props => (props.isActive ? 'none' : '1px solid #db1c48')};
  border-radius: 20px;
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  font-weight: bold;
  padding: 8px 15px;
  cursor: pointer;
`
