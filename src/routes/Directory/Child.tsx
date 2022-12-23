import { useState } from 'react'

import { TreeNode } from 'services/directory'

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
    return <li style={{ marginLeft: depth * 20 }}>{child.name}</li>
  }

  return (
    <>
      <li style={{ marginLeft: depth * 20 }}>
        <button type='button' onClick={handleClick}>
          {child.name}
        </button>
      </li>
      <li>
        <ul>
          {isOpened &&
            child.type === 'folder' &&
            child.children?.map((c) => <Child key={`${c.id}`} child={c} depth={depth + 1} />)}
        </ul>
      </li>
    </>
  )
}

export default Child
