import styled from 'styled-components'

interface IDirectory {
  backgroundColor: string
}

export const Directory = styled.div<IDirectory>`
  width: 100px;
  background-color: ${(props) => props.backgroundColor};
`
