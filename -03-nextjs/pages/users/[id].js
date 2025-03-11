export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
  
    const paths = users.map((user) => ({
      params: { id: user.id.toString() }, // Dynamic Route berdasarkan ID
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
  
    return {
      props: { user }, // Kirim data pengguna sebagai props
    };
  }
  
  export default function UserDetail({ user }) {
    return (
      <div>
        <h1>Detail Pengguna</h1>
        <p><strong>Nama:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Alamat:</strong> {user.address.street}, {user.address.city}</p>
      </div>
    );
  }
  