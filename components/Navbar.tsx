import { signOut, useSession } from 'next-auth/react'


const Navbar = () => {
    const { data: session, status } = useSession();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#b91c1c',
      }}
    >
      <a>{session.user.name}</a>
      &nbsp;
      <button
        onClick={() => {
          signOut({ redirect: false })
        }}
      >
        Signout
      </button>
    </div>
  )
}
export default Navbar