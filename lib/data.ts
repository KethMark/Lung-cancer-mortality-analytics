export const countries = [
  { label: "Austria", value: "Austria" },
  { label: "Belgium", value: "Belgium" },
  { label: "Bulgaria", value: "Bulgaria" },
  { label: "Croatia", value: "Croatia" },
  { label: "Cyprus", value: "Cyprus" },
  { label: "Czech Republic", value: "Czech Republic" },
  { label: "Denmark", value: "Denmark" },
  { label: "Estonia", value: "Estonia" },
  { label: "Finland", value: "Finland" },
  { label: "France", value: "France" },
  { label: "Germany", value: "Germany" },
  { label: "Greece", value: "Greece" },
  { label: "Hungary", value: "Hungary" },
  { label: "Ireland", value: "Ireland" },
  { label: "Italy", value: "Italy" },
  { label: "Latvia", value: "Latvia" },
  { label: "Lithuania", value: "Lithuania" },
  { label: "Luxembourg", value: "Luxembourg" },
  { label: "Malta", value: "Malta" },
  { label: "Netherlands", value: "Netherlands" },
  { label: "Poland", value: "Poland" },
  { label: "Portugal", value: "Portugal" },
  { label: "Romania", value: "Romania" },
  { label: "Slovakia", value: "Slovakia" },
  { label: "Slovenia", value: "Slovenia" },
  { label: "Spain", value: "Spain" },
  { label: "Sweden", value: "Sweden" },
];

export const initialDataPatients = [
  {
    "patients": {
      "id": 1,
      "age": 64,
      "gender": "Female",
      "country": "Germany"
    },
    "medical_history": {
      "id": 1,
      "patient_id": 1,
      "family_history": false,
      "smoking_status": "Never Smoked",
      "hypertension": true,
      "asthma": true,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 1,
      "patient_id": 1,
      "diagnosis_date": "2016-04-07",
      "cancer_stage": "Stage III",
      "beginning_of_treatment_date": "2016-04-21",
      "treatment_type": "Combined",
      "end_treatment_date": "2017-11-15",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 2,
      "age": 50,
      "gender": "Male",
      "country": "Czech Republic"
    },
    "medical_history": {
      "id": 2,
      "patient_id": 2,
      "family_history": true,
      "smoking_status": "Passive Smoker",
      "hypertension": true,
      "asthma": false,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 2,
      "patient_id": 2,
      "diagnosis_date": "2023-04-22",
      "cancer_stage": "Stage III",
      "beginning_of_treatment_date": "2023-05-02",
      "treatment_type": "Radiation",
      "end_treatment_date": "2024-04-25",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 3,
      "age": 65,
      "gender": "Male",
      "country": "Romania"
    },
    "medical_history": {
      "id": 3,
      "patient_id": 3,
      "family_history": false,
      "smoking_status": "Never Smoked",
      "hypertension": false,
      "asthma": false,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 3,
      "patient_id": 3,
      "diagnosis_date": "2023-04-07",
      "cancer_stage": "Stage IV",
      "beginning_of_treatment_date": "2023-04-12",
      "treatment_type": "Surgery",
      "end_treatment_date": "2025-03-11",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 4,
      "age": 51,
      "gender": "Female",
      "country": "Latvia"
    },
    "medical_history": {
      "id": 4,
      "patient_id": 4,
      "family_history": true,
      "smoking_status": "Former Smoker",
      "hypertension": true,
      "asthma": true,
      "cirrhosis": true,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 4,
      "patient_id": 4,
      "diagnosis_date": "2016-02-07",
      "cancer_stage": "Stage III",
      "beginning_of_treatment_date": "2016-02-13",
      "treatment_type": "Surgery",
      "end_treatment_date": "2017-04-14",
      "survived": true
    }
  },
  {
    "patients": {
      "id": 5,
      "age": 37,
      "gender": "Male",
      "country": "Greece"
    },
    "medical_history": {
      "id": 5,
      "patient_id": 5,
      "family_history": true,
      "smoking_status": "Never Smoked",
      "hypertension": false,
      "asthma": false,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 5,
      "patient_id": 5,
      "diagnosis_date": "2023-12-01",
      "cancer_stage": "Stage I",
      "beginning_of_treatment_date": "2023-12-03",
      "treatment_type": "Chemotherapy",
      "end_treatment_date": "2024-09-20",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 6,
      "age": 50,
      "gender": "Male",
      "country": "Finland"
    },
    "medical_history": {
      "id": 6,
      "patient_id": 6,
      "family_history": true,
      "smoking_status": "Never Smoked",
      "hypertension": true,
      "asthma": true,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 6,
      "patient_id": 6,
      "diagnosis_date": "2023-01-04",
      "cancer_stage": "Stage II",
      "beginning_of_treatment_date": "2023-01-12",
      "treatment_type": "Radiation",
      "end_treatment_date": "2024-03-11",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 7,
      "age": 49,
      "gender": "Male",
      "country": "Denmark"
    },
    "medical_history": {
      "id": 7,
      "patient_id": 7,
      "family_history": false,
      "smoking_status": "Former Smoker",
      "hypertension": true,
      "asthma": true,
      "cirrhosis": false,
      "other_cancer": true
    },
    "treatment_details": {
      "id": 7,
      "patient_id": 7,
      "diagnosis_date": "2018-05-23",
      "cancer_stage": "Stage IV",
      "beginning_of_treatment_date": "2018-05-30",
      "treatment_type": "Chemotherapy",
      "end_treatment_date": "2019-07-07",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 8,
      "age": 51,
      "gender": "Female",
      "country": "France"
    },
    "medical_history": {
      "id": 8,
      "patient_id": 8,
      "family_history": true,
      "smoking_status": "Former Smoker",
      "hypertension": true,
      "asthma": false,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 8,
      "patient_id": 8,
      "diagnosis_date": "2017-02-20",
      "cancer_stage": "Stage II",
      "beginning_of_treatment_date": "2017-02-23",
      "treatment_type": "Combined",
      "end_treatment_date": "2018-10-09",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 9,
      "age": 64,
      "gender": "Female",
      "country": "Slovakia"
    },
    "medical_history": {
      "id": 9,
      "patient_id": 9,
      "family_history": true,
      "smoking_status": "Passive Smoker",
      "hypertension": true,
      "asthma": false,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 9,
      "patient_id": 9,
      "diagnosis_date": "2021-03-23",
      "cancer_stage": "Stage I",
      "beginning_of_treatment_date": "2021-04-03",
      "treatment_type": "Surgery",
      "end_treatment_date": "2023-02-13",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 10,
      "age": 56,
      "gender": "Male",
      "country": "Hungary"
    },
    "medical_history": {
      "id": 10,
      "patient_id": 10,
      "family_history": true,
      "smoking_status": "Passive Smoker",
      "hypertension": true,
      "asthma": true,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 10,
      "patient_id": 10,
      "diagnosis_date": "2021-12-02",
      "cancer_stage": "Stage III",
      "beginning_of_treatment_date": "2021-12-04",
      "treatment_type": "Chemotherapy",
      "end_treatment_date": "2023-07-07",
      "survived": true
    }
  },
  {
    "patients": {
      "id": 11,
      "age": 48,
      "gender": "Female",
      "country": "Estonia"
    },
    "medical_history": {
      "id": 11,
      "patient_id": 11,
      "family_history": true,
      "smoking_status": "Passive Smoker",
      "hypertension": true,
      "asthma": true,
      "cirrhosis": true,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 11,
      "patient_id": 11,
      "diagnosis_date": "2023-12-26",
      "cancer_stage": "Stage II",
      "beginning_of_treatment_date": "2024-01-08",
      "treatment_type": "Surgery",
      "end_treatment_date": "2025-08-20",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 12,
      "age": 47,
      "gender": "Female",
      "country": "Portugal"
    },
    "medical_history": {
      "id": 12,
      "patient_id": 12,
      "family_history": true,
      "smoking_status": "Passive Smoker",
      "hypertension": true,
      "asthma": false,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 12,
      "patient_id": 12,
      "diagnosis_date": "2019-11-20",
      "cancer_stage": "Stage II",
      "beginning_of_treatment_date": "2019-11-23",
      "treatment_type": "Chemotherapy",
      "end_treatment_date": "2021-02-13",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 13,
      "age": 67,
      "gender": "Female",
      "country": "Croatia"
    },
    "medical_history": {
      "id": 13,
      "patient_id": 13,
      "family_history": false,
      "smoking_status": "Never Smoked",
      "hypertension": true,
      "asthma": false,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 13,
      "patient_id": 13,
      "diagnosis_date": "2024-05-28",
      "cancer_stage": "Stage I",
      "beginning_of_treatment_date": "2024-06-04",
      "treatment_type": "Surgery",
      "end_treatment_date": "2026-02-16",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 14,
      "age": 56,
      "gender": "Male",
      "country": "Netherlands"
    },
    "medical_history": {
      "id": 14,
      "patient_id": 14,
      "family_history": false,
      "smoking_status": "Current Smoker",
      "hypertension": true,
      "asthma": true,
      "cirrhosis": false,
      "other_cancer": true
    },
    "treatment_details": {
      "id": 14,
      "patient_id": 14,
      "diagnosis_date": "2022-08-09",
      "cancer_stage": "Stage III",
      "beginning_of_treatment_date": "2022-08-15",
      "treatment_type": "Combined",
      "end_treatment_date": "2023-09-27",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 15,
      "age": 67,
      "gender": "Male",
      "country": "Germany"
    },
    "medical_history": {
      "id": 15,
      "patient_id": 15,
      "family_history": false,
      "smoking_status": "Former Smoker",
      "hypertension": true,
      "asthma": true,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 15,
      "patient_id": 15,
      "diagnosis_date": "2023-04-14",
      "cancer_stage": "Stage III",
      "beginning_of_treatment_date": "2023-04-16",
      "treatment_type": "Chemotherapy",
      "end_treatment_date": "2025-01-24",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 16,
      "age": 49,
      "gender": "Female",
      "country": "Austria"
    },
    "medical_history": {
      "id": 16,
      "patient_id": 16,
      "family_history": true,
      "smoking_status": "Current Smoker",
      "hypertension": true,
      "asthma": true,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 16,
      "patient_id": 16,
      "diagnosis_date": "2021-08-20",
      "cancer_stage": "Stage I",
      "beginning_of_treatment_date": "2021-08-24",
      "treatment_type": "Combined",
      "end_treatment_date": "2023-01-30",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 17,
      "age": 48,
      "gender": "Female",
      "country": "Portugal"
    },
    "medical_history": {
      "id": 17,
      "patient_id": 17,
      "family_history": false,
      "smoking_status": "Passive Smoker",
      "hypertension": true,
      "asthma": true,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 17,
      "patient_id": 17,
      "diagnosis_date": "2020-02-29",
      "cancer_stage": "Stage I",
      "beginning_of_treatment_date": "2020-03-13",
      "treatment_type": "Surgery",
      "end_treatment_date": "2021-07-04",
      "survived": true
    }
  },
  {
    "patients": {
      "id": 18,
      "age": 45,
      "gender": "Male",
      "country": "Poland"
    },
    "medical_history": {
      "id": 18,
      "patient_id": 18,
      "family_history": false,
      "smoking_status": "Former Smoker",
      "hypertension": true,
      "asthma": true,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 18,
      "patient_id": 18,
      "diagnosis_date": "2017-08-09",
      "cancer_stage": "Stage IV",
      "beginning_of_treatment_date": "2017-08-14",
      "treatment_type": "Chemotherapy",
      "end_treatment_date": "2018-05-24",
      "survived": true
    }
  },
  {
    "patients": {
      "id": 19,
      "age": 47,
      "gender": "Male",
      "country": "Denmark"
    },
    "medical_history": {
      "id": 19,
      "patient_id": 19,
      "family_history": true,
      "smoking_status": "Passive Smoker",
      "hypertension": true,
      "asthma": true,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 19,
      "patient_id": 19,
      "diagnosis_date": "2015-08-15",
      "cancer_stage": "Stage II",
      "beginning_of_treatment_date": "2015-08-16",
      "treatment_type": "Chemotherapy",
      "end_treatment_date": "2017-01-02",
      "survived": false
    }
  },
  {
    "patients": {
      "id": 20,
      "age": 56,
      "gender": "Male",
      "country": "Lithuania"
    },
    "medical_history": {
      "id": 20,
      "patient_id": 20,
      "family_history": false,
      "smoking_status": "Passive Smoker",
      "hypertension": true,
      "asthma": false,
      "cirrhosis": false,
      "other_cancer": false
    },
    "treatment_details": {
      "id": 20,
      "patient_id": 20,
      "diagnosis_date": "2014-07-01",
      "cancer_stage": "Stage IV",
      "beginning_of_treatment_date": "2014-07-03",
      "treatment_type": "Combined",
      "end_treatment_date": "2015-08-29",
      "survived": false
    }
  }
]

export const initialDataSurvivalArea = [
  {
    "date": "2023-01-02",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-01-03",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-01-04",
    "survived": 0,
    "not_survived": 6
  },
  {
    "date": "2023-01-05",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-01-06",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-01-07",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-01-08",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-01-09",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-01-10",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2023-01-11",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-01-12",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-01-13",
    "survived": 2,
    "not_survived": 1
  },
  {
    "date": "2023-01-14",
    "survived": 2,
    "not_survived": 0
  },
  {
    "date": "2023-01-15",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-01-16",
    "survived": 2,
    "not_survived": 1
  },
  {
    "date": "2023-01-17",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-01-18",
    "survived": 3,
    "not_survived": 0
  },
  {
    "date": "2023-01-19",
    "survived": 2,
    "not_survived": 2
  },
  {
    "date": "2023-01-20",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-01-21",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-01-22",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-01-23",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-01-24",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-01-25",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-01-27",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-01-28",
    "survived": 0,
    "not_survived": 5
  },
  {
    "date": "2023-01-29",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-01-30",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-01-31",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-02-01",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-02-02",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2023-02-03",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-02-04",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-02-06",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-02-07",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-02-08",
    "survived": 0,
    "not_survived": 5
  },
  {
    "date": "2023-02-09",
    "survived": 2,
    "not_survived": 0
  },
  {
    "date": "2023-02-10",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-02-11",
    "survived": 2,
    "not_survived": 3
  },
  {
    "date": "2023-02-12",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-02-13",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-02-14",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-02-15",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-02-16",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-02-17",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-02-18",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-02-19",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-02-20",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-02-21",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-02-22",
    "survived": 2,
    "not_survived": 2
  },
  {
    "date": "2023-02-23",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2023-02-24",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-02-26",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-02-27",
    "survived": 2,
    "not_survived": 1
  },
  {
    "date": "2023-02-28",
    "survived": 0,
    "not_survived": 6
  },
  {
    "date": "2023-03-01",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-03-02",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-03-03",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-03-04",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-03-05",
    "survived": 2,
    "not_survived": 2
  },
  {
    "date": "2023-03-06",
    "survived": 3,
    "not_survived": 1
  },
  {
    "date": "2023-03-08",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-03-09",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-03-10",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-03-11",
    "survived": 0,
    "not_survived": 5
  },
  {
    "date": "2023-03-12",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-03-13",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-03-14",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-03-15",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-03-16",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-03-17",
    "survived": 2,
    "not_survived": 3
  },
  {
    "date": "2023-03-18",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-03-19",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-03-20",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-03-21",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2023-03-22",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-03-23",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-03-24",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-03-25",
    "survived": 0,
    "not_survived": 5
  },
  {
    "date": "2023-03-26",
    "survived": 3,
    "not_survived": 2
  },
  {
    "date": "2023-03-27",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-03-30",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-03-31",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-04-01",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-04-02",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-04-03",
    "survived": 2,
    "not_survived": 1
  },
  {
    "date": "2023-04-04",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-04-05",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-04-06",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-04-07",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-04-08",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-04-09",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-04-10",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-04-11",
    "survived": 3,
    "not_survived": 3
  },
  {
    "date": "2023-04-12",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-04-13",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-04-14",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-04-15",
    "survived": 3,
    "not_survived": 3
  },
  {
    "date": "2023-04-16",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-04-17",
    "survived": 1,
    "not_survived": 5
  },
  {
    "date": "2023-04-18",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-04-19",
    "survived": 3,
    "not_survived": 3
  },
  {
    "date": "2023-04-20",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-04-21",
    "survived": 0,
    "not_survived": 7
  },
  {
    "date": "2023-04-22",
    "survived": 2,
    "not_survived": 6
  },
  {
    "date": "2023-04-23",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-04-24",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-04-25",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-04-26",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-04-27",
    "survived": 1,
    "not_survived": 5
  },
  {
    "date": "2023-04-28",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-04-29",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-05-01",
    "survived": 2,
    "not_survived": 0
  },
  {
    "date": "2023-05-02",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-05-03",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-05-04",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-05-05",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-05-06",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-05-07",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-05-08",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-05-09",
    "survived": 2,
    "not_survived": 1
  },
  {
    "date": "2023-05-10",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-05-11",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-05-12",
    "survived": 2,
    "not_survived": 2
  },
  {
    "date": "2023-05-13",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-05-14",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-05-15",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-05-16",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-05-17",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-05-18",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-05-19",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-05-20",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-05-21",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-05-22",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-05-23",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2023-05-24",
    "survived": 0,
    "not_survived": 5
  },
  {
    "date": "2023-05-25",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-05-26",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-05-27",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-05-28",
    "survived": 4,
    "not_survived": 3
  },
  {
    "date": "2023-05-29",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-05-30",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-05-31",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-06-01",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-06-02",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-06-04",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-06-05",
    "survived": 2,
    "not_survived": 4
  },
  {
    "date": "2023-06-06",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-06-07",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-06-08",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-06-09",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-06-10",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2023-06-11",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-06-13",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-06-14",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-06-15",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-06-17",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-06-18",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-06-19",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-06-20",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-06-21",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-06-22",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-06-23",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-06-24",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-06-25",
    "survived": 2,
    "not_survived": 1
  },
  {
    "date": "2023-06-26",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-06-27",
    "survived": 2,
    "not_survived": 0
  },
  {
    "date": "2023-06-28",
    "survived": 3,
    "not_survived": 1
  },
  {
    "date": "2023-06-29",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-06-30",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-07-01",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-07-02",
    "survived": 3,
    "not_survived": 4
  },
  {
    "date": "2023-07-03",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-07-05",
    "survived": 1,
    "not_survived": 6
  },
  {
    "date": "2023-07-06",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-07-07",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-07-10",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-07-11",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-07-12",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-07-13",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-07-14",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-07-15",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-07-16",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-07-17",
    "survived": 1,
    "not_survived": 6
  },
  {
    "date": "2023-07-18",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2023-07-19",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-07-20",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-07-21",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2023-07-22",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2023-07-23",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-07-24",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-07-25",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-07-26",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-07-27",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-07-28",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-07-29",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-07-31",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-08-01",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-08-02",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-08-03",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-08-04",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-08-05",
    "survived": 0,
    "not_survived": 6
  },
  {
    "date": "2023-08-06",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-08-07",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-08-08",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-08-09",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-08-10",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-08-11",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-08-12",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-08-13",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-08-14",
    "survived": 2,
    "not_survived": 4
  },
  {
    "date": "2023-08-15",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-08-16",
    "survived": 2,
    "not_survived": 3
  },
  {
    "date": "2023-08-17",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-08-19",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-08-20",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2023-08-21",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-08-22",
    "survived": 2,
    "not_survived": 0
  },
  {
    "date": "2023-08-23",
    "survived": 2,
    "not_survived": 1
  },
  {
    "date": "2023-08-24",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-08-25",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-08-26",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-08-27",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-08-28",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2023-08-29",
    "survived": 0,
    "not_survived": 6
  },
  {
    "date": "2023-08-30",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-08-31",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-09-01",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-09-02",
    "survived": 2,
    "not_survived": 2
  },
  {
    "date": "2023-09-03",
    "survived": 0,
    "not_survived": 5
  },
  {
    "date": "2023-09-04",
    "survived": 2,
    "not_survived": 5
  },
  {
    "date": "2023-09-05",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2023-09-06",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-09-07",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-09-08",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-09-09",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-09-10",
    "survived": 0,
    "not_survived": 5
  },
  {
    "date": "2023-09-11",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2023-09-12",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-09-14",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-09-15",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2023-09-16",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-09-18",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-09-19",
    "survived": 3,
    "not_survived": 2
  },
  {
    "date": "2023-09-20",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-09-21",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-09-22",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-09-23",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-09-24",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-09-25",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-09-26",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-09-27",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2023-09-28",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-09-29",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-09-30",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-10-01",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-10-02",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-10-03",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-10-04",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-10-05",
    "survived": 3,
    "not_survived": 1
  },
  {
    "date": "2023-10-06",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-10-07",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-10-08",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-10-09",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-10-10",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-10-11",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-10-12",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-10-13",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-10-14",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-10-15",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-10-16",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-10-17",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-10-18",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-10-19",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-10-20",
    "survived": 2,
    "not_survived": 5
  },
  {
    "date": "2023-10-21",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-10-22",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-10-23",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2023-10-24",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-10-26",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-10-27",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-10-28",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-10-29",
    "survived": 0,
    "not_survived": 6
  },
  {
    "date": "2023-10-30",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2023-10-31",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-11-01",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-11-02",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-11-03",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-11-04",
    "survived": 2,
    "not_survived": 6
  },
  {
    "date": "2023-11-05",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-11-06",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-11-07",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-11-08",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-11-09",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-11-11",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-11-13",
    "survived": 2,
    "not_survived": 2
  },
  {
    "date": "2023-11-14",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-11-15",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-11-16",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-11-17",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-11-18",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2023-11-19",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-11-20",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-11-21",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-11-23",
    "survived": 2,
    "not_survived": 1
  },
  {
    "date": "2023-11-24",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2023-11-25",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-11-26",
    "survived": 2,
    "not_survived": 3
  },
  {
    "date": "2023-11-27",
    "survived": 2,
    "not_survived": 2
  },
  {
    "date": "2023-11-28",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-11-29",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2023-11-30",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-12-01",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-12-02",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-12-03",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-12-04",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-12-05",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-12-06",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-12-07",
    "survived": 2,
    "not_survived": 2
  },
  {
    "date": "2023-12-08",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-12-09",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2023-12-10",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-12-11",
    "survived": 0,
    "not_survived": 5
  },
  {
    "date": "2023-12-13",
    "survived": 0,
    "not_survived": 5
  },
  {
    "date": "2023-12-14",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-12-15",
    "survived": 2,
    "not_survived": 4
  },
  {
    "date": "2023-12-16",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-12-17",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-12-18",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2023-12-19",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2023-12-20",
    "survived": 2,
    "not_survived": 3
  },
  {
    "date": "2023-12-21",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-12-22",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2023-12-23",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-12-24",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2023-12-25",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-12-26",
    "survived": 2,
    "not_survived": 5
  },
  {
    "date": "2023-12-27",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2023-12-28",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-12-29",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2023-12-30",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2023-12-31",
    "survived": 3,
    "not_survived": 1
  },
  {
    "date": "2024-01-01",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-01-02",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-01-03",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-01-04",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-01-05",
    "survived": 1,
    "not_survived": 5
  },
  {
    "date": "2024-01-06",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-01-07",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-01-08",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2024-01-09",
    "survived": 2,
    "not_survived": 3
  },
  {
    "date": "2024-01-10",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-01-11",
    "survived": 2,
    "not_survived": 2
  },
  {
    "date": "2024-01-12",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-01-13",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-01-14",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2024-01-15",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-01-16",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-01-17",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-01-18",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2024-01-19",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-01-20",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-01-21",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-01-22",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-01-23",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-01-24",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-01-25",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2024-01-26",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-01-27",
    "survived": 1,
    "not_survived": 5
  },
  {
    "date": "2024-01-28",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2024-01-29",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-01-30",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2024-01-31",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2024-02-01",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-02-02",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2024-02-03",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-02-04",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-02-05",
    "survived": 1,
    "not_survived": 6
  },
  {
    "date": "2024-02-06",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-02-07",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2024-02-08",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-02-09",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-02-10",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-02-11",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-02-12",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-02-13",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-02-14",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-02-15",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-02-16",
    "survived": 1,
    "not_survived": 6
  },
  {
    "date": "2024-02-17",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2024-02-19",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2024-02-20",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2024-02-21",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-02-22",
    "survived": 2,
    "not_survived": 0
  },
  {
    "date": "2024-02-23",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-02-24",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-02-25",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-02-26",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-02-27",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2024-02-28",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-02-29",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-03-01",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-03-02",
    "survived": 2,
    "not_survived": 1
  },
  {
    "date": "2024-03-03",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-03-04",
    "survived": 2,
    "not_survived": 2
  },
  {
    "date": "2024-03-05",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-03-08",
    "survived": 2,
    "not_survived": 3
  },
  {
    "date": "2024-03-09",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-03-10",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-03-12",
    "survived": 2,
    "not_survived": 2
  },
  {
    "date": "2024-03-13",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2024-03-15",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-03-16",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-03-17",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-03-18",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-03-19",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-03-20",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-03-21",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-03-22",
    "survived": 1,
    "not_survived": 7
  },
  {
    "date": "2024-03-23",
    "survived": 2,
    "not_survived": 0
  },
  {
    "date": "2024-03-24",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-03-25",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-03-26",
    "survived": 2,
    "not_survived": 3
  },
  {
    "date": "2024-03-27",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-03-28",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-03-29",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-03-31",
    "survived": 0,
    "not_survived": 6
  },
  {
    "date": "2024-04-01",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2024-04-02",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2024-04-03",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-04-04",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-04-06",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-04-07",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-04-08",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-04-09",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-04-10",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-04-11",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2024-04-12",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-04-13",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2024-04-14",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2024-04-15",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-04-17",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-04-18",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-04-20",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-04-21",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-04-23",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2024-04-24",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-04-25",
    "survived": 1,
    "not_survived": 2
  },
  {
    "date": "2024-04-26",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-04-27",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-04-28",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-04-29",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-04-30",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2024-05-01",
    "survived": 4,
    "not_survived": 2
  },
  {
    "date": "2024-05-02",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-05-03",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-05-04",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-05-05",
    "survived": 3,
    "not_survived": 1
  },
  {
    "date": "2024-05-06",
    "survived": 1,
    "not_survived": 4
  },
  {
    "date": "2024-05-08",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-05-09",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-05-10",
    "survived": 0,
    "not_survived": 5
  },
  {
    "date": "2024-05-11",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-05-12",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-05-13",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-05-14",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-05-15",
    "survived": 0,
    "not_survived": 2
  },
  {
    "date": "2024-05-16",
    "survived": 0,
    "not_survived": 5
  },
  {
    "date": "2024-05-17",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2024-05-18",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-05-19",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-05-20",
    "survived": 1,
    "not_survived": 3
  },
  {
    "date": "2024-05-21",
    "survived": 2,
    "not_survived": 0
  },
  {
    "date": "2024-05-22",
    "survived": 1,
    "not_survived": 0
  },
  {
    "date": "2024-05-23",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2024-05-24",
    "survived": 0,
    "not_survived": 1
  },
  {
    "date": "2024-05-25",
    "survived": 2,
    "not_survived": 3
  },
  {
    "date": "2024-05-26",
    "survived": 1,
    "not_survived": 1
  },
  {
    "date": "2024-05-27",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-05-28",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2024-05-29",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-05-30",
    "survived": 0,
    "not_survived": 4
  },
  {
    "date": "2024-05-31",
    "survived": 0,
    "not_survived": 3
  },
  {
    "date": "2024-06-01",
    "survived": 0,
    "not_survived": 1
  }
]

export const initialDataGenderArea = [
  {
    "date": "2023-01-01",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-01-03",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-01-04",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-01-05",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-01-06",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-01-08",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-01-09",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-01-10",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-01-11",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-01-12",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-01-13",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-01-14",
    "male": 1,
    "female": 4
  },
  {
    "date": "2023-01-15",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-01-16",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-01-17",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-01-20",
    "male": 4,
    "female": 2
  },
  {
    "date": "2023-01-21",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-01-22",
    "male": 0,
    "female": 3
  },
  {
    "date": "2023-01-24",
    "male": 5,
    "female": 2
  },
  {
    "date": "2023-01-25",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-01-26",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-01-27",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-01-28",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-01-29",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-01-30",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-01-31",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-02-01",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-02-02",
    "male": 3,
    "female": 4
  },
  {
    "date": "2023-02-03",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-02-04",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-02-05",
    "male": 0,
    "female": 3
  },
  {
    "date": "2023-02-06",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-02-07",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-02-08",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-02-09",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-02-10",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-02-11",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-02-12",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-02-13",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-02-14",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-02-15",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-02-16",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-02-17",
    "male": 0,
    "female": 4
  },
  {
    "date": "2023-02-18",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-02-19",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-02-20",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-02-21",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-02-22",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-02-23",
    "male": 0,
    "female": 3
  },
  {
    "date": "2023-02-25",
    "male": 3,
    "female": 2
  },
  {
    "date": "2023-02-26",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-02-27",
    "male": 3,
    "female": 2
  },
  {
    "date": "2023-02-28",
    "male": 1,
    "female": 4
  },
  {
    "date": "2023-03-01",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-03-02",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-03-03",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-03-04",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-03-05",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-03-06",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-03-08",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-03-10",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-03-12",
    "male": 4,
    "female": 3
  },
  {
    "date": "2023-03-13",
    "male": 3,
    "female": 0
  },
  {
    "date": "2023-03-14",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-03-15",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-03-16",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-03-17",
    "male": 3,
    "female": 0
  },
  {
    "date": "2023-03-18",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-03-19",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-03-20",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-03-21",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-03-22",
    "male": 0,
    "female": 4
  },
  {
    "date": "2023-03-23",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-03-24",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-03-25",
    "male": 4,
    "female": 2
  },
  {
    "date": "2023-03-27",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-03-29",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-03-30",
    "male": 3,
    "female": 1
  },
  {
    "date": "2023-03-31",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-04-01",
    "male": 1,
    "female": 4
  },
  {
    "date": "2023-04-02",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-04-03",
    "male": 0,
    "female": 3
  },
  {
    "date": "2023-04-04",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-04-05",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-04-06",
    "male": 3,
    "female": 0
  },
  {
    "date": "2023-04-07",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-04-08",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-04-09",
    "male": 3,
    "female": 0
  },
  {
    "date": "2023-04-10",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-04-11",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-04-12",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-04-13",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-04-14",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-04-15",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-04-16",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-04-17",
    "male": 0,
    "female": 4
  },
  {
    "date": "2023-04-18",
    "male": 3,
    "female": 1
  },
  {
    "date": "2023-04-20",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-04-21",
    "male": 0,
    "female": 3
  },
  {
    "date": "2023-04-22",
    "male": 2,
    "female": 4
  },
  {
    "date": "2023-04-23",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-04-24",
    "male": 2,
    "female": 4
  },
  {
    "date": "2023-04-25",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-04-26",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-04-27",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-04-28",
    "male": 3,
    "female": 1
  },
  {
    "date": "2023-04-29",
    "male": 3,
    "female": 0
  },
  {
    "date": "2023-04-30",
    "male": 0,
    "female": 3
  },
  {
    "date": "2023-05-01",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-05-02",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-05-03",
    "male": 2,
    "female": 5
  },
  {
    "date": "2023-05-04",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-05-05",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-05-06",
    "male": 3,
    "female": 0
  },
  {
    "date": "2023-05-07",
    "male": 3,
    "female": 0
  },
  {
    "date": "2023-05-08",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-05-09",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-05-10",
    "male": 5,
    "female": 0
  },
  {
    "date": "2023-05-13",
    "male": 2,
    "female": 4
  },
  {
    "date": "2023-05-15",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-05-16",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-05-17",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-05-18",
    "male": 4,
    "female": 1
  },
  {
    "date": "2023-05-20",
    "male": 1,
    "female": 4
  },
  {
    "date": "2023-05-21",
    "male": 3,
    "female": 1
  },
  {
    "date": "2023-05-23",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-05-24",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-05-25",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-05-26",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-05-27",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-05-28",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-05-29",
    "male": 3,
    "female": 2
  },
  {
    "date": "2023-05-30",
    "male": 5,
    "female": 0
  },
  {
    "date": "2023-05-31",
    "male": 1,
    "female": 4
  },
  {
    "date": "2023-06-01",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-06-02",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-06-03",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-06-04",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-06-05",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-06-06",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-06-07",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-06-08",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-06-09",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-06-10",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-06-11",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-06-13",
    "male": 3,
    "female": 4
  },
  {
    "date": "2023-06-15",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-06-16",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-06-17",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-06-18",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-06-19",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-06-20",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-06-21",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-06-22",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-06-23",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-06-24",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-06-26",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-06-27",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-06-28",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-06-29",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-06-30",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-07-01",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-07-02",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-07-03",
    "male": 4,
    "female": 0
  },
  {
    "date": "2023-07-04",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-07-05",
    "male": 3,
    "female": 5
  },
  {
    "date": "2023-07-06",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-07-07",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-07-08",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-07-09",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-07-10",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-07-11",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-07-12",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-07-13",
    "male": 3,
    "female": 0
  },
  {
    "date": "2023-07-14",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-07-15",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-07-16",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-07-17",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-07-18",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-07-19",
    "male": 3,
    "female": 1
  },
  {
    "date": "2023-07-20",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-07-21",
    "male": 0,
    "female": 5
  },
  {
    "date": "2023-07-22",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-07-23",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-07-24",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-07-25",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-07-26",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-07-27",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-07-28",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-07-29",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-07-30",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-08-01",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-08-02",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-08-03",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-08-05",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-08-06",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-08-07",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-08-08",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-08-09",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-08-10",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-08-11",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-08-12",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-08-13",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-08-15",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-08-16",
    "male": 5,
    "female": 0
  },
  {
    "date": "2023-08-17",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-08-18",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-08-19",
    "male": 3,
    "female": 1
  },
  {
    "date": "2023-08-20",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-08-21",
    "male": 4,
    "female": 1
  },
  {
    "date": "2023-08-22",
    "male": 0,
    "female": 3
  },
  {
    "date": "2023-08-23",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-08-24",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-08-25",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-08-26",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-08-27",
    "male": 3,
    "female": 2
  },
  {
    "date": "2023-08-28",
    "male": 3,
    "female": 1
  },
  {
    "date": "2023-08-29",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-08-30",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-08-31",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-09-01",
    "male": 0,
    "female": 3
  },
  {
    "date": "2023-09-02",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-09-03",
    "male": 4,
    "female": 1
  },
  {
    "date": "2023-09-04",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-09-05",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-09-06",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-09-07",
    "male": 3,
    "female": 1
  },
  {
    "date": "2023-09-08",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-09-09",
    "male": 6,
    "female": 1
  },
  {
    "date": "2023-09-10",
    "male": 0,
    "female": 4
  },
  {
    "date": "2023-09-11",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-09-13",
    "male": 5,
    "female": 3
  },
  {
    "date": "2023-09-14",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-09-15",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-09-16",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-09-17",
    "male": 4,
    "female": 1
  },
  {
    "date": "2023-09-18",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-09-19",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-09-20",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-09-21",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-09-22",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-09-24",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-09-25",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-09-26",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-09-27",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-09-28",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-09-29",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-09-30",
    "male": 4,
    "female": 1
  },
  {
    "date": "2023-10-01",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-10-02",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-10-03",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-10-04",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-10-05",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-10-06",
    "male": 2,
    "female": 4
  },
  {
    "date": "2023-10-07",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-10-08",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-10-09",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-10-11",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-10-12",
    "male": 0,
    "female": 3
  },
  {
    "date": "2023-10-13",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-10-14",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-10-15",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-10-17",
    "male": 5,
    "female": 1
  },
  {
    "date": "2023-10-18",
    "male": 4,
    "female": 2
  },
  {
    "date": "2023-10-19",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-10-20",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-10-21",
    "male": 3,
    "female": 1
  },
  {
    "date": "2023-10-22",
    "male": 3,
    "female": 0
  },
  {
    "date": "2023-10-23",
    "male": 1,
    "female": 4
  },
  {
    "date": "2023-10-24",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-10-25",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-10-26",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-10-27",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-10-28",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-10-29",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-10-30",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-10-31",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-11-01",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-11-02",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-11-04",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-11-05",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-11-06",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-11-08",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-11-09",
    "male": 1,
    "female": 4
  },
  {
    "date": "2023-11-10",
    "male": 3,
    "female": 1
  },
  {
    "date": "2023-11-11",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-11-12",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-11-13",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-11-14",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-11-15",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-11-16",
    "male": 0,
    "female": 4
  },
  {
    "date": "2023-11-17",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-11-18",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-11-19",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-11-20",
    "male": 1,
    "female": 5
  },
  {
    "date": "2023-11-21",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-11-22",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-11-23",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-11-24",
    "male": 0,
    "female": 4
  },
  {
    "date": "2023-11-25",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-11-26",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-11-27",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-11-28",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-11-29",
    "male": 0,
    "female": 4
  },
  {
    "date": "2023-11-30",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-12-01",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-12-02",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-12-03",
    "male": 3,
    "female": 1
  },
  {
    "date": "2023-12-04",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-12-05",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-12-06",
    "male": 3,
    "female": 0
  },
  {
    "date": "2023-12-07",
    "male": 3,
    "female": 1
  },
  {
    "date": "2023-12-08",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-12-09",
    "male": 4,
    "female": 1
  },
  {
    "date": "2023-12-10",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-12-11",
    "male": 3,
    "female": 2
  },
  {
    "date": "2023-12-12",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-12-13",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-12-14",
    "male": 0,
    "female": 2
  },
  {
    "date": "2023-12-15",
    "male": 2,
    "female": 1
  },
  {
    "date": "2023-12-16",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-12-17",
    "male": 2,
    "female": 2
  },
  {
    "date": "2023-12-18",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-12-19",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-12-21",
    "male": 2,
    "female": 3
  },
  {
    "date": "2023-12-22",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-12-23",
    "male": 0,
    "female": 1
  },
  {
    "date": "2023-12-24",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-12-25",
    "male": 1,
    "female": 3
  },
  {
    "date": "2023-12-26",
    "male": 0,
    "female": 4
  },
  {
    "date": "2023-12-27",
    "male": 1,
    "female": 2
  },
  {
    "date": "2023-12-28",
    "male": 2,
    "female": 0
  },
  {
    "date": "2023-12-29",
    "male": 1,
    "female": 0
  },
  {
    "date": "2023-12-30",
    "male": 1,
    "female": 1
  },
  {
    "date": "2023-12-31",
    "male": 4,
    "female": 1
  },
  {
    "date": "2024-01-01",
    "male": 3,
    "female": 3
  },
  {
    "date": "2024-01-02",
    "male": 2,
    "female": 4
  },
  {
    "date": "2024-01-03",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-01-04",
    "male": 1,
    "female": 2
  },
  {
    "date": "2024-01-05",
    "male": 0,
    "female": 3
  },
  {
    "date": "2024-01-06",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-01-07",
    "male": 3,
    "female": 0
  },
  {
    "date": "2024-01-08",
    "male": 1,
    "female": 3
  },
  {
    "date": "2024-01-09",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-01-10",
    "male": 3,
    "female": 0
  },
  {
    "date": "2024-01-11",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-01-12",
    "male": 0,
    "female": 2
  },
  {
    "date": "2024-01-13",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-01-14",
    "male": 2,
    "female": 2
  },
  {
    "date": "2024-01-15",
    "male": 3,
    "female": 1
  },
  {
    "date": "2024-01-16",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-01-18",
    "male": 4,
    "female": 2
  },
  {
    "date": "2024-01-19",
    "male": 3,
    "female": 5
  },
  {
    "date": "2024-01-20",
    "male": 0,
    "female": 1
  },
  {
    "date": "2024-01-21",
    "male": 2,
    "female": 0
  },
  {
    "date": "2024-01-22",
    "male": 0,
    "female": 1
  },
  {
    "date": "2024-01-23",
    "male": 2,
    "female": 2
  },
  {
    "date": "2024-01-24",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-01-25",
    "male": 2,
    "female": 0
  },
  {
    "date": "2024-01-26",
    "male": 2,
    "female": 0
  },
  {
    "date": "2024-01-27",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-01-28",
    "male": 3,
    "female": 0
  },
  {
    "date": "2024-01-29",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-01-30",
    "male": 1,
    "female": 2
  },
  {
    "date": "2024-01-31",
    "male": 1,
    "female": 3
  },
  {
    "date": "2024-02-01",
    "male": 2,
    "female": 2
  },
  {
    "date": "2024-02-02",
    "male": 1,
    "female": 4
  },
  {
    "date": "2024-02-03",
    "male": 1,
    "female": 3
  },
  {
    "date": "2024-02-04",
    "male": 1,
    "female": 2
  },
  {
    "date": "2024-02-05",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-02-06",
    "male": 3,
    "female": 0
  },
  {
    "date": "2024-02-07",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-02-08",
    "male": 3,
    "female": 3
  },
  {
    "date": "2024-02-09",
    "male": 2,
    "female": 5
  },
  {
    "date": "2024-02-10",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-02-12",
    "male": 1,
    "female": 3
  },
  {
    "date": "2024-02-13",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-02-14",
    "male": 0,
    "female": 1
  },
  {
    "date": "2024-02-15",
    "male": 3,
    "female": 0
  },
  {
    "date": "2024-02-16",
    "male": 0,
    "female": 3
  },
  {
    "date": "2024-02-17",
    "male": 0,
    "female": 3
  },
  {
    "date": "2024-02-18",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-02-19",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-02-20",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-02-21",
    "male": 1,
    "female": 3
  },
  {
    "date": "2024-02-22",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-02-23",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-02-25",
    "male": 1,
    "female": 2
  },
  {
    "date": "2024-02-26",
    "male": 2,
    "female": 0
  },
  {
    "date": "2024-02-27",
    "male": 1,
    "female": 2
  },
  {
    "date": "2024-02-28",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-02-29",
    "male": 0,
    "female": 1
  },
  {
    "date": "2024-03-01",
    "male": 0,
    "female": 3
  },
  {
    "date": "2024-03-02",
    "male": 0,
    "female": 2
  },
  {
    "date": "2024-03-04",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-03-05",
    "male": 0,
    "female": 1
  },
  {
    "date": "2024-03-06",
    "male": 0,
    "female": 4
  },
  {
    "date": "2024-03-07",
    "male": 3,
    "female": 1
  },
  {
    "date": "2024-03-08",
    "male": 2,
    "female": 0
  },
  {
    "date": "2024-03-09",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-03-10",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-03-11",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-03-12",
    "male": 2,
    "female": 5
  },
  {
    "date": "2024-03-13",
    "male": 3,
    "female": 2
  },
  {
    "date": "2024-03-14",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-03-15",
    "male": 3,
    "female": 2
  },
  {
    "date": "2024-03-16",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-03-17",
    "male": 1,
    "female": 2
  },
  {
    "date": "2024-03-18",
    "male": 2,
    "female": 0
  },
  {
    "date": "2024-03-19",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-03-20",
    "male": 0,
    "female": 1
  },
  {
    "date": "2024-03-21",
    "male": 3,
    "female": 1
  },
  {
    "date": "2024-03-22",
    "male": 0,
    "female": 2
  },
  {
    "date": "2024-03-23",
    "male": 2,
    "female": 0
  },
  {
    "date": "2024-03-24",
    "male": 4,
    "female": 1
  },
  {
    "date": "2024-03-25",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-03-26",
    "male": 0,
    "female": 1
  },
  {
    "date": "2024-03-27",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-03-28",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-03-29",
    "male": 4,
    "female": 2
  },
  {
    "date": "2024-03-30",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-03-31",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-04-01",
    "male": 0,
    "female": 1
  },
  {
    "date": "2024-04-02",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-04-03",
    "male": 3,
    "female": 3
  },
  {
    "date": "2024-04-04",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-04-05",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-04-06",
    "male": 2,
    "female": 0
  },
  {
    "date": "2024-04-08",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-04-09",
    "male": 3,
    "female": 0
  },
  {
    "date": "2024-04-10",
    "male": 3,
    "female": 1
  },
  {
    "date": "2024-04-11",
    "male": 0,
    "female": 2
  },
  {
    "date": "2024-04-12",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-04-13",
    "male": 0,
    "female": 2
  },
  {
    "date": "2024-04-14",
    "male": 1,
    "female": 2
  },
  {
    "date": "2024-04-15",
    "male": 2,
    "female": 3
  },
  {
    "date": "2024-04-16",
    "male": 0,
    "female": 2
  },
  {
    "date": "2024-04-17",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-04-18",
    "male": 3,
    "female": 1
  },
  {
    "date": "2024-04-19",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-04-21",
    "male": 2,
    "female": 2
  },
  {
    "date": "2024-04-22",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-04-23",
    "male": 0,
    "female": 1
  },
  {
    "date": "2024-04-24",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-04-27",
    "male": 1,
    "female": 2
  },
  {
    "date": "2024-04-28",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-04-29",
    "male": 2,
    "female": 0
  },
  {
    "date": "2024-04-30",
    "male": 3,
    "female": 1
  },
  {
    "date": "2024-05-01",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-05-02",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-05-03",
    "male": 4,
    "female": 2
  },
  {
    "date": "2024-05-04",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-05-05",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-05-06",
    "male": 2,
    "female": 2
  },
  {
    "date": "2024-05-07",
    "male": 2,
    "female": 2
  },
  {
    "date": "2024-05-08",
    "male": 0,
    "female": 1
  },
  {
    "date": "2024-05-09",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-05-10",
    "male": 2,
    "female": 2
  },
  {
    "date": "2024-05-11",
    "male": 3,
    "female": 3
  },
  {
    "date": "2024-05-12",
    "male": 0,
    "female": 3
  },
  {
    "date": "2024-05-13",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-05-14",
    "male": 0,
    "female": 1
  },
  {
    "date": "2024-05-15",
    "male": 1,
    "female": 5
  },
  {
    "date": "2024-05-16",
    "male": 1,
    "female": 3
  },
  {
    "date": "2024-05-17",
    "male": 1,
    "female": 2
  },
  {
    "date": "2024-05-18",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-05-20",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-05-21",
    "male": 0,
    "female": 3
  },
  {
    "date": "2024-05-22",
    "male": 0,
    "female": 1
  },
  {
    "date": "2024-05-23",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-05-24",
    "male": 2,
    "female": 3
  },
  {
    "date": "2024-05-26",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-05-27",
    "male": 2,
    "female": 1
  },
  {
    "date": "2024-05-28",
    "male": 0,
    "female": 2
  },
  {
    "date": "2024-05-29",
    "male": 1,
    "female": 2
  },
  {
    "date": "2024-05-30",
    "male": 2,
    "female": 0
  },
  {
    "date": "2024-05-31",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-06-01",
    "male": 0,
    "female": 2
  },
  {
    "date": "2024-06-02",
    "male": 2,
    "female": 3
  },
  {
    "date": "2024-06-03",
    "male": 1,
    "female": 3
  },
  {
    "date": "2024-06-04",
    "male": 0,
    "female": 2
  },
  {
    "date": "2024-06-05",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-06-06",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-06-07",
    "male": 1,
    "female": 2
  },
  {
    "date": "2024-06-08",
    "male": 0,
    "female": 2
  },
  {
    "date": "2024-06-10",
    "male": 3,
    "female": 1
  },
  {
    "date": "2024-06-11",
    "male": 1,
    "female": 1
  },
  {
    "date": "2024-06-15",
    "male": 2,
    "female": 0
  },
  {
    "date": "2024-06-17",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-06-18",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-06-21",
    "male": 1,
    "female": 0
  },
  {
    "date": "2024-06-23",
    "male": 1,
    "female": 0
  }
]

export const genders = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

export const ages = [
  { label: "18", value: 18 },
  { label: "19", value: 19 },
  { label: "21", value: 21 },
  { label: "22", value: 22 },
  { label: "23", value: 23 },
  { label: "24", value: 24 },
  { label: "25", value: 25 },
  { label: "26", value: 26 },
  { label: "27", value: 27 },
  { label: "28", value: 28 },
  { label: "29", value: 29 },
  { label: "30", value: 30 },
  { label: "31", value: 31 },
  { label: "32", value: 32 },
  { label: "33", value: 33 },
  { label: "34", value: 34 },
  { label: "35", value: 35 },
  { label: "36", value: 36 },
  { label: "37", value: 37 },
  { label: "38", value: 38 },
  { label: "39", value: 39 },
  { label: "40", value: 40 },
  { label: "41", value: 41 },
  { label: "42", value: 42 },
  { label: "43", value: 43 },
  { label: "44", value: 44 },
  { label: "45", value: 45 },
  { label: "46", value: 46 },
  { label: "47", value: 47 },
  { label: "48", value: 48 },
  { label: "49", value: 49 },
  { label: "50", value: 50 },
  { label: "51", value: 51 },
  { label: "52", value: 52 },
  { label: "53", value: 53 },
  { label: "54", value: 54 },
  { label: "55", value: 55 },
  { label: "56", value: 56 },
  { label: "57", value: 57 },
  { label: "58", value: 58 },
  { label: "59", value: 59 },
  { label: "60", value: 60 },
  { label: "61", value: 61 },
  { label: "62", value: 62 },
  { label: "63", value: 63 },
  { label: "64", value: 64 },
  { label: "65", value: 65 },
  { label: "66", value: 66 },
  { label: "67", value: 67 },
  { label: "68", value: 68 },
  { label: "69", value: 69 },
  { label: "70", value: 70 },
  { label: "71", value: 71 },
  { label: "72", value: 72 },
  { label: "73", value: 73 },
  { label: "74", value: 74 },
  { label: "75", value: 75 },
  { label: "76", value: 76 },
  { label: "77", value: 77 },
  { label: "78", value: 78 },
  { label: "79", value: 79 },
  { label: "80", value: 80 },
  { label: "81", value: 81 },
  { label: "82", value: 82 },
  { label: "83", value: 83 },
  { label: "84", value: 84 },
  { label: "85", value: 85 },
  { label: "86", value: 86 },
  { label: "87", value: 87 },
  { label: "89", value: 89 },
  { label: "90", value: 90 },
  { label: "91", value: 91 },
  { label: "93", value: 93 },
];