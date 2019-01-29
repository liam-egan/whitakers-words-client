import styled from 'styled-components'

const ContentBox = styled.div`
  background-color: ${props => props.theme.colors.content.background};
  border: 1px solid ${props => props.theme.colors.borders.background};
  border-radius: ${props => props.theme.curves.lg};
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 1px;
`

export default ContentBox
