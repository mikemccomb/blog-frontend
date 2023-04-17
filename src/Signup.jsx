export function Signup() {
  return (
    <div>
      <h2>Signup Form</h2>
      <div id="signup">
        <form>
          <div>
            Name: <input type="text" />
          </div>
          <div>
            Email: <input type="email" />
          </div>
          <div>
            Password: <input type="password" />
          </div>
          <div>
            Confirm Password: <input type="password" />
          </div>
        </form>
      </div>
    </div>
  );
}
