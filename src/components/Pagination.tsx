"use client";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/router";

function Pagination({ page, count }: { page: number; count: number }) {
  
  // DYNAMIC ROUTE
  const router = useRouter();
  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <div className="flex justify-between items-center text-gray-500">
      <button
        disabled
        className="rounded-sm bg-slate-200 py-2 px-2 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      {/* MIDDLE */}
      <div className="flex items-center gap-2 text-xs">
        {/* PAGE INDEX CALCULATING */}
        {Array.from(
          { length: Math.ceil(count / ITEM_PER_PAGE) },
          (_, index) => {
            const pageIndex = index + 1;
            return (
              <button
                key={pageIndex}
                className={`px-2 rounded-sm ${
                  page === pageIndex ? "bg-schoolBlue" : ""
                }`}
              >
                {pageIndex}
              </button>
            );
          }
        )}
      </div>
      <button
        disabled
        className="rounded-sm bg-slate-200 py-2 px-2 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
