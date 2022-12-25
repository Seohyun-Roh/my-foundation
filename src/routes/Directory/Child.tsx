import { useState } from 'react'

import { TreeNode } from 'services/directory'

import { DownArrow } from 'assets/svgs'
import * as Styled from './index.styles'

interface Props {
  child: TreeNode
}

const Child = ({ child }: Props) => {
  const [isOpened, setIsOpened] = useState(true)

  const handleClick = () => {
    setIsOpened((prev) => !prev)
  }

  if (child.type === 'file') {
    return <Styled.ChildItem>{child.name}</Styled.ChildItem>
  }

  return (
    <>
      <Styled.ChildItem>
        <button type='button' onClick={handleClick}>
          {child.name}
          <Styled.ButtonArrow isOpened={isOpened}>
            <DownArrow width={18} height={18} fill='#666666' />
          </Styled.ButtonArrow>
        </button>
      </Styled.ChildItem>
      <li>
        <Styled.ChildContainer isOpened={isOpened}>
          {child.type === 'folder' && child.children?.map((c) => <Child key={`${c.id}`} child={c} />)}
        </Styled.ChildContainer>
      </li>
    </>
  )
}

export default Child
