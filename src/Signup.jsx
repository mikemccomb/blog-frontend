import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/users.json", params)
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
      <h2>Signup Form</h2>
      <div id="signup">
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input type="text" name="name" />
          </div>
          <div>
            Email: <input type="email" name="email" />
          </div>
          <div>
            Password: <input type="password" name="password" />
          </div>
          <div>
            Confirm Password: <input type="password" name="password_confirmation" />
          </div>
          <button type="submit">Finish Signup</button>
        </form>
      </div>
    </div>
  );
}
