export default function DisDropdown({ hospitals, onSelect }) {
    return (
      <div>
        <label htmlFor="hospital-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select a Hospital
        </label>
        <select
          id="hospital-select"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          onChange={(e) => {
            const selected = hospitals.find((h) => h.id === parseInt(e.target.value));
            if (selected) onSelect(selected);
          }}
        >
          <option value="">Choose a hospital</option>
          {hospitals.map((hospital) => (
            <option key={hospital.id} value={hospital.id}>
              {hospital.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
  