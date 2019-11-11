import React from 'react'
import { useSelector } from 'react-redux'
import { css } from 'styled-components'

import { dataType } from '../../data'
import { OuterContainer as Content } from '../styled'

import Article from './Article'
import Nav from '../Nav'


const contentCSS = css`
  & > * {
    /* margin-bottom: 2rem; */
    :last-child {
      margin-bottom: 0;
    }
  }
`

export default () => {
  const [filters, data] = useSelector(({ filters, data }) => [filters, data])
  const children = []

  switch (filters.list) {
    case false:
      children.push(
        <Nav key="Nav" />,
        <Article key={filters.item} data={{ ...data[filters.item], key: filters.item }} />
      )
      break;

    case true:
    default:
      for (const key in data)
        if (key === dataType.nextArticleId) continue;
        else children.push(
          <Article key={key} isListItem data={{ ...data[key], key }} />
        )
  }

  return (
    <Content outerAs="section" innerCSS={contentCSS}>
      {children}
    </Content>
  );
}