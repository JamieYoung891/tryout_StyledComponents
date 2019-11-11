import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { updateFilter } from '../../store/filters'

import styled, { css } from 'styled-components'
import { color, Button as NavItem } from '../styled'

const Nav = styled.nav`

  @media (orientation: portrait) {
    transform: translateX(calc(50% + 0.6rem)) rotate(90deg) translateX(calc(50% + 0.8rem));
  }
  > ul {
    display: flex;
    margin-top: calc(-2rem + 1px);
    margin-bottom: -0.5rem;
  }
`

const navItemCSS = css`
  width: max-content;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  &.article-nav-open {
    max-width: 20rem;
  }


  padding-bottom: calc(1em - 1px);
  border: 1px solid ${color.primary};
  border-left-width: 0;
  border-radius: 0;
  box-shadow: none;

  transition-duration: 1s;
  transition-property: max-width, color, transform, border-radius;

  :first-of-type {
    border-left-width: 1px;
    border-top-left-radius: 0.5rem;
    :hover {
    border-top-right-radius: 0.5rem;
    }
  };

  :last-of-type {
    border-top-right-radius: 0.5rem;
  }

  :hover {
    border-left-width: 1px;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    max-width: 20rem;

    &, & ~ * {
      left:-1px;
    };

    :first-of-type, :first-of-type ~ *{
      left: 0;
    };
  }
`



const navItems = (_key, data, dispatch) => {
  const _onClick = (payload) => dispatch(updateFilter.item(false, payload))

  const _array = []
  for (const key in data) {
    if (key === 'nextArticleId') continue;

    let _className = ""
    if (key === _key) _className = "article-nav-open"

    _array.push(
      <NavItem key={key} as="li" className={_className} css={navItemCSS} onClick={() => { _onClick(key) }}>
        {data[key].title}
      </NavItem>
    )
  }
  return (<ul>{_array}</ul>)
}

export default () => {
  const [filters, data] = useSelector(({ filters, data }) => [filters, data])
  const dispatch = useDispatch()
  return (
    <Nav>
      {navItems(filters.item, data, dispatch)}
    </Nav>
  )
}