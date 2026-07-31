import Link from "next/link";

type HeaderLink = {
  label: string;
  href: string;
};

type HeaderProps = {
  links?: HeaderLink[];
};

// Default links for the header navigation. These can be overridden by passing a `links` prop to the Header component.
const defaultLinks: HeaderLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

//Need Props for Header component to accept links as a prop. If no links are provided, use defaultLinks.
//This allows for flexibility in the header navigation, enabling different pages to have different links if needed.
//This project does not currently have multiple pages, but this structure allows for easy expansion in the future.
export function Header({ links = defaultLinks }: HeaderProps) {
  return (
    <header className="border-b border-zinc-200/80 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900"
        >
          Phu Hung
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium text-zinc-600 sm:gap-6">
          {links.map((link) => ( // Map over the links array to create navigation links. Each link is rendered as a Next.js Link component for client-side navigation.
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-zinc-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
