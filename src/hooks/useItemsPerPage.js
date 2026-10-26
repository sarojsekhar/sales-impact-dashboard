import { useEffect, useState } from "react";

// These widths match Tailwind's `sm` (640px) and `lg` (1024px) breakpoints.
const DESKTOP_QUERY = "(min-width: 1024px)";
const TABLET_QUERY = "(min-width: 640px)";

// Works out how many products fit on one page for the current screen width.
function getItemsPerPage() {
  if (window.matchMedia(DESKTOP_QUERY).matches) return 6; // desktop: 2 × 3
  if (window.matchMedia(TABLET_QUERY).matches) return 4; // tablet:  2 × 2
  return 3; // mobile:  1 × 3
}

export function useItemsPerPage() {
  // Pass the function itself (no parentheses) so React only calls it on the first render.
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

  useEffect(() => {
    const queries = [
      window.matchMedia(DESKTOP_QUERY),
      window.matchMedia(TABLET_QUERY),
    ];

    function handleChange() {
      setItemsPerPage(getItemsPerPage());
    }

    // Fires only when the screen crosses 640px or 1024px, not on every pixel of a resize.
    queries.forEach((query) => query.addEventListener("change", handleChange));

    // Cleanup: remove the listeners when the component is removed from the page.
    return () => {
      queries.forEach((query) =>
        query.removeEventListener("change", handleChange),
      );
    };
  }, []);

  return itemsPerPage;
}
