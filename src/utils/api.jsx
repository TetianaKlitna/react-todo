const urlEndpoint = `https://api.airtable.com/v0/${
  import.meta.env.VITE_AIRTABLE_BASE_ID
}/${encodeURIComponent(import.meta.env.VITE_TABLE_NAME)}`;

async function apiRequest(options, url = urlEndpoint) {
  const response = await fetch(url, options);

  if (!response.ok) {
    const message = `Error has ocurred: ${response.status}`;
    throw new Error(message);
  }

  const dataResponse = await response.json();

  return dataResponse;
}

export async function addTodo(todo) {
  const todoData = {
    fields: {
      title: todo.title,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
    body: JSON.stringify(todoData),
  };

  const data = await apiRequest(options);
  const addedTodo = {
    id: data.id,
    title: data.fields.title,
  };
  console.log(
    `Added record with id: ${addedTodo.id} title: ${addedTodo.title}`
  );
  return addedTodo;
}

export async function updateTodo(todo) {
  const updateRecord = `/${todo.id}`;
  console.log(updateRecord);

  const todoData = {
    fields: {
      completedAt: new Intl.DateTimeFormat("en-CA").format(new Date()),
    },
  };

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
    body: JSON.stringify(todoData),
  };

  const data = await apiRequest(options, urlEndpoint + updateRecord);
  const newTodo = {
    id: data.id,
    title: data.fields.title,
    completedAt: data.fields.completedAt,
  };
  console.log(
    `Updated record with id: ${newTodo.id} title: ${newTodo.title} completedAt: ${newTodo.completedAt}`
  );
  return newTodo;
}

export async function deleteTodo(todo) {
  const deleteRecords = `?records[]=${todo.id}`;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
  };

  const data = await apiRequest(options, urlEndpoint + deleteRecords);
  const deletedIds = data.records.map((item) => item.id);
  console.log(`Removed record with id: ${todo.id} title: ${todo.title}`);
  return deletedIds;
}

export async function getTodos() {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
  };

  const data = await apiRequest(options);
  const todos = data.records.map((todo) => {
    const newTodo = {
      id: todo.id,
      title: todo.fields.title,
      completedAt: todo.fields.completedAt,
    };
    return newTodo;
  });

  return todos;
}
