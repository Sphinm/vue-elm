export function formatDate(date, fmt) {
  // 对年份单独处理
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  // 其他都是两位可以统一处理
  // 补零
  let obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let i in obj) {
    if (new RegExp(`(${i})`).test(fmt)) {
      let str = obj[i] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : addZero(str))
    }
  }
  return fmt
}

function addZero(str) {
  return ('00' + str).substr(str.length)
}
