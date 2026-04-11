/* =============================================================
   BLOG HUB — Sara Life Insurance
   Grid of 6 blog post preview cards
   ============================================================= */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import PageHeader from "@/components/PageHeader";

const BLOG_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663368367743/8QihdGFBc98MfQRykrPuzF/blog-hero-Y3TzHnw2WxL6u2mYDKQHhy.webp";

export const BLOG_POSTS = [
  {
    slug: "how-much-life-insurance",
    emoji: "📊",
    category: "Planning",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "How Much Life Insurance Do I Really Need?",
    excerpt: "Most people either over-insure or under-insure. Learn the 10x income rule, the DIME method, and how to calculate the exact coverage your family needs.",
    date: "March 15, 2025",
    readTime: "6 min read",
  },
  {
    slug: "term-vs-whole-life",
    emoji: "⚖️",
    category: "Education",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "Term vs. Whole Life Insurance: Which Is Right for You?",
    excerpt: "The term vs. whole life debate is one of the most common questions in insurance. Here's a clear, honest comparison to help you decide.",
    date: "February 28, 2025",
    readTime: "7 min read",
  },
  {
    slug: "life-insurance-young-families",
    emoji: "👨‍👩‍👧‍👦",
    category: "Families",
    categoryColor: "bg-green-100 text-green-700",
    title: "Life Insurance for Young Families: Why You Need It Now",
    excerpt: "If you have a spouse, children, or a mortgage, every day without life insurance is a risk. Here's why young families need coverage — and why waiting costs more.",
    date: "February 10, 2025",
    readTime: "5 min read",
  },
  {
    slug: "final-expense-insurance",
    emoji: "🌿",
    category: "Seniors",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "What Is Final Expense Insurance and Who Needs It?",
    excerpt: "Funerals cost $7,000–$12,000 on average. Final expense insurance ensures your family isn't left with that burden. Here's everything you need to know.",
    date: "January 22, 2025",
    readTime: "5 min read",
  },
  {
    slug: "life-insurance-myths",
    emoji: "🚫",
    category: "Education",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "5 Life Insurance Myths That Are Costing You Money",
    excerpt: "\"It's too expensive.\" \"I'm healthy, I don't need it.\" \"My job covers me.\" These myths are keeping millions of families unprotected. Let's debunk them.",
    date: "January 8, 2025",
    readTime: "6 min read",
  },
  {
    slug: "choose-life-insurance-agent",
    emoji: "🤝",
    category: "Tips",
    categoryColor: "bg-teal-100 text-teal-700",
    title: "How to Choose a Life Insurance Agent You Can Trust",
    excerpt: "Not all agents are created equal. Here's what to look for, red flags to avoid, and why working with an independent agent almost always gets you a better deal.",
    date: "December 18, 2024",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <PageHeader
          title="Life Insurance Blog"
          subtitle="Practical guides, honest advice, and everything you need to make smart insurance decisions."
          breadcrumbs={[{ label: "Blog" }]}
        />

        <section className="py-16 bg-[#f7f8fc]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article key={post.slug} className="blog-card">
                  {/* Card Header */}
                  <div className="bg-gradient-to-br from-[#1a365d] to-[#2b6cb0] p-6 flex items-center justify-between">
                    <span className="text-4xl">{post.emoji}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.categoryColor}`}>
                      {post.category}
                    </span>
                  </div>
                  {/* Card Body */}
                  <div className="p-6">
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="font-['Playfair_Display'] text-lg font-bold text-[#1a365d] mb-3 hover:text-[#2b6cb0] transition-colors leading-snug cursor-pointer">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs font-semibold text-[#1a365d]">Sara</p>
                        <p className="text-xs text-gray-400">{post.date} · {post.readTime}</p>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs font-semibold text-[#2b6cb0] hover:text-[#d69e2e] transition-colors flex items-center gap-1"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-14 text-center">
              <p className="text-gray-600 mb-5">Ready to put this knowledge to use?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/quote" className="btn-gold">Get a Free Quote</Link>
                <Link href="/book" className="btn-navy">Book a Free Call</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}
