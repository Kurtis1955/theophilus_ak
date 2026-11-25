import Image from "next/image";

/**
 * Renders real project screenshots when available.
 * When no screenshots exist, renders a neutral abstract "system" visual —
 * deliberately not a fabricated UI screenshot.
 */
export default function ProjectVisual({
  images,
  alt,
  compact = false,
}: {
  images: string[];
  alt: string;
  compact?: boolean;
}) {
  if (images.length === 0) {
    return <AbstractVisual name={alt} compact={compact} />;
  }

  return (
    <div className="space-y-3">
      {images.map((src, i) => (
        <div
          key={src}
          className="relative rounded-lg overflow-hidden border border-line bg-surface-2"
        >
          <Image
            src={src}
            alt={`${alt} — screenshot ${i + 1}`}
            width={1280}
            height={800}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}

function AbstractVisual({ name, compact }: { name: string; compact?: boolean }) {
  return (
    <div
      className="relative rounded-lg border border-line bg-surface-2 overflow-hidden"
      role="img"
      aria-label={`${name} — project visual placeholder`}
    >
      <div className="bg-dots absolute inset-0 opacity-60" />
      <div className="relative p-5 sm:p-8">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 mb-5">
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent/50" />
          <span className="ml-3 font-mono text-[10px] text-faint truncate">
            app.local/{name.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>

        <div className={`grid gap-3 ${compact ? "grid-cols-4" : "grid-cols-3"}`}>
          {/* sidebar */}
          <div className="col-span-1 space-y-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-2 rounded-full ${i === 0 ? "bg-accent/60 w-3/4" : "bg-line w-full"}`}
              />
            ))}
          </div>
          {/* stat cards */}
          <div className="col-span-2 grid grid-cols-2 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-md border border-line bg-surface p-3 space-y-2">
                <div className="h-1.5 w-1/2 rounded-full bg-line" />
                <div className="h-3 w-2/3 rounded-full bg-accent/30" />
                <div className="h-1.5 w-1/3 rounded-full bg-line" />
              </div>
            ))}
          </div>
        </div>

        {/* chart bars */}
        {!compact && (
          <div className="mt-4 rounded-md border border-line bg-surface p-4">
            <div className="flex items-end gap-2 h-16">
              {[42, 68, 35, 80, 55, 92, 60].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-accent/25"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="relative border-t border-line bg-surface px-5 py-2.5">
        <p className="font-mono text-[10px] text-faint">
          {name} — visual placeholder · screenshots available on request
        </p>
      </div>
    </div>
  );
}
