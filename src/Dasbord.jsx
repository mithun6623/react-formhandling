import React from 'react'
import "./Dasbord.css"

const Dasbord = () => {
  return (
    <main className="dashboard">
      <section className="dashboard-header">
        <h1>Dashboard</h1>
        <p className="subtitle">
          Welcome back! Here is an overview of your account activity.
        </p>
      </section>

      <section className="dashboard-content">
        <article className="card">
          <h2>Profile Overview</h2>
          <p>
            Manage your account details, update personal information,
            and track your recent activities.
          </p>
        </article>

        <article className="card">
          <h2>Recent Activity</h2>
          <p>
            Stay updated with your latest actions and system notifications.
          </p>
        </article>

        <article className="card">
          <h2>Security Settings</h2>
          <p>
            Review your password and account protection settings to ensure
            maximum security.
          </p>
        </article>
      </section>
    </main>
  )
}

export default Dasbord
