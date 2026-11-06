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
      {students.map((student) => (
        <div key={student.id} className="rounded-xl bg-white p-5 shadow-lg">
          <h2 className="text-xl font-bold">{student.name}</h2>
          <p>{student.course}</p>
          <p>{student.college}</p>
        </div>
      ))}
    </div>
  );
};

export default Props;
