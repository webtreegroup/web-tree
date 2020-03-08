import React from "react";

import "./EntryForm.scss";

function EntryForm() {
  return (
    <div className="entry-form">
      <form action="#" method="post">
        <h2>Signup today</h2>
        <input
          type="text"
          name="full name"
          className="form-control"
          placeholder="Full name"
        />

        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Your email address"
        />

        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Your password"
        />

        <button className="submit-btn form-control" id="form-submit">
          Get started
        </button>
      </form>
    </div>
  );
}

export default EntryForm;
