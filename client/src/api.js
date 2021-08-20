export const createTodo = (todo) => fetch("http://localhost:4000/", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 