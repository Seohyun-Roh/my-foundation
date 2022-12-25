import styled, { css } from 'styled-components'

interface IChildContainer {
  isOpened?: boolean
}

interface IButtonArrow {
  isOpened: boolean
}

export const Directory = styled.section`
  padding: 15px 0;
  font-size: 16px;
`

export const ChildContainer = styled.ul<IChildContainer>`
  overflow: hidden;
  margin-left: 10px;
  padding-left: 5px;
  border-left: 1px solid #eeeeee;

  ${({ isOpened }) => {
    if (isOpened !== undefined && !isOpened) {
      return css`
        height: 0px;
      `
    }

    return css`
      height: 100%;
    `
  }}

  button {
    font-size: 16px;
  }

  li {
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
  }
`

export const ChildItem = styled.li`
  button {
    display: flex;
    align-items: center;
  }
`

export const ButtonArrow = styled.span<IButtonArrow>`
  display: flex;
  align-items: center;
  transform: ${({ isOpened }) => (isOpened ? 'scaleY(1)' : 'scaleY(-1)')};
`
