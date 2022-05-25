import BlankLayout from "../../components/layouts/BlankLayout";

const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
    </>
  );
};

Login.layout = (page) => {
	return <BlankLayout>{page}</BlankLayout>
}
export default Login;
