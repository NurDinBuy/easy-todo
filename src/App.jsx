import { useState } from "react";
import classes from "./App.module.scss";

const App = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  const onChangeInput = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const addEditUser = (id) => {
    const newUsers = [...users];
    newUsers[id].name = input;
    setUsers(newUsers);
    setInput("");
  };

  const addUserName = () => {
    setInput("");
    setUsers((prev) => [...prev, { name: input }]);
  };
  console.log(users);

  return (
    <div className={classes.wrapper}>
      <div className={classes.usersBlock}>
        <form onSubmit={addUserName}>
          <input
            placeholder="enter your name"
            type="text"
            onChange={(e) => onChangeInput(e)}
            value={input}
          />
          <button
            onClick={addUserName}
            disabled={!input}
            className={classes.buttonStyle}
          >
            add name
          </button>
        </form>
      </div>
      <div className={classes.users}>
        {users.length > 0 ? (
          users.map((user, userId) => (
            <div key={userId} className={classes.user}>
              <p>{user.name}</p>
              <button
                className={classes.buttonStyle}
                onClick={() => addEditUser(userId)}
                disabled={!input}
              >
                edit
              </button>
            </div>
          ))
        ) : (
          <div className={classes.empty}>Список пуст...</div>
        )}
      </div>
    </div>
  );
};

export default App;
