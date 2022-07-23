export const contentTableConfig = {
  title: '商品列表',
  propList: [
    {
      prop: 'name',
      label: '商品名称',
      minWidth: '80'
    },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '60',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: '60',
      slotName: 'newPrice'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '100',
      slotName: 'image'
    },
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
