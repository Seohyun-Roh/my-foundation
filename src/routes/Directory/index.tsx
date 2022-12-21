import { useEffect, useState } from 'react'

import api, { TreeNode } from 'services/directory'

import Child from './Child'

const Directory = () => {
  const [directory, setDirectory] = useState<TreeNode[]>()

  useEffect(() => {
    api.getDirectoryTree().then((res) => setDirectory(res))
  }, [])

  return <div>{directory && <Child data={directory} />}</div>
}

export default Directory
