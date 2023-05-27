import { get, writable } from "svelte/store";

const createTodoStore = () => {
  const storageContent = localStorage.getItem("svelte-todos") ?? "[]";
  const localTodos = JSON.parse(storageContent) ?? [];

  const { set, subscribe } = writable(localTodos);

  const add = (todo) => {
    const old = get(todos);
    set([...old, todo]);
  };

  const remove = (id) => {
    const removed = get(todos).filter((item) => item.id !== id);
    set(removed);
  };

  const save = () => {
    localStorage.setItem("svelte-todos", JSON.stringify(get(todos)));
  };

  const update = (id, isDone) => {
    const index = get(todos).findIndex((item) => item.id === id);
    if (index == null) return;
    const updated = get(todos);
    updated[index].isDone = isDone;
    set(updated);
  };

  const removeCompleted = () => {
    const updated = get(todos).filter((item) => !item.isDone);
    set(updated);
  };

  return {
    subscribe,
    add,
    set,
    remove,
    save,
    update,
    removeCompleted,
  };
};

const createShowAllStore = () => {
  const localShowAll = JSON.parse(localStorage.getItem("show-all")) ?? true;
  const { set, subscribe } = writable(localShowAll);

  const save = () => {
    localStorage.setItem("show-all", JSON.stringify(get(showAll)));
  };

  return {
    subscribe,
    set,
    save,
  };
};

export const todos = createTodoStore();
export const showAll = createShowAllStore();
