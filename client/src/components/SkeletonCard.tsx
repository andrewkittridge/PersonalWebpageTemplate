export default function SkeletonCard() {
  return (
    <div className="minimal-card space-y-4">
      <div className="minimal-skeleton h-8 w-3/4"></div>
      <div className="space-y-2">
        <div className="minimal-skeleton h-4 w-full"></div>
        <div className="minimal-skeleton h-4 w-5/6"></div>
        <div className="minimal-skeleton h-4 w-4/6"></div>
      </div>
    </div>
  );
}
