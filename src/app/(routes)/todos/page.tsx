import TodosForm from "@/components/todos-form";
import { GetTodos } from "@/lib/Actions";

export default async function TodosPage() {
  const todos = await GetTodos();

  return (
    <>
      <div className="flex flex-col gap-10 h-full items-center justify-start">
        <TodosForm />
        <ul className=" w-full flex flex-col items-center">
          {todos.map((todo) => {
            return (
              <>
                <li key={todo.id} className="text-xl">
                  {todo.titolo}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
