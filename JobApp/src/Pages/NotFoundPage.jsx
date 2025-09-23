import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFoundPage() {
  // const [task, setTask] = useState("");
  // const [todo, setTodo] = useState([]);

  // const handleSave = () => {
  //   if (task.trim() === "") return;
  //   setTodo([...todo, { id: Date.now(), text: task }]);
  //   setTask("");
  // };

  // const handleDelete = (id) => {
  //   setTodo(todo.filter((todo) => todo.id !== id));
  // };

  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
      {/* <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSave}>Save</button>
        <br />
        <hr />
        <br />
        <hr />
        <br />
        <div>
          {todo.map((todo, id) => (
            <div key={id}>
              <button onClick={() => handleDelete(todo.id)}>{todo.text}</button>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}

export default NotFoundPage;
