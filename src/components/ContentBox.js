import React, { useEffect } from 'react'
import styled from 'styled-components'
import { string, bool } from 'prop-types'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import TranslationBox from './TranslationBox'
import Loading from './Loading'

function ContentBox(props) {
  const { translation, loading } = props

  return (
    <Router>
      <Box>
        <BoxHeader>
          <HeaderLink activeClassName="active" exact to="/">
            Latin to English
          </HeaderLink>
          <HeaderLink activeClassName="active" exact to="/english">
            English to Latin
          </HeaderLink>
          <HeaderLink activeClassName="active" to="/saved">
            Saved Words
          </HeaderLink>
        </BoxHeader>

        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return loading ? (
                <CenteredLoading />
              ) : (
                <TranslationBox>{translation}</TranslationBox>
              )
            }}
          />
          <Route
            path="/english"
            exact
            render={() => {
              return loading ? (
                <CenteredLoading />
              ) : (
                <TranslationBox englishToLatin>{translation}</TranslationBox>
              )
            }}
          />
        </Switch>
      </Box>
    </Router>
  )
}

ContentBox.propTypes = {
  translation: string.isRequired,
  loading: bool.isRequired
}

const Box = styled.div`
  background-color: #fafafa;
  height: 70vh;
  border: 1px solid #c6c6c6;
  border-radius: ${props => props.theme.curves.lg};
  overflow: auto;
`

const BoxHeader = styled.div`
  position: sticky;
  top: 0;
  border-radius: ${props => props.theme.curves.lg}
    ${props => props.theme.curves.lg} 0 0;
  background-color: #f3f3f3;
  min-height: 50px;
  min-width: 100%;
  border-bottom: 1px solid #c6c6c6;
  display: flex;
  justify-content: space-around;
`

const HeaderLink = styled(NavLink)`
  display: flex;
  flex: 1;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.8rem;
  }

  &.active {
    font-weight: bold;
  }

  &:nth-child(1) {
    border-top-left-radius: ${props => props.theme.curves.lg};
    border-right: 0.25px solid #c6c6c6;
  }

  &:nth-child(2) {
    border-left: 0.25px solid #c6c6c6;
    border-right: 0.25px solid #c6c6c6;
  }

  &:nth-child(3) {
    border-top-right-radius: ${props => props.theme.curves.lg};
    border-left: 0.25px solid #c6c6c6;
  }
`

const CenteredLoading = styled(Loading)`
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 30px);
`

function mapStateToProps(state) {
  return {
    translation: state.translation,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(ContentBox)
