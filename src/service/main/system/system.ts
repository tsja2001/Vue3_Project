import hyRequest from '@/service'
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any): any {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// 删除数据, 传入格式: /users/id
export function deletePageData(url: string): any {
  return hyRequest.delete<IDataType>({
    url: url
  })
}

// 新建数据
export function createPageData(url: string, newData: any): any {
  return hyRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

// 编辑数据
export function editPageData(url: string, editData: any): any {
  return hyRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
