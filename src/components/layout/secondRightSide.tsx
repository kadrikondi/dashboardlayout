import "./secondright.css";
// import { DownloadIcon } from "@heroicons/react/solid";
import Download from "../../assets/icon/download_FILL0_wght300_GRAD0_opsz24 (1).svg";
export default function secondRightSide() {
  const labResults = [
    "Blood Tests",
    "CT Scans",
    "Radiology Reports",
    "X-Rays",
    "Urine Test",
  ];
  return (
    <div className="mt-8">
      <div className="secondR ">
        <h2 className=" font-extrabold mx-5 mt-5 py-5 tracking-wider ">
          Lab Results
        </h2>

        <div className="max-w-sm mx-auto">
          <ul className="">
            {labResults.map((result, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-8 py-2 last:border-b-0 hover:bg-tech-g   cursor-pointer"
              >
                <span>{result}</span>
                <img src={Download} className="w-5 h-5 text-gray-600" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
