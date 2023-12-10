import TodosForm from "@/components/todos-form";
import { GetTodos } from "@/lib/Actions";

export default async function TodosPage() {
  const todos = await GetTodos();

  return (
    <>
      <div className="flex flex-col gap-10 h-[100%] items-center justify-start">
        <TodosForm />
        <div className="relative h-full w-full">
          <ul className="flex absolute top-0 bottom-0 overflow-x-hidden w-full flex-col  flex-grow items-center">
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
      </div>
    </>
  );
}
