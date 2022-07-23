/**
 * 配置表格(search下面的搜到的内容表格)
 */

export const contentTableConfig = {
  title: '用户列表',

  propList: [
    { prop: 'name', label: '用户名', minWidth: '80' },
    { prop: 'realname', label: '真实姓名', minWidth: '80' },
    { prop: 'cellphone', label: '手机号码', minWidth: '80' },
    {
      prop: 'enable',
      label: '状态',
      minWidth: '40',
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
      minWidth: '90',
      slotName: 'handle'
    }
  ],

  // 配置表格是否显示select可选框
  showSelectColumn: true,

  // 配置表格是否显示序号
  showIndexColumn: true
}
