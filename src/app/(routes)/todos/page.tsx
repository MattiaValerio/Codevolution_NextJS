import TodosForm from "@/components/todos-form";
import { GetTodos } from "@/lib/Actions";

export default async function TodosPage() {
  const todos = await GetTodos();

  return (
    <>
      <div className="flex flex-col h-full gap-10 items-center justify-start mb-10">
        <TodosForm />

        <ul className="flex h-full w-full flex-col items-center">
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="text-xl">
                {todo.titolo}
              </li>
            );
          })}
        </ul>

      </div>
    </>
  );
}
