export interface TreeNode {
  id: number
  name: string
  type: 'folder' | 'file'
  children?: TreeNode[]
}

const directoryTree: TreeNode = {
  id: 1,
  name: 'Root',
  type: 'folder',
  children: [
    {
      id: 2,
      name: 'Child 1',
      type: 'folder',
      children: [
        {
          id: 3,
          name: 'Grand Child',
          type: 'file',
        },
      ],
    },
    {
      id: 4,
      name: 'Child 2',
      type: 'folder',
      children: [
        {
          id: 5,
          name: 'Grand Child',
          type: 'folder',
          children: [
            {
              id: 6,
              name: 'Great Grand Child 1',
              type: 'file',
            },
            {
              id: 7,
              name: 'Grand Grand Child 2',
              type: 'file',
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: 'Child 3',
      type: 'file',
    },
  ],
}

export default {
  getDirectoryTree: async () => directoryTree,
}
