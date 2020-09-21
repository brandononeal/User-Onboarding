import React from "react";

export default function Form(props) {
  const { values, errors, change, submit, disabled, users } = props;

  return (
    <div className="App">
      <h1>User Onboarding Form</h1>
      <form onSubmit={submit}>
        <div className="errors-container">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
        <div className="form-container">
          <div className="input-container">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={change}
            />
          </div>

          <div className="input-container">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={change}
            />
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={change}
            />
          </div>

          <label>
            Terms of Service:{" "}
            <input
              type="checkbox"
              name="tos"
              checked={values.tos}
              onChange={change}
            />
          </label>
        </div>
        <button disabled={disabled}>Submit</button>
        <div className="user-container">
          {users.map((user) => {
            if (!user) {
              return <h3>Working on fetching your users...</h3>;
            }
            return (
              <div className="details-container">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}
