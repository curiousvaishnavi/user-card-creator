import React, { useEffect, useState } from "react";

const App = () => {

  //UseState:-"Jab application start ho, Local Storage mein pehle se users hain to unhe wapas state mein load kar lena."

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");

    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    image: ""
  });



  //useEffect React ko bol raha hai: "Jab bhi users change ho, updated users ko Local Storage mein save kar dena."

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);



  function handleSubmit(e) {
    e.preventDefault();
    setUsers([
      ...users,
      formData
    ]);


    setFormData({
      name: "",
      email: "",
      course: "",
      image: ""
    });
  }


  function deleteUser(index) {

    const newUsers = users.filter((user, i) => {
      return i !== index;
    });

    setUsers(newUsers);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Enter name"
          className="w-[22%] px-4 py-3 border ml-7 mt-3 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          value={formData.name}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value
            });
          }}
        />

        <input
          type="email"
          required
          placeholder="Enter email"
          className="w-[22%] px-4 py-3 border ml-7 mt-1.5 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          value={formData.email}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value
            });
          }}
        />

        <input
          type="text"
          placeholder="Enter course"
          required
          className="w-[22%] px-4 py-3 border ml-7 mt-1.5 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          value={formData.course}
          onChange={(e) => {
            setFormData({
              ...formData,
              course: e.target.value
            });
          }}
        />

        <input
          type="url"
          placeholder="Enter image URL"
          required
          className="w-[22%] px-4 py-3 ml-7 mt-1.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={formData.image}
          onChange={(e) => {
            setFormData({
              ...formData,
              image: e.target.value
            });
          }}
        />

        <button
          className="w-[30%] mx-auto mt-6 px-4 py-3 border bg-amber-700 hover:bg-olive-950 border-yellow-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition flex items-center justify-center"
        >
          Add User
        </button>
      </form>

      <div className="flex flex-wrap gap-6 p-6">

        {users.map((user, index) => (

          <div
            key={index}
            className="w-70 bg-purple-300  border-[#615802] text-[#070101] rounded-2xl p-6 "
          >

            <img
              src={user.image}
              alt={user.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="mb-2 text-2xl font-bold text-gray-800">
              {user.name}
            </h2>

            <p className="mb-1 text-gray-600">
              {user.email}
            </p>

            <p className="mb-5 text-gray-500">
              {user.course}
            </p>

            <button
              onClick={() => deleteUser(index)}
              className="w-full rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600 active:scale-95"
            >
              Delete
            </button>
          </div>

        ))}

      </div>

    </div>
  );
};

export default App;