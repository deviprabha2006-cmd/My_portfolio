import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Green Wave",
    subtitle: "Smart Ambulance Traffic Control System",
    points: [
      "Developed an intelligent ambulance routing system using Flutter, Dart, Firebase, and GPS APIs to coordinate traffic signals and reduce simulated response time.",
      "Integrated real-time ambulance tracking, automated signal alerts, and a police monitoring dashboard.",
      "Implemented and debugged traffic signal override logic, manual controls, and voice-based map interaction.",
    ],
    tech: ["Flutter", "Dart", "Firebase", "GPS APIs", "Voice Recognition APIs", "REST APIs"],
  },
  {
    title: "Genomic Disease Risk Predictor",
    subtitle: "AI Model for Disease Risk Prediction from Genomic Data",
    points: [
      "Developed an ML pipeline to predict disease risk using biomedical and genomic features with Scikit-learn.",
      "Preprocessed and normalised data, handling missing values and categorical features to improve model quality.",
      "Compared Logistic Regression, Decision Tree, and Random Forest using precision, recall, and confusion matrix. Built an interactive Streamlit dashboard for patient data input and risk prediction.",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn", "Streamlit"],
  },
];
