/* =============================================================
   BLOG ARTICLE LAYOUT — Sara Life Insurance
   Shared layout for all 6 blog post pages
   ============================================================= */
import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { BLOG_POSTS } from "@/pages/Blog";

const AGENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663368367743/8QihdGFBc98MfQRykrPuzF/hero-consultation-E55AjJXGjGAwtJzk7xXQa6.webp";

interface BlogArticleProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
}

export default function BlogArticle({ slug, title, category, date, readTime, children }: BlogArticleProps) {
  const related = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        {/* Article Header */}
        <div className="page-header">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <Link href="/blog" className="flex items-center gap-1.5 text-blue-200 hover:text-white text-sm mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#d69e2e] text-[#1a365d] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Tag className="w-3 h-3" /> {category}
              </span>
            </div>
            <h1 className="font-['Playfair_Display'] text-2xl lg:text-3xl font-bold text-white leading-snug mb-4">{title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
              <span className="flex items-center gap-1.5"><span className="font-semibold text-white">Sara</span></span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{readTime}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="prose prose-slate prose-lg max-w-none text-gray-700 leading-relaxed
              prose-h2:font-['Playfair_Display'] prose-h2:text-[#1a365d] prose-h2:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
              prose-h3:font-['Playfair_Display'] prose-h3:text-[#1a365d] prose-h3:font-semibold prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
              prose-p:text-sm prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-sm prose-ul:space-y-1 prose-li:leading-relaxed
              prose-strong:text-[#1a365d]
            ">
              {children}
            </div>

            {/* In-article CTA */}
            <div className="my-10 bg-gradient-to-br from-[#1a365d] to-[#2b6cb0] rounded-2xl p-8 text-center text-white">
              <h3 className="font-['Playfair_Display'] text-xl font-bold mb-2">Ready to Get Covered?</h3>
              <p className="text-blue-200 text-sm mb-5">Get your free, personalized quote today — no obligation, no pressure.</p>
              <Link href="/quote" className="btn-gold">
                Get Your Free Quote →
              </Link>
            </div>

            {/* About the Author */}
            <div className="border border-gray-100 rounded-2xl p-6 flex items-start gap-5">
              {/* REPLACE WITH YOUR REAL PHOTO */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#d69e2e] flex-shrink-0">
                <img src={AGENT_IMG} alt="Sara" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">About the Author</p>
                <p className="font-['Playfair_Display'] font-bold text-[#1a365d] text-base mb-1">Sara Siblini</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sara Siblini is a Licensed Life Insurance Representative with Primerica Life Insurance Company of Canada, passionate about helping Ontario families get the protection they deserve. She offers free consultations via Zoom. FSRA Lic. #NUV56 | Licensed in Ontario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-[#f7f8fc]">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[#2b6cb0] transition-colors block">
                  <span className="text-2xl mb-2 block">{post.emoji}</span>
                  <p className="font-semibold text-[#1a365d] text-sm leading-snug hover:text-[#2b6cb0] transition-colors">{post.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{post.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}
