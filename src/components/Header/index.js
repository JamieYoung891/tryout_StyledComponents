import React from 'react'
import styled from 'styled-components'
import { OuterContainer as Header, AnchorWithAnimation as A } from '../styled'
import { useDispatch } from 'react-redux'
import { updateFilter } from '../../store/filters'


const Child = styled.div`
  @media (orientation: landscape){
    display: inline-block;

    :first-child {
      margin-right: 0.5em;
    }
  }
`

export default () => {
  const dispatch = useDispatch()
  const onClick = e => {
    e.preventDefault();
    dispatch(updateFilter.list());
  }

  return (
    <Header outerAs="header">
      <Child as="h1">
        <A href="/list" onClick={onClick}>
          CSS-in-JS
        </A>
      </Child>
      <Child as="h4">
        the Brave New World of Styling
      </Child>
    </Header>
  )
}