const Pagination = () => {
  return (
    <div className="flex justify-between items-center text-gray-500">
      <button disabled className="rounded-sm bg-slate-200 py-2 px-2 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Prev
      </button>
      {/* MIDDLE */}
      <div className="flex items-center gap-2 text-xs">
        <button className="px-2 rounded-sm bg-schoolBlue">1</button>
        <button className="px-2 rounded-sm">2</button>
        <button className="px-2 rounded-sm">3</button>
        ...
        <button className="px-2 rounded-sm">10</button>
      </div>
      <button disabled className="rounded-sm bg-slate-200 py-2 px-2 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
