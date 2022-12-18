import { Fragment, useEffect, useState } from 'react'

import api, { TreeNode } from 'services/directory'

interface Props {
  data: TreeNode[] | undefined
}

const Child = ({ data }: Props) => {
  return (
    <li>
      <ul>
        {data?.map((child) => {
          return (
            <Fragment key={`${child.id}-${child.name}`}>
              <li>{child.name}</li>
              {child.type === 'folder' && <Child data={child.children} />}
            </Fragment>
          )
        })}
      </ul>
    </li>
  )
}

const Directory = () => {
  const [directory, setDirectory] = useState<TreeNode>()

  useEffect(() => {
    api.getDirectoryTree().then((res) => setDirectory(res))
  }, [])

  return (
    <div>
      {directory && (
        <ul>
          <li>{directory.name}</li>
          <Child data={directory.children} />
        </ul>
      )}
    </div>
  )
}

export default Directory
