/* =============================================================
   PAGE HEADER — Sara Life Insurance
   Design: Navy gradient with gold bottom border, breadcrumb
   ============================================================= */
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 mb-4 text-sm text-blue-200">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-bold text-white mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
