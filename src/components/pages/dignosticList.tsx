import "./dignosticList.css";
import { Patient } from "../../api/api";

interface DignosticListProps {
  patientData: Patient | undefined;
}

const DignosticList: React.FC<DignosticListProps> = ({ patientData }) => {
  if (!patientData || !patientData.diagnostic_list) {
    return <p>No diagnostic data available.</p>;
  }
  return (
    <div className="dignos mt-8 px-5">
      <h2 className=" py-4 text-xl font-semibold mb-2 ">Diagnostic List</h2>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light ">
                <thead className="tableheaders  rounded-full bg-neutral-50 font-medium ">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      Problem/Diagnosis
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Description
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Status
                    </th>
                  </tr>
                </thead>
                {/* {error && <p>Error: {error}</p>} */}
                <tbody>
                  {patientData.diagnostic_list.map((diagnosis, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {diagnosis.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {diagnosis.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {diagnosis.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DignosticList;
