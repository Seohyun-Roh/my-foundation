import { useEffect, useState } from 'react'

import api, { TreeNode } from 'services/directory'

import Child from './Child'

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
