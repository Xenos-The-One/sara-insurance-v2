/* =============================================================
   APP ROUTER — Sara Life Insurance
   All routes for the complete website
   ============================================================= */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Quote from "./pages/Quote";
import Book from "./pages/Book";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Blog Articles
import HowMuchLifeInsurance from "./pages/blog/HowMuchLifeInsurance";
import TermVsWholeLife from "./pages/blog/TermVsWholeLife";
import YoungFamilies from "./pages/blog/YoungFamilies";
import FinalExpense from "./pages/blog/FinalExpense";
import LifeInsuranceMyths from "./pages/blog/LifeInsuranceMyths";
import ChooseAgent from "./pages/blog/ChooseAgent";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/quote" component={Quote} />
      <Route path="/book" component={Book} />
      <Route path="/blog" component={Blog} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/thankyou" component={ThankYou} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      {/* Blog Articles */}
      <Route path="/blog/how-much-life-insurance" component={HowMuchLifeInsurance} />
      <Route path="/blog/term-vs-whole-life" component={TermVsWholeLife} />
      <Route path="/blog/life-insurance-young-families" component={YoungFamilies} />
      <Route path="/blog/final-expense-insurance" component={FinalExpense} />
      <Route path="/blog/life-insurance-myths" component={LifeInsuranceMyths} />
      <Route path="/blog/choose-life-insurance-agent" component={ChooseAgent} />
      {/* Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
