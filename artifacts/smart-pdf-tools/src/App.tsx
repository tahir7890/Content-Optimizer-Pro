import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import NotFound from "@/pages/not-found";

import HomePage from "@/pages/home";
import PdfToWordPage from "@/pages/pdf-to-word";
import WordToPdfPage from "@/pages/word-to-pdf";
import MergePdfPage from "@/pages/merge-pdf";
import CompressPdfPage from "@/pages/compress-pdf";
import ImageToPdfPage from "@/pages/image-to-pdf";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import TermsPage from "@/pages/terms";
import DisclaimerPage from "@/pages/disclaimer";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/pdf-to-word" component={PdfToWordPage} />
          <Route path="/word-to-pdf" component={WordToPdfPage} />
          <Route path="/merge-pdf" component={MergePdfPage} />
          <Route path="/compress-pdf" component={CompressPdfPage} />
          <Route path="/image-to-pdf" component={ImageToPdfPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/privacy-policy" component={PrivacyPolicyPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/disclaimer" component={DisclaimerPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
