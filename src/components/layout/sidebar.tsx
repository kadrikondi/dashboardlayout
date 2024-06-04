import React, { useEffect, useState } from "react";
import "./sidebar.css";
import Search from "../../assets/icon/search_FILL0_wght300_GRAD0_opsz24.svg";

import More from "../../assets/icon/more_vert_FILL0_wght300_GRAD0_opsz24.svg";
import { fetchPatients, Patient } from "../../api/api";
// import { formatDate } from "../../utils/dateUtil";

const PatientsList: React.FC = () => {
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
  return (
    <div className="sidbar mt-5">
      <div className="m-6 py-5 flex justify-start mt-5">
        <div>
          <h2 className="patien  font-semibold">Patients</h2>
        </div>

        <div className=" ml-60">
          <img src={Search} alt="" />
        </div>
      </div>
      {error && <p>Error: {error}</p>}
      {patients ? (
        patients.map((patient: any): any => (
          <div className=" flex px-5 self-start sticky top-0 col-span-1">
            <figcaption className=" flex items-center space-x-4">
              <img
                src={patient.profile_picture}
                alt={`${patient.name}'s profile`}
                className="flex-none w-10 h-10 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-aut px-">
                <div className="text-base text-slate-600 font-semibold dark:text-slate-300">
                  <span className="absolute inset-0"></span>
                  {patient.name}
                </div>
                <div className="mt-0.1 " style={{ color: "#707070" }}>
                  {patient.gender},{patient.age}
                </div>
              </div>
            </figcaption>
            <div className="flex justify-end  ml-32">
              <img src={More} alt="" className="rotate-90" />
            </div>
          </div>
        ))
      ) : (
        <h3> no data</h3>
      )}
    </div>
  );
};

export default PatientsList;
