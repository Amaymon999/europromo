import { useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";
import { SectionLabel, CTAButton } from "@/components/ui";
import { getPostBySlug, blogPosts } from "@/data/blog";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  const post = slug ? getPostBySlug(slug) : undefined;
  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div ref={rootRef}>
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        canonical={`https://www.europromo.it/blog/${post.slug}`}
      />

      <article className="pt-36 pb-section md:pt-44">
        <div className="container-grid">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-graphite hover:text-blue transition-colors">
            <ArrowLeft className="size-3.5" />
            Torna al blog
          </Link>

          <div className="mt-10 max-w-3xl">
            <SectionLabel index={post.category.toUpperCase()}>{post.readTime} di lettura</SectionLabel>
            <h1 data-reveal className="font-display text-[clamp(1.85rem,5vw,4rem)] font-bold leading-[0.95] tracking-tightest text-balance">
              {post.title}
            </h1>
            <p data-reveal className="mt-6 text-lg leading-relaxed text-blue font-medium">
              {post.excerpt}
            </p>
          </div>

          <div data-reveal-group className="mt-14 max-w-2xl space-y-6 text-base leading-relaxed text-graphite md:text-lg">
            {post.content.map((para, i) => (
              <p key={i} data-reveal>{para}</p>
            ))}
          </div>

          <div data-reveal className="mt-16 max-w-2xl border-t border-ink/15 pt-10">
            <CTAButton to="/contatti" variant="dark">
              Parla con il nostro team
            </CTAButton>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-ink/10 bg-mist/40 py-section">
          <div className="container-grid">
            <SectionLabel index="ALTRE GUIDE">Continua a leggere</SectionLabel>
            <div data-reveal-group className="grid gap-px sm:grid-cols-2 bg-ink/10">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  data-reveal
                  className="group bg-mist/40 p-8 transition-colors hover:bg-paper"
                >
                  <span className="text-[11px] uppercase tracking-[0.15em] text-blue">{p.category}</span>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight leading-tight group-hover:text-blue transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
