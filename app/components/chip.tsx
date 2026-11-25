export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-line bg-surface-2 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
