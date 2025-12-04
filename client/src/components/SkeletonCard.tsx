export default function SkeletonCard() {
  return (
    <div className="surface-card space-y-4">
      <div className="skeleton-line h-8 w-3/4" />
      <div className="space-y-2">
        <div className="skeleton-line h-4 w-full" />
        <div className="skeleton-line h-4 w-5/6" />
        <div className="skeleton-line h-4 w-4/6" />
      </div>
    </div>
  );
}
