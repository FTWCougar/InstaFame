function Login({ username, password, setUsername, setPassword, handleSubmit }) {
  
    function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          value={username}
          name="username"
          placeholder="Username"
          onChange={handleUsernameChange}
          required
        ></input>
        <input
          value={password}
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          type="password"
          required
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
