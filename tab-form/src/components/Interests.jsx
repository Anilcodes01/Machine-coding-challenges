export default function Interests({ data, setData, errors }) {
  const { interests } = data;

  const handleDataChange = (e, name) => {
    setData((prevState) => ({
        ...prevState, 
        interests: e.target.checked 
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name)
    }))
  }

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
          coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleDataChange}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="work"
            checked={interests.includes("Work")}
            onChange={handleDataChange}
          />
          Work
        </label>
      </div>
      {errors.interests && <span className="text-red-500">{errors.interests} </span>}
    </div>
  );
}
