import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { updateFilter } from '../../store/filters'

import styled, { css } from 'styled-components'
import { AnchorWithAnimation as A, Button, color } from '../styled'

const Article = styled.article`

  padding: 3rem 1rem;
  border-top: 1px solid ${color.primary};
  background-color: white;

  :last-child{
    border-bottom: 1px solid ${color.primary};
  }

  & > *, & > * > * {
    margin-bottom: 1rem;
    :last-child {
      margin-bottom: 2rem;
    }
  }

  & > .article-content > p {
    text-indent: 1em;
  }

  & > .article-source > span {
    margin-right:1rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  ${props => props.css}
`

const listItemOpenedCSS = css`
  max-height: 50rem;
`
const listItemCSS = isOpened => css`
  transition-duration: 0.5s;
  transition-property: max-height;

  overflow-y: hidden;
  max-height: 18rem;
  
  ${isOpened ? listItemOpenedCSS : null};

  ::after {
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;
    
    width: 100%;
    height: 4rem;

    background: linear-gradient(
      to bottom,
      transparent,
      white 2rem
    );
  }
`

const moreButtonCSS = css`
  z-index: 1;
  position: absolute;
  right: 1rem;
  bottom: -1rem;
`

export default ({ data, isListItem }) => {
  const dispatch = useDispatch()
  const { item: key } = useSelector(({ filters }) => filters)







  // css set
  let _css = "";
  if (isListItem) {
    if (key === data.key) _css = listItemCSS(true)
    else _css = listItemCSS()
  }



  // article child elems set
  const children = [];



  // heading
  const heading = [];
  const toPage = (e, payload) => {
    e.preventDefault();
    dispatch(updateFilter.item(false, payload));
    window.scrollTo(0, 0);
  }
  heading.push(
    <h2 key="title">
      {isListItem ?
        <A href={`/post/${data.key}`} onClick={e => toPage(e, data.key)}>
          {data.title}
        </A> : data.title
      }
    </h2>
  );
  if (data.subtitle) heading.push(
    <h4 key="subtitle">{data.subtitle}</h4>
  );
  children.push(
    <div key='heading' className='article-heading'>
      {heading}
    </div>
  )


  // content
  const content = [];
  for (let i = 0; i < data.content.length; i++) content.push(
    <p key={`content-${i}`}>{data.content[i]}</p>
  )
  children.push(
    <div key='content' className='article-content'>
      {content}
    </div>
  )


  // source or button
  if (!isListItem) {

    children.push(
      <div key='source' className='article-source'>
        <span>Source:</span><A href={data.source}>{data.source}</A>
      </div>
    )

  } else {

    let text, onClick;
    if (key !== data.key) {
      text = 'Read More'
      onClick = key => {
        dispatch(updateFilter.item(true, key))
      }
    } else {
      text = 'close'
      onClick = () => {
        dispatch(updateFilter.item(true, null))
      }
    }

    children.push(
      <Button key="button" css={moreButtonCSS} onClick={() => onClick(data.key)}>
        {text}
      </Button>
    )
  }



  return (
    <Article css={_css}>
      {children}
    </Article>
  )
}