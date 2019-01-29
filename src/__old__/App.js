import React, { Suspense, lazy, useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Switch,
  Route
} from 'react-router-dom'
import Loading from './components/Loading'
import { LATIN } from './actions/translateFromLatin'
import { ENGLISH } from './actions/translateFromEnglish'

const ContentBox = lazy(() => import('./components/ContentBox'))
const ContentBoxHeader = lazy(() => import('./components/ContentBoxHeader'))
const SynchronizedWords = lazy(() => import('./containers/SynchronizedWords'))
const SynchronizedTranslation = lazy(() =>
  import('./containers/SynchronizedTranslation')
)
const SynchronizedSavedWordsList = lazy(() =>
  import('./containers/SynchronizedSavedWordsList')
)

const theme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  curves: {
    sm: '2px',
    md: '4px',
    lg: '8px'
  },
  colors: {
    main: {
      background: '#f6f6f6',
      text: 'rgba(68, 68, 68, 0.75)'
    },
    primary: {
      background: '#448aff',
      text: 'white'
    },
    grey: {
      background: '#ddd',
      text: 'rgba(68, 68, 68, 0.75)'
    },
    lightgrey: {
      background: '#f3f3f3',
      text: 'rgba(68, 68, 68, 0.75)'
    },
    content: {
      background: '#fafafa',
      text: '#444'
    },
    borders: {
      background: '#c6c6c6'
    }
  }
}

export default function App(props) {
  const initialLanguage = location.pathname.includes('english')
    ? ENGLISH
    : LATIN
  const [inputLanguage, setInputLanguage] = useState(initialLanguage)

  function handleLatinClick() {
    setInputLanguage(LATIN)
  }

  function handleEnglishClick() {
    setInputLanguage(ENGLISH)
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Suspense fallback={CenteredLoading}>
          <BaseStyles />

          <Page>
            <Title>Whitaker&apos;s Words</Title>
            <SynchronizedWords inputLanguage={inputLanguage} />
            <Suspense fallback={CenteredLoading}>
              <ContentBox>
                <ContentBoxHeader>
                  <HeaderLink onClick={handleLatinClick} to="/latin">
                    Latin &rarr; English
                  </HeaderLink>
                  <HeaderLink onClick={handleEnglishClick} to="/english">
                    English &rarr; Latin
                  </HeaderLink>
                  <HeaderLink to="/saved">Saved Words</HeaderLink>
                </ContentBoxHeader>

                <Switch>
                  <Route path="/latin">
                    <SynchronizedTranslation
                      inputLanguage={LATIN}
                      setInputLanguage={setInputLanguage}
                    />
                  </Route>

                  <Route path="/english">
                    <SynchronizedTranslation
                      inputLanguage={ENGLISH}
                      setInputLanguage={setInputLanguage}
                    />
                  </Route>

                  <Route path="/saved">
                    <SynchronizedSavedWordsList />
                  </Route>
                  <Redirect from="/" to="/latin" />
                </Switch>
              </ContentBox>
            </Suspense>
          </Page>
        </Suspense>
      </ThemeProvider>
    </Router>
  )
}

const CenteredLoading = <Loading center="page" />

const BaseStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro');

  a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}

  html,
  body,
  #root {
    width: 100%;
    font-size: 10px;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    color: ${props => props.theme.colors.main.text};
    background-color: ${props => props.theme.colors.main.background};;
  }
`

const Page = styled.main`
  width: 80vw;
  height: 85vh;
  margin: 10vh auto 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 90vw;
  }

  & > * {
    margin: 10px 0;
  }
`

const Title = styled.h1`
  font-size: 4rem;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 3rem;
  }
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
`
