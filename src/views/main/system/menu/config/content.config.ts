/**
 * 配置表格(search下面的搜到的内容表格)
 */

export const contentTableConfig = {
  title: '用户列表',

  propList: [
    {
      prop: 'name',
      label: '菜单名称',
      minWidth: '120'
    },
    {
      prop: 'type',
      label: '类型',
      minWidth: '60'
    },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '100'
    },
    {
      prop: 'icon',
      label: '菜单icon',
      minWidth: '100'
    },
    {
      prop: 'permission',
      label: '按钮权限',
      minWidth: '100',
      slotName: 'status'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '90',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '90',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '70',
      slotName: 'handle'
    }
  ],
  // 可以展开的子元素
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
