import axios from "axios";

export function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };
  return (
    <div>
      <h2>Log In</h2>
      <div id="login">
        <form onSubmit={handleSubmit}>
          <div>
            Email: <input type="email" name="email" />
          </div>
          <div>
            Password: <input type="password" name="password_digest" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
