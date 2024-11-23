import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function HospitalData({ hospital }) {
  const facilityData = [
    { name: 'Facilities', value: hospital.facilities },
    { name: 'Unused', value: 20 - hospital.facilities }, // Assuming max facilities is 20
  ];

  const doctorData = hospital.doctors.map((doctor) => ({
    name: doctor.name,
    patients: Math.floor(Math.random() * 100), // Random data for illustration
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 rounded-lg p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Facilities</h3>
          <p className="text-3xl font-bold text-blue-600">{hospital.facilities}</p>
        </div>
        <div className="bg-green-100 rounded-lg p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Patients Registered</h3>
          <p className="text-3xl font-bold text-green-600">{hospital.patientsRegistered}</p>
        </div>
        <div className="bg-yellow-100 rounded-lg p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">License No</h3>
          <p className="text-3xl font-bold text-yellow-600">{hospital.licenseNo}</p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Facility Usage</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={facilityData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {facilityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Doctors' Patient Load</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={doctorData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="patients" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Doctors</h3>
        <ul className="space-y-2">
          {hospital.doctors.map((doctor, index) => (
            <li key={index} className="bg-white rounded-lg p-3 shadow-sm">
              <span className="font-semibold">{doctor.name}</span> - {doctor.specialty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
