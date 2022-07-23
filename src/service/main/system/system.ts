import hyRequest from '@/service'
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any): any {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// 删除数据, 传入格式: /users/id
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url: url
  })
}
