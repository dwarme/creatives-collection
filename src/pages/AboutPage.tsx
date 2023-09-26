import ErrorBoundary from "../components/ErrorBoundary";
import Layout from "../components/Layout/Layout";

function AboutPage() {
  return (
    <Layout>
      <ErrorBoundary fallback={"Something went wrong: About"}>
        <section className="section">
          <div className="section-content">
            <h1>Account</h1>
          </div>
        </section>
      </ErrorBoundary>
    </Layout>
  );
}

export default AboutPage;
