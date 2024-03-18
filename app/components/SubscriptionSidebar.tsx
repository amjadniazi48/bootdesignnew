import React from "react";

function SubscriptionSidebar() {
  return (
    <aside className="widget">
      <div className="p-4 border bg-light-dark text-center mb-4">
        <h4>Get Updates</h4>
        <p className="text-dark-light">
          Subscribe our newsletter to get the last update into your inbox!
        </p>
        <div className="mx-auto">
          <form id="subscribe" className="needs-validation" action="#">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email address"
              />
              <button className="btn btn-primary" type="submit">
                Subscribe
              </button>
              <div className="invalid-feedback">
                Please insert email address.
              </div>
            </div>
          </form>
        </div>
        <p className="small text-center text-dark-light mt-3">
          hate spammers, and never spam
        </p>
      </div>
      <div className="gap-0"></div>
    </aside>
  );
}

export default SubscriptionSidebar;
