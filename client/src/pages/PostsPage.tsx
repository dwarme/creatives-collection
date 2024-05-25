import ErrorBoundary from "../components/ErrorBoundary";
import Posts from "../components/Posts/Posts";
import Layout from "../components/Layout/Layout";
import FallbackErrorBoundaryPagePosts from "../components/FallbaksErrorBoundary/FallbackErrorBoundaryPagePosts";

function PostsPage() {
  return (
    <Layout>
      <main role="main">
        <section className="section">
          <div className="section-content">
            <h2 className="typography-section-headline section-headline duo-tone">
              <strong className="text-colorfull-primaryX">
                Meta Ads Policy Checker.
              </strong>{" "}
              Fueling Creativity and Inspiration.
            </h2>
          </div>
        </section>
        <section className="section">
          <ErrorBoundary fallback={<FallbackErrorBoundaryPagePosts />}>
            <Posts />
          </ErrorBoundary>
        </section>
      </main>
    </Layout>
  );
}

export default PostsPage;
