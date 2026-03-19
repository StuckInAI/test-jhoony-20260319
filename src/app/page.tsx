import { getUsers, createUser } from "@/actions/userActions";

export default async function Home() {
  const users = await getUsers();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Hello, World!</h1>
      <p>This is a Next.js fullstack application with SQLite database.</p>
      
      <div style={{ marginTop: "2rem" }}>
        <h2>Database Connectivity Check</h2>
        <p>Current users in database: {users.length}</p>
        
        <form action={createUser} style={{ marginTop: "1rem" }}>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter user name" 
            required 
            style={{ padding: "0.5rem", marginRight: "0.5rem" }}
          />
          <button 
            type="submit"
            style={{ padding: "0.5rem 1rem", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "4px" }}
          >
            Add User
          </button>
        </form>
        
        {users.length > 0 && (
          <div style={{ marginTop: "1.5rem" }}>
            <h3>User List:</h3>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.name} (ID: {user.id})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}