import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { string, func, bool } from 'prop-types'
import { connect } from 'react-redux'
import translate from './actions/translate'
import WordsBox from './components/WordsBox'
import ContentBox from './components/ContentBox'

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
    }
  }
}

function App(props) {
  const { words, englishToLatin, translate: initiateTranslation } = props
  const [internalWords, setInternalWords] = useState(words)

  useEffect(
    () => {
      initiateTranslation({ words: internalWords, englishToLatin })
    },
    [internalWords, englishToLatin]
  )

  function handleWordsChange(e) {
    setInternalWords(e.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetStyles />
        <BaseStyles />
        <Page>
          <Title>Whitaker&apos;s Words</Title>
          <SpacedWordsBox onChange={handleWordsChange} />
          <ContentBox />
        </Page>
      </>
    </ThemeProvider>
  )
}

App.propTypes = {
  words: string.isRequired,
  translate: func.isRequired,
  englishToLatin: bool.isRequired
}

const ResetStyles = createGlobalStyle`
  a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
`

const BaseStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro');

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
  margin: 75px auto 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 50px;
    width: 90vw;
  }
`

const Title = styled.h1`
  font-size: 4rem;
`

const SpacedWordsBox = styled(WordsBox)`
  margin: 10px 0 20px 0;
`

function mapStateToProps(state) {
  return {
    words: state.words,
    englishToLatin: state.englishToLatin
  }
}

const mapDispatchToProps = {
  translate
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
