export default function Profile({ data, setData, errors }) {
  const { name, email, age } = data;

  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <div className="flex flex-col ">
        <label htmlFor="name">Name</label>
        <input
          className="border rounded-lg outline-none px-2"
          value={name}
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name...!"
          onChange={(e) => handleDataChange(e, "name")}
        />
       {errors.name && <span className="text-red-500">{errors.name} </span>}
      </div>
      <div className="flex flex-col ">
        <label htmlFor="age">Age</label>
        <input
          className="border rounded-lg outline-none px-2"
          value={age}
          type="number"
          name="age"
          id="age"
          placeholder="Enter your name...!"
          onChange={(e) => handleDataChange(e, "age")}
        />
            {errors.name && <span className="text-red-500">{errors.age} </span>}
      </div>
      <div className="flex flex-col ">
        <label htmlFor="email">Email</label>
        <input
          className="border rounded-lg outline-none px-2"
          value={email}
          type="text"
          name="email"
          id="email"
          placeholder="Enter your name...!"
          onChange={(e) => handleDataChange(e, "email")}
        />
            {errors.name && <span className="text-red-500">{errors.email} </span>}
      </div>
    </div>
  );
}
