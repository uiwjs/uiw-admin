import useSWR from 'swr'

// 公共接口数据 重复数据hooks 都建在此文件夹
// 利用swr复用接口数据，各个页面都可用
// https://swr.vercel.app/zh-CN/docs/getting-started#%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%BB%84%E4%BB%B6

// 模糊获取城市接口
function useCity(val: string) {
  const { data, error } = useSWR(`/api/city/?val=${val}`)
  return {
    city: data?.data,
    isLoading: !error && !data,
    isError: error,
  }
}

export { useCity }
