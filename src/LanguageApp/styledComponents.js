import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
`

export const AppHeading = styled.h1`
  color: #1e293b;
  margin: 0;
`

export const LanguageList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  align-items: center;
  gap: 30px;
`

export const GreetingImage = styled.img`
  width: 20%;
`
