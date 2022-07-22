/**
 * 配置表格(search下面的搜到的内容表格)
 */

export const contentTableConfig = {
  title: '用户列表',

  propList: [
    { prop: 'name', label: '角色名', minWidth: '80' },
    { prop: 'intro', label: '权限介绍', minWidth: '80' },
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
      // prop: 'updateAt',
      label: '操作',
      minWidth: '90',
      slotName: 'handle'
    }
  ],

  // 配置表格是否显示select可选框
  showSelectColumn: true,

  // 配置表格是否显示序号
  showIndexColumn: true
}
