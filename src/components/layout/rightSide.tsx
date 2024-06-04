// import React from "react";
import "./rightside.css";
import Nurse from "../../assets/Layer 2.png";
import Date from "../../assets/BirthIcon.png";
import Gender from "../../assets/FemaleIcon.png";
import Phone from "../../assets/PhoneIcon.png";
import Insure from "../../assets/InsuranceIcon.png";
import React, { useEffect, useState } from "react";

import { fetchPatients, Patient } from "../../api/api";

const RigtSideSinglePatient: React.FC = () => {
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

  if (error) {
    return (
      <div>
        <div className=" mt-5 rightside">
          <p className=" " style={{ backgroundColor: "orangered" }}>
            Error: {error}
          </p>
          <div className="img  text-center mt-5 py-5">
            <img src={Nurse} alt="" className="mx-auto" />
            <h2 className=" font-extrabold py-4 tracking-widest  ">
              Jessica Taylor
            </h2>
          </div>
          <div className="text-left ">
            <figcaption className="px-5 flex items-center space-x-4">
              <img
                src={Date}
                alt=""
                className="flex-none w-10 h-10 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-aut">
                <div className="inset-0 "> Date Of Birth</div>
                <div className="text-base text-slate-600 font-semibold dark:text-slate-300">
                  <span className="mt-0.1"></span>
                  August 23, 1996
                </div>
              </div>
            </figcaption>

            <figcaption className="px-5  py-5 flex items-center space-x-4">
              <img
                src={Gender}
                alt=""
                className="flex-none w-10 h-10 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-aut">
                <div className="inset-0 "> Gender</div>
                <div className="text-base text-slate-600 font-semibold dark:text-slate-300">
                  <span className="mt-0.1"></span>
                  Female
                </div>
              </div>
            </figcaption>

            <figcaption className="px-5   flex items-center space-x-4">
              <img
                src={Phone}
                alt=""
                className="flex-none w-10 h-10 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-aut">
                <div className="inset-0 ">Contact info</div>
                <div className="text-base text-slate-600 font-semibold dark:text-slate-300">
                  <span className="mt-0.1"></span>
                  (415) 555-1234
                </div>
              </div>
            </figcaption>
            <figcaption className="px-5  py-5 flex items-center space-x-4">
              <img
                src={Phone}
                alt=""
                className="flex-none w-10 h-10 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-aut">
                <div className="inset-0 ">Emergency Contact</div>
                <div className="text-base text-slate-600 font-semibold dark:text-slate-300">
                  <span className="mt-0.1"></span>
                  (415) 555-5678
                </div>
              </div>
            </figcaption>

            <figcaption className="px-5   flex items-center space-x-4">
              <img
                src={Insure}
                alt=""
                className="flex-none w-10 h-10 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-aut">
                <div className="inset-0 ">Insurance Provider</div>
                <div className="text-base text-slate-600 font-semibold dark:text-slate-300">
                  <span className="mt-0.1">Sunrise Health Assurance</span>
                </div>
              </div>
            </figcaption>
          </div>

          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-tech-care-green hover: bg-blue-500 rounded-full text-base  font-semibold">
              Show All Information{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!patient) {
    return <p>Loading or Patient not found...</p>;
  }

  return (
    <div>
      <div className=" mt-5 rightside">
        <div className="img  text-center mt-5 py-5">
          <img src={patient.profile_picture} alt="" className="mx-auto" />
          <h2 className=" font-extrabold py-4 tracking-widest  ">
            {patient.name}
          </h2>
        </div>
        <div className="text-left ">
          <figcaption className="px-5 flex items-center space-x-4">
            <img
              src={Date}
              alt=""
              className="flex-none w-10 h-10 rounded-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-aut">
              <div className="inset-0 "> Date Of Birth</div>
              <div className="text-base text-slate-600 font-semibold dark:text-slate-300">
                <span className="mt-0.1"></span>
                {patient.date_of_birth}
              </div>
            </div>
          </figcaption>

          <figcaption className="px-5  py-5 flex items-center space-x-4">
            <img
              src={Gender}
              alt=""
              className="flex-none w-10 h-10 rounded-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-aut">
              <div className="inset-0 "> Gender</div>
              <div className="text-base text-slate-600 font-semibold dark:text-slate-300">
                <span className="mt-0.1"></span>
                {patient.gender}
              </div>
            </div>
          </figcaption>

          <figcaption className="px-5   flex items-center space-x-4">
            <img
              src={Phone}
              alt=""
              className="flex-none w-10 h-10 rounded-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-aut">
              <div className="inset-0 ">Contact info</div>
              <div className="text-base text-slate-600 font-semibold dark:text-slate-300">
                <span className="mt-0.1"></span>
                (415) 555-1234
              </div>
            </div>
          </figcaption>
          <figcaption className="px-5  py-5 flex items-center space-x-4">
            <img
              src={Phone}
              alt=""
              className="flex-none w-10 h-10 rounded-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-aut">
              <div className="inset-0 ">Emergency Contact</div>
              <div className="text-base text-slate-600 font-semibold dark:text-slate-300">
                <span className="mt-0.1"></span>
                {patient.emergency_contact}
              </div>
            </div>
          </figcaption>

          <figcaption className="px-5   flex items-center space-x-4">
            <img
              src={Insure}
              alt=""
              className="flex-none w-10 h-10 rounded-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-aut">
              <div className="inset-0 ">Insurance Provider</div>
              <div className="text-base text-slate-600 font-semibold dark:text-slate-300">
                <span className="mt-0.1"></span>
                {patient.insurance_type}
              </div>
            </div>
          </figcaption>
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-tech-care-green hover: bg-blue-500 rounded-full text-base  font-semibold">
            Show All Information{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default RigtSideSinglePatient;
