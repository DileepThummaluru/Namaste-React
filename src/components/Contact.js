const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-2 p-2">Contact US Page</h1>
      <input
        placeholder="name"
        className="border border-gray-200 rounded-lg p-2 m-2"
      />
      <input
        placeholder="problem"
        className="border border-gray-200 rounded-lg p-2 m-2"
      />
      <button className="rounded-lg p-2 m-2 bg-black text-white">Submit</button>
    </div>
  );
};

export default Contact;
