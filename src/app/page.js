import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div>
          <form className="w-full flex flex-col gap-4 p-3 rounded-md shadow-lg shadow-indigo-700 bg-slate-600">
            <h1>LOGIN</h1>
            <div className="w-full flex justify-between gap-x-3">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            
            <div className="w-full flex justify-between gap-x-3">
              <label htmlFor="password">password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="w-full text-center">
              <button>Login</button>
            </div>
          </form>
        </div>
</section>
    </main>
  )
}
