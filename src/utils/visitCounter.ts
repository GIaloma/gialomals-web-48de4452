
/**
 * Demo website visit counter using localStorage.
 * - Homepage visits increment the counter.
 * - FounderDashboard displays it.
 */
const KEY = "gialoma_visit_counter";

export function getVisitCount(): number {
  if (typeof window === "undefined") return 0;
  const val = localStorage.getItem(KEY);
  return val ? parseInt(val) : 0;
}

export function incrementVisitCount(): void {
  if (typeof window === "undefined") return;
  const current = getVisitCount();
  localStorage.setItem(KEY, String(current + 1));
}
