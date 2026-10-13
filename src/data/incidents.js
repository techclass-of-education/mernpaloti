// Mock incident records for the Security Incident Portal.
export const mockIncidents = [
  {
    _id: "INC001",
    title: "Phishing email to HR team",
    category: "Phishing",
    severity: "High",
    description: "A suspicious email contained a fake login link.",
    status: "Open",
    reportedBy: "USER001",
    createdAt: "2026-10-10T09:30:00Z",
    updatedAt: "2026-10-10T09:30:00Z"
  },
  {
    _id: "INC002",
    title: "Malware detected on lab computer",
    category: "Malware",
    severity: "Critical",
    description: "Antivirus detected suspicious software on a lab computer.",
    status: "Investigating",
    reportedBy: "USER002",
    createdAt: "2026-10-09T11:15:00Z",
    updatedAt: "2026-10-10T08:00:00Z"
  },
  {
    _id: "INC003",
    title: "Unauthorized account access",
    category: "Unauthorized Access",
    severity: "Medium",
    description: "An unfamiliar login was detected on a student account.",
    status: "Open",
    reportedBy: "USER003",
    createdAt: "2026-10-08T14:20:00Z",
    updatedAt: "2026-10-08T14:20:00Z"
  },
  {
    _id: "INC004",
    title: "Possible data exposure",
    category: "Data Breach",
    severity: "High",
    description: "A shared folder may contain confidential information.",
    status: "Resolved",
    reportedBy: "USER001",
    createdAt: "2026-10-07T10:00:00Z",
    updatedAt: "2026-10-08T12:30:00Z"
  },
  {
    _id: "INC005",
    title: "Suspicious network traffic",
    category: "DDoS",
    severity: "Low",
    description: "Unusual traffic was observed during network monitoring.",
    status: "Open",
    reportedBy: "USER002",
    createdAt: "2026-10-06T16:45:00Z",
    updatedAt: "2026-10-06T16:45:00Z"
  },
  {
    _id: "INC006",
    title: "Unusual USB device detected",
    category: "Other",
    severity: "Medium",
    description: "An unknown USB device was connected to a workstation.",
    status: "Resolved",
    reportedBy: "USER003",
    createdAt: "2026-10-05T08:10:00Z",
    updatedAt: "2026-10-06T09:00:00Z"
  }
];
