import { applications } from "@/lib/data";

export default function ApplicationsPage() {
  return (
    <div>
      <h1>Applications</h1>

      <div style={{ marginTop: 20 }}>
        {applications.map((app) => (
          <div
            key={app.id}
            style={{
              border: "1px solid #ddd",
              padding: 12,
              marginBottom: 10,
              borderRadius: 8,
            }}
          >
            <h3>{app.company}</h3>
            <p>{app.role}</p>
            <p>Status: {app.status}</p>
            <p>Date: {app.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
