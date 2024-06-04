// import Sidebar from "../layout/sidebar";
// import RightSide from "../layout/rightSide";
// import Middle from "./middle";
// import SecondRightSide from "../layout/secondRightSide";
// import DignosticList from "./dignosticList.tsx";
// import React, { useEffect, useState } from "react";

// import { fetchPatients, Patient } from "../../api/api";

// // Interface for DignosticList component props
// interface DignosticListProps {
//   patientData?: Patient; // Optional patient data
// }

// const Main: React.FC = () => {
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchPatients();
//         setPatients(data);
//       } catch (error: any) {
//         setError(error.message);
//       }
//     };

//     fetchData();
//   }, []);
//   const patientName = "Jessica Taylor";
//   const patient = patients.find((patient) => patient.name === patientName);

//   return (
//     <div className="mx-auto px-2 grid gap-4 sm:grid-cols-12">
//       <div className="sm:col-span-3">
//         <Sidebar />
//       </div>
//       <div className="sm:col-span-6">
//         <Middle />
//         <DignosticList patient={patient} />
//       </div>
//       <div className="sm:col-span-3">
//         <RightSide />
//         <SecondRightSide />
//       </div>
//     </div>
//   );
// };

// export default Main;

// src/components/Main.tsx

import React, { useEffect, useState } from "react";
import Sidebar from "../layout/sidebar";
import RightSide from "../layout/rightSide";
import Middle from "./middle";
import SecondRightSide from "../layout/secondRightSide";
import DignosticList from "./dignosticList";
import { fetchPatients, Patient } from "../../api/api";

const Main: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const patientName = "Jessica Taylor";
  const patient = patients.find((patient) => patient.name === patientName);
  if (error) console.log(error);

  return (
    <div className="mx-auto px-2 grid gap-4 sm:grid-cols-12">
      <div className="sm:col-span-3">
        <Sidebar />
      </div>
      <div className="sm:col-span-6">
        <Middle
          systolic={160}
          diastolic={78}
          respiratoryRate={20}
          temperature="98.6°F"
          heartRate={78}
        />
        <DignosticList patientData={patient} />
      </div>
      <div className="sm:col-span-3">
        <RightSide />
        <SecondRightSide />
      </div>
    </div>
  );
};

export default Main;
