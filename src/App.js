import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <ResetStyles />
      <BaseStyles />
      <Wrapper>
        <Title>Whitaker's Words</Title>
      </Wrapper>
    </>
  )
}

const ResetStyles = createGlobalStyle`
  a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
`

const BaseStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro');

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-size: 10px;
    font-family: 'Source Serif Pro';
    color: #444;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Title = styled.h1`
  font-weight: bold;
  color: lightblue;
  font-size: 3rem;
`

export default App
