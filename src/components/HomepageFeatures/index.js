import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Enhanced UI/UX',
    Img: require('@site/static/img/homepage/sbadmin_icon_django.png').default,
    description: (
      <>
 Provides a more intuitive and user-friendly interface for the Django admin panel.
      </>
    ),
  },
  {
    title: 'Customizable Dashboards',
    Img: require('@site/static/img/homepage/sbadmin_icon_dashboard.png').default,
    description: (
      <>
 Allows administrators to create and customize dashboards with various widgets.
      </>
    ),
  },
  {
    title: 'Advanced Filtering and Search',
    Img: require('@site/static/img/homepage/sbadmin_icon_filters.png').default,
    description: (
      <>
Offers improved filtering and search capabilities to manage data more efficiently.
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
