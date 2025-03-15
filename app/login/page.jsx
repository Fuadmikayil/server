import Header from "@/Components/Header";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center py-[20px]">
        <h1 className="text-3xl  font-bold tracking-wider">LoginPage </h1>
      </div>
      <div className="flex items-center justify-center py-[20px]">
        <form action="">
          <div>
            <label htmlFor="username">Username</label>
            <input name="username" id="username" type="text" />
          </div>{" "}
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" id="password" type="text" />
          </div>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}
