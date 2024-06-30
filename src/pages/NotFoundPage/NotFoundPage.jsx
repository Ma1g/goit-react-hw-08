import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.wrapper}>
      <p>Sorry mate, we were unable to find the page. Try next time please!</p>
      <p>
        <Link to="/">Go Back!</Link>
      </p>
    </div>
  );
}