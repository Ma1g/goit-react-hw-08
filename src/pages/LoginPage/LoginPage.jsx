import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div>
      <p className={css.title}>Log in is here!</p>
      <LoginForm />
    </div>
  );
}