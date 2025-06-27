import { HTMLAttributes, ReactNode } from "react";

// Basic shared interfaces
interface ClassName {
  className?: string;
}

interface Children {
  children: ReactNode;
}

// Combo interface
interface WithChildrenAndClass extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export type { ClassName, Children, WithChildrenAndClass };
