import BlogArticle from "@/components/BlogArticle";
export default function HowMuchLifeInsurance() {
  return (
    <BlogArticle slug="how-much-life-insurance" title="How Much Life Insurance Do I Really Need?" category="Planning" date="March 15, 2025" readTime="6 min read">
      <p>One of the most common questions I hear from clients is: "How much life insurance do I actually need?" It's a great question — and the answer is different for everyone. But there are a few proven methods that can help you arrive at the right number.</p>

      <h2>The 10x Income Rule</h2>
      <p>The simplest starting point is the <strong>10x income rule</strong>: multiply your annual income by 10. If you earn $60,000 per year, you'd want at least $600,000 in coverage. This rule of thumb is easy to remember and gives you a solid baseline, but it doesn't account for your specific debts, dependents, or financial goals.</p>
      <p>The 10x rule works best as a quick sanity check. If you're significantly under that number, you're likely underinsured. But for a more precise calculation, you'll want to use the DIME method.</p>

      <h2>The DIME Method</h2>
      <p>DIME stands for <strong>Debt, Income, Mortgage, and Education</strong>. Here's how it works:</p>
      <ul>
        <li><strong>Debt:</strong> Add up all your non-mortgage debts — car loans, credit cards, student loans, personal loans. Your policy should cover these so your family isn't left with them.</li>
        <li><strong>Income:</strong> Multiply your annual income by the number of years your family would need support. Many financial planners recommend 10 years as a baseline.</li>
        <li><strong>Mortgage:</strong> Include your remaining mortgage balance. Your family should be able to stay in their home.</li>
        <li><strong>Education:</strong> Estimate the cost of college or vocational training for each child. A common estimate is $100,000–$200,000 per child.</li>
      </ul>
      <p>Add these four numbers together and you have a much more personalized coverage target.</p>

      <h2>A Real-World Example</h2>
      <p>Let's say you earn $70,000 CAD per year, have a $350,000 mortgage, $30,000 in other debts, and two children whose post-secondary education you'd like to help fund. Using DIME:</p>
      <ul>
        <li>Debt: $30,000 CAD</li>
        <li>Income (10 years): $700,000 CAD</li>
        <li>Mortgage: $350,000 CAD</li>
        <li>Education (2 children): $200,000 CAD</li>
      </ul>
      <p>Total: <strong>$1,280,000 CAD</strong>. That's your DIME number. You might round up to $1.5 million for a buffer, or down to $1 million if budget is a concern. All figures are illustrative only.</p>

      <h2>Don't Forget to Subtract Your Assets</h2>
      <p>If you have significant savings, investments, or other life insurance policies, you can subtract those from your coverage target. The goal is to cover the gap between what you have and what your family would need.</p>

      <h2>When to Reassess Your Coverage</h2>
      <p>Your life insurance needs change over time. You should review your coverage whenever you experience a major life event: getting married, having a child, buying a home, getting a significant raise, or paying off major debts. I recommend an annual review to make sure your coverage still fits your life.</p>

      <h2>The Bottom Line</h2>
      <p>There's no one-size-fits-all answer to how much life insurance you need. But by using the 10x rule as a starting point and the DIME method for precision, you can arrive at a number that genuinely protects your family. The most important thing is to get covered — even an imperfect amount is infinitely better than nothing.</p>
      <p>Not sure where to start? Book a free consultation and I'll walk you through a complimentary Financial Needs Analysis (FNA) for your specific situation. It takes 20–30 minutes and costs you nothing.</p>
      <p className="text-xs text-gray-400 mt-6 border-t border-gray-100 pt-4">This article is for general educational purposes only and does not constitute financial or insurance advice. Coverage is subject to underwriting approval by Primerica Life Insurance Company of Canada. All amounts are in Canadian dollars (CAD). Sara Siblini is a Licensed Life Insurance Representative with Primerica Life Insurance Company of Canada, FSRA Lic. #NUV56, licensed in Ontario.</p>
    </BlogArticle>
  );
}
