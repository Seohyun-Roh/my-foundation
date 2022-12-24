import styled from 'styled-components'

interface IChildContainer {
  isOpened: boolean
}

interface IChildItem {
  depth?: number
}

interface IButtonArrow {
  isOpened: boolean
}

export const Directory = styled.div`
  font-size: 16px;

  button {
    font-size: 16px;
  }

  li {
    cursor: pointer;
  }
`

export const ChildContainer = styled.ul<IChildContainer>`
  overflow: hidden;
  height: ${({ isOpened }) => (isOpened ? '100%' : '0px')};
`

export const ChildItem = styled.li<IChildItem>`
  margin-left: ${({ depth }) => !!depth && depth * 20}px;

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
