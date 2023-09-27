import { Outlet, Link } from "react-router-dom";

function Survey() {
  return (
    <div>
      <h1>questionnaire</h1>
      <Link to="client">questionnaire client</Link>
      <Link to="freelance">questionnaire freelance</Link>
      <Outlet />
    </div>
  );
}

export default Survey;
