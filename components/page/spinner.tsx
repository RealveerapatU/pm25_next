"use client";
import { Spinner } from "@heroui/react";
export default function App() {
  return (
    <div className="flex flex-wrap items-end gap-8">
      <Spinner
        classNames={{ label: "text-foreground mt-4" }}
        label="Synchronizing with Server"
        variant="dots"
      />
    </div>
  );
}
