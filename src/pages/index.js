import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p style={{fontSize:19+'px'}}>A modern, modular, and developer-friendly admin interface for Django. Built to speed up development of internal tools and admin panels — beautifully and efficiently.</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/installation">
                        Getting started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Django SmartBase Admin Documentation`}
            description="Django SmartBase Admin Documentation">
            <HomepageHeader/>
            <main>
                <section className={styles.features}>
                    <div className="container">

                    </div></section>
                            <HomepageFeatures/>
            </main>
        </Layout>
);
}
