export default function SkeletonCard() {
  return (
    <div className="tesla-card p-6 space-y-4">
      <div className="skeleton h-8 w-3/4"></div>
      <div className="space-y-2">
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-5/6"></div>
        <div className="skeleton h-4 w-4/6"></div>
      </div>
    </div>
  );
}
