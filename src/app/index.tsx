import { Redirect } from "expo-router";

export default function App() {
  const userData = {
    token: "aksdjfalksdjflasdiaejrowa",
    name: "John Doe",
  };

  if (userData) {
    return <Redirect href={"/(private)/home"} />;
  }

  return <Redirect href={"/login"} />;
}
