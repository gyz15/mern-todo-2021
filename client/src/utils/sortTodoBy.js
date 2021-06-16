// TODO complete sort by function
// Sort by
// createdAt asc desc
// dueDate ascending,descending
// haveDue true->false / false -> true
export default function sortTodoBy(sortBy, ascending, todoList) {
  let newArr = todoList.sort((a, b) => a[sortBy] - b[sortBy]);
  if (!ascending) {
    newArr.reverse();
  }

  return newArr;
}
