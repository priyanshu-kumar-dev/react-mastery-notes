import { useSearchParams } from "react-router";

function Jobs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const location = searchParams.get("location") || "";

  return (
    <div>
      <h1>Job Search</h1>

      <input
        type="text"
        placeholder="Search job"
        value={search}
        onChange={(e) => {
          setSearchParams({
            search: e.target.value,
            location,
          });
        }}
      />

      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => {
          setSearchParams({
            search,
            location: e.target.value,
          });
        }}
      />

      <h3>Search: {search}</h3>
      <h3>Location: {location}</h3>
    </div>
  );
}

export default Jobs;