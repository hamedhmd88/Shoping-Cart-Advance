function StepTwo({ phone, setPhone, email, setEmail, errors }) {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-200">
            Phone
          </label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            className={`w-[380px] bg-transparent  text-xl text-gray-300 px-3 py-2 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-200">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className={`w-[380px] bg-transparent text-xl text-gray-300 px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default StepTwo;
