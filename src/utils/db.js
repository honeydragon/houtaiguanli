/**
 * 获取所有数据
 */
export function getAllPeople() {
  var people = []
  if (localStorage.getItem('people')) {
    // JSON.parse把json字符串格式化为js对象
    people = JSON.parse(localStorage.getItem('people'))
  }
  return people
}

/**
 * 保存
 * @param {*} person
 */
export function save(person) {
  var people = getAllPeople()
  people.push(person)
  localStorage.setItem('people', JSON.stringify(people))
}

/**
 * 查询id符合条件的一条记录
 * @param {*} id
 */
export function findOne(id) {
  var people = getAllPeople()
  return people.find(function(person) {
    return person.id == id
  })
}

/**
 * 根据id修改
 * @param {*} id
 * @param {*} person
 */
export function update(id, person) {
  var people = getAllPeople()
  // 找到id符合条件的索引
  var index = people.findIndex(function(person) {
    return person.id == id
  })
  person.id = id * 1
  people[index] = person
  localStorage.setItem('people', JSON.stringify(people))
}

/**
 * 根据id删除
 * @param {*} id
 */
export function deleteOne(id) {
  var people = getAllPeople()
  // 找到id符合条件的索引
  var index = people.findIndex(function(person) {
    return person.id == id
  })
  people.splice(index, 1)
  localStorage.setItem('people', JSON.stringify(people))
}
