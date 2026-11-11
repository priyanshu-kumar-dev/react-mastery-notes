const Props = () => {
  const students = [
    {
      id: 1,
      name: "Priyanshu Kumar",
      course: "B.Tech CSE",
      college: "Jagannath University",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      course: "BCA",
      college: "ABC University",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 p-5">
      {students.map((elem) => (
        <div key={elem.id} className="rounded-xl bg-white p-5 shadow-lg">
          <h2 className="text-xl font-bold">{elem.name}</h2>
          <p>{elem.course}</p>
          <p>{elem.college}</p>
        </div>
      ))}
    </div>
  );
};

export default Props;
