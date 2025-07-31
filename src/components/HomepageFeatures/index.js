import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function HomepageFeatures() {
    const screenshot1 = require('@site/static/img/homepage/screenshot1.png').default;
    const screenshot2 = require('@site/static/img/homepage/screenshot2.png').default;
    const screenshot3 = require('@site/static/img/homepage/screenshot3.png').default;
    const screenshot4 = require('@site/static/img/homepage/screenshot4.png').default;

    return (
        <>
            <section className={styles.features} style={{marginBottom: 50}}>
                <div className="container features-grid">
                    <div className="feature-item">
                        <img src={screenshot1} alt="Dashboard Screenshot" width="360" height="238"/>
                        <h3>Interactive Dashboards</h3>
                        <p>Create real-time dashboards with graphs, KPIs, filters, and visual widgets.</p>
                        <Link
                            className="button button--primary button--sm"
                            to="/docs/dashboard">
                            Learn more
                        </Link>
                    </div>
                    <div className="feature-item">
                        <img src={screenshot2} alt="Editable List Screenshot" width="360" height="238"/>
                        <h3>Powerful List View</h3>
                        <p>Editable, sortable list views with bulk actions, saved filters and improved performance.</p>
                        <Link
                            className="button button--primary button--sm"
                            to="/docs/table/getting_started">
                            Learn more
                        </Link>
                    </div>
                    <div className="feature-item">
                        <img src={screenshot4} alt="Domain Switch Screenshot" width="360" height="238"/>
                        <h3>Support for "FakeInlines"</h3>
                        <p>Define inline-like blocks without requiring a direct model relationship</p>
                        <Link
                            className="button button--primary button--sm"
                            to="/docs/detail/fake_inlines">
                            Learn more
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles.featureListBlock}>
                <div className="container">
                    <Heading as="h2" className="text--center">✨ And Many More Features like:</Heading>
                    <div className={styles.featureTileGrid}>
                        <Link className={styles.featureTile} to="/docs/installation">
                            ⚡ Fast integration with any Django project
                        </Link>

                        <Link className={styles.featureTile} to="/docs/menu">
                            🔧 Menu and permissions configuration per role
                        </Link>
                        <Link className={styles.featureTile} to="/docs/table/filters">
                            🔍 Autocomplete filters for related fields
                        </Link>
                        <Link className={styles.featureTile} to="/docs/table/filters">
                            💾 Save and reuse custom filters
                        </Link>
                        <Link className={styles.featureTile} to="/docs/detail/classes">
                            🧠 Autocomplete support in detail view
                        </Link>
                        <Link className={styles.featureTile} to="/docs/detail/fake_inlines">
                            🔗 FakeInlines – no relation needed
                        </Link>
                        <Link className={styles.featureTile} to="docs/table/list_actions">
                            🧩 Extend list and detail views with custom actions
                        </Link>
                        <Link className={styles.featureTile} to="/docs/tree_widget">
                            🗂️ Tree Widget for managing hierarchical data
                        </Link>
                        <span className={styles.featureTile}>
                            🚀 Performance improvements using SBAdminField, annotate(), values()
                        </span>
                        <span className={styles.featureTile}>
                            🎨 Modern UI (Tailwind CSS)
                        </span>
                        <span className={styles.featureTile}>
                            📱 Responsive & mobile-friendly
                        </span>
                        <span className={styles.featureTile}>
                            ✅ End-user ready for building SaaS or similar projects with global queryset configuration
                        </span>

                    </div>
                </div>
            </section>

        </>
    );
}
