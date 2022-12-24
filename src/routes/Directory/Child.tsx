import { useState } from 'react'

import { TreeNode } from 'services/directory'

import { DownArrow } from 'assets/svgs'
import * as Styled from './index.styles'

interface Props {
  child: TreeNode
  depth?: number
}

const Child = ({ child, depth = 0 }: Props) => {
  const [isOpened, setIsOpened] = useState(true)

  const handleClick = () => {
    setIsOpened((prev) => !prev)
  }

  if (child.type === 'file') {
    return <Styled.ChildItem depth={depth}>{child.name}</Styled.ChildItem>
  }

  return (
    <>
      <Styled.ChildItem depth={depth}>
        <button type='button' onClick={handleClick}>
          {child.name}
          <Styled.ButtonArrow isOpened={isOpened}>
            <DownArrow width={19} height={19} fill='#333333' />
          </Styled.ButtonArrow>
        </button>
      </Styled.ChildItem>
      <li>
        <Styled.ChildContainer isOpened={isOpened}>
          {child.type === 'folder' && child.children?.map((c) => <Child key={`${c.id}`} child={c} depth={depth + 1} />)}
        </Styled.ChildContainer>
      </li>
    </>
  )
}

export default Child
