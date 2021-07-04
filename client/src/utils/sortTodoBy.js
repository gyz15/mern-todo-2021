// @desc Sort todo objectin todo list based on attribute and ascending
// @used_in ["../reducers/todoReducer"]
export default function sortTodoBy(sortBy, ascending, todoList) {
  let otherArr = [];
  for (var i = 0; i < todoList.length; i++) {
    if (!todoList[i][sortBy]) {
      otherArr.push(todoList[i]);
    }
  }

  let newArr = todoList
    .filter((todoObj) => todoObj[sortBy])
    .sort((a, b) => {
      return Date.parse(a[sortBy]) - Date.parse(b[sortBy]);
    });

  if (!ascending) {
    newArr.reverse();
  }

  return [...newArr, ...otherArr];
}
