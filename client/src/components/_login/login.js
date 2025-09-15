import Link from "next/link";

// Pure presentational Login component
export const Login = ({ register, handleSubmit, onSubmit, errors, loading, error }) => {

  return (
    <section className={"rounded-xl shadow p-8 w-full max-w-lg flex flex-col gap-6"}>
      <h2 className="text-2xl font-bold text-amber-500 text-center">Login</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        
        {/* Email */}
        <input
          className="border border-gray-300 rounded px-4 py-2 text-base"
          id="username"
          type="text"
          placeholder="Brugernavn eller email"
          disabled={loading}
          {...register("username", { required: true })}
        />
        {errors?.username && <span className="text-red-500 text-xs">Påkrævet</span>}

        {/* Password */}
        <input
          className="border border-gray-300 rounded px-4 py-2 text-base"
          id="password"
          type="password"
          placeholder="Adgangskode"
          disabled={loading}
          {...register("password", { required: true })}
        />
        {errors?.password && <span className="text-red-500 text-xs">Påkrævet</span>}

        {/* Error Message fra serverkode */}
        {error && (
          <span className="text-red-500 text-xs text-center">
            {error.message}
          </span>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="bg-amber-400 text-white rounded px-4 py-2 font-semibold hover:bg-amber-500 transition-all disabled:opacity-60 shadow"
          disabled={loading}
        >
          {loading ? "Logger ind..." : "Login"}
        </button>
      </form>

      {/* Signup redirect */}
      <div className="text-center text-sm">
        <span className="text-gray-600">Ingen konto?</span>
        <Link href="/signup" className="ml-1 text-amber-500 font-semibold hover:underline">Opret bruger</Link>
      </div>
    </section>
  );
};
