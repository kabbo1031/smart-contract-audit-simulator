export function generateReport(result) {
  console.log("----- Audit Report -----");
  console.log("Contract:", result.contract);
  console.log("Address:", result.address);
  console.log("Risk Level:", result.riskLevel);

  result.issues.forEach(issue => {
    console.log("Issue:", issue.type, "Severity:", issue.severity);
  });

  console.log("------------------------");
}
