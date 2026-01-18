export function analyzeRisk(issues) {
  if (issues.length > 2) return "High";
  if (issues.length === 2) return "Moderate";
  return "Low";
}
