// src/api/api.ts

export interface Diagnosis {
  name: string;
  description: string;
  status: string;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: {
    month: string;
    year: number;
    blood_pressure: {
      systolic: { value: number; levels: string };
      diastolic: { value: number; levels: string };
    };
    heart_rate: { value: number; levels: string };
    respiratory_rate: { value: number; levels: string };
    temperature: { value: number; levels: string };
  }[];
  diagnostic_list: Diagnosis[];
  lab_results: string[];
}

export const fetchPatients = async (): Promise<Patient[]> => {
  const username = "coalition";
  const password = "skills-test";
  const credentials = btoa(`${username}:${password}`);

  try {
    const response = await fetch(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: Patient[] = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
