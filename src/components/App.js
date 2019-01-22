import React, { Suspense } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Loading from './Loading'

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
      text: '#444'
    }
  }
}

export default function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading center="page" />}>
        <BaseStyles />

        <Page>
          <Title>Whitaker&apos;s Words</Title>
        </Page>
      </Suspense>
    </ThemeProvider>
  )
}

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
  height: 90vh;
  margin: 10vh auto 0 auto;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 90vw;
  }
`

const Title = styled.h1`
  font-size: 4rem;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 3rem;
  }
`
