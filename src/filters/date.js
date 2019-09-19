export default function (newDate) {
  let dates = new Date(newDate * 1000)
  let year = dates.getFullYear()
  let month = '0' + (dates.getMonth() + 1)
  let date = '0' + dates.getDate()
  return `${year}-${month.substr(-2)}-${date.substr(-2)}`
}

// .substr(Start, Length): Start 可以 < 0
// .substring(Start, End): Start 不可以 < 0
