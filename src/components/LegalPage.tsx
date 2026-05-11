import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LegalPageProps {
  title: string;
  updatedAt?: string;
  children: ReactNode;
}

const LegalPage = ({ title, updatedAt, children }: LegalPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 pt-28 md:pt-32 pb-12 md:pb-16">
        <article className="prose prose-slate max-w-3xl mx-auto">
          <Link
            to="/"
            className="not-prose inline-block text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            ← Voltar para a Home
          </Link>
          <h1>{title}</h1>
          {children}
          {updatedAt && (
            <p className="text-sm text-muted-foreground mt-12 not-prose">
              Atualizado em: {updatedAt}
            </p>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
