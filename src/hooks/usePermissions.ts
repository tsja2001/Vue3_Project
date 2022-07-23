import { useStore } from '@/store'

// 判断用户是否有传入权限
export function usePermission(pageName: string, handleName: string): boolean {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  // !! => 两个取反, 将字符串转为布尔值
  return !!permissions.find((item) => item === verifyPermission)
}
