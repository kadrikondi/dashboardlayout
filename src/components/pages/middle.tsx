// import React from "react";
import "./midle.css";

// export default function middle() {
//   return (
//     <div>
//       <div className="mt-5 middle"></div>
//     </div>
//   );
// }
import React from "react";
import Res from "../../assets/icon/respiratory rate.svg";
import Tem from "../../assets/icon/temperature.svg";
import Hrate from "../../assets/icon/HeartBPM.svg";
import BloodPressureChart from "./BloodPressureChart";

interface DiagnosisHistoryProps {
  systolic: number;
  diastolic: number;
  respiratoryRate: number;
  temperature: string;
  heartRate: number;
}

const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({
  // systolic,
  // diastolic,
  respiratoryRate,
  temperature,
  heartRate,
}) => {
  return (
    <div className="mt-5 middle">
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-6">Diagnosis History</h2>

        <div className="mb-6 graphh mt-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <BloodPressureChart />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg text-left  bpmm">
            <img src={Res} alt="" className="rounded-full py-3" />
            <div className="text-gray-500">Respiratory Rate</div>
            <div className="text-blue-500 text-2xl font-semibold pb-5 ">
              {respiratoryRate} bpm
            </div>

            <div className="text-sm text-gray-400">Normal</div>
          </div>
          <div className="bg-red-100 p-4 rounded-lg text-left temp">
            <img src={Tem} alt="" className="rounded-full py-3" />
            <div className="text-gray-500">Temperature</div>
            <div className="text-red-500 text-2xl font-semibold pb-5">
              {temperature}
            </div>

            <div className="text-sm text-gray-400">Normal</div>
          </div>
          <div className="bg-pink-100 p-4 rounded-lg text-left hrate">
            <img src={Hrate} alt="" className="rounded-full py-3" />
            <div className="text-gray-500">Heart Rate</div>
            <div className="text-pink-500 text-2xl font-semibold pb-5">
              {heartRate} bpm
            </div>

            <div className="text-sm text-gray-400">Lower than Average</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
