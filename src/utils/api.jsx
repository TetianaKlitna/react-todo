const urlEndpoint = `https://api.airtable.com/v0/${
  import.meta.env.VITE_AIRTABLE_BASE_ID
}/${encodeURIComponent(import.meta.env.VITE_TABLE_NAME)}`;

async function apiRequest(options, url = urlEndpoint) {
  
    const response = await fetch(url, options);

    if (!response.ok) {
      const message = `Error has ocurred: ${response.error}`;
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
    };
    return newTodo;
  });

  return todos;
}
