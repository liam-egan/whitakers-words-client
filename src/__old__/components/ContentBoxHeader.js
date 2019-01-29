import styled from 'styled-components'

const ContentBoxHeader = styled.header`
  position: sticky;
  top: 0;
  min-height: 50px;
  border-top-left-radius: ${props => props.theme.curves.lg};
  border-top-right-radius: ${props => props.theme.curves.lg};
  background-color: ${props => props.theme.colors.lightgrey.background};
  border-bottom: 1px solid ${props => props.theme.colors.borders.background};
  display: flex;
  justify-content: space-around;

  & > * {
    border-left: 0.5px solid ${props => props.theme.colors.borders.background};
    border-right: 0.5px solid ${props => props.theme.colors.borders.background};
  }

  & > *:first-child {
    border-top-left-radius: ${props => props.theme.curves.lg};
    border-left: none;
  }

  & > *:last-child {
    border-top-right-radius: ${props => props.theme.curves.lg};
    border-right: none;
  }
`

export default ContentBoxHeader
