import React, {useMemo, useState} from 'react';
import styles from './styles.module.css';

const ICON_NAMES = [
  'Accept-email',
  'Add-one',
  'Add-picture',
  'Add-three',
  'Ad-product',
  'Aiming',
  'All-application',
  'Alphabetical-sorting',
  'Alphabetical-sorting-two',
  'Application-menu',
  'Application',
  'Application-two',
  'Arrow-circle-down',
  'Arrow-circle-left',
  'Arrow-circle-right',
  'Arrow-circle-up',
  'At-sign',
  'Attention',
  'Back-one',
  'Bank-card-one',
  'Bank-card',
  'Bolt-one',
  'Bookmark',
  'Box',
  'Calendar',
  'Camera',
  'Caution',
  'Check-correct',
  'Check-one-filled',
  'Check-one',
  'Check-small',
  'Check',
  'Close-one',
  'Close-small',
  'Close',
  'Column',
  'Corner-up-left',
  'Corner-up-right',
  'Cut',
  'Cylinder',
  'Delete',
  'Delete-two',
  'Double-down',
  'Double-left',
  'Double-right',
  'Double-up',
  'Down-c',
  'Download-one',
  'Download',
  'Down-small',
  'Down',
  'Drag',
  'Edit',
  'Electric-drill',
  'Excel-one',
  'Export',
  'Figma-component',
  'Filter',
  'Find',
  'Fire-extinguisher',
  'Gas',
  'Go-ahead',
  'Go-on',
  'Hamburger-button',
  'Headset-one',
  'Help',
  'Home',
  'Id-card-h',
  'Info',
  'Left-c',
  'Left-small-down',
  'Left-small',
  'Left-small-up',
  'Left',
  'Lightning-fill',
  'Lightning',
  'Like',
  'Link-two',
  'List-checkbox',
  'Lock',
  'Login',
  'Logout',
  'Magic',
  'Magic-wand',
  'Mail-download',
  'Mail-open',
  'Mail',
  'Message-emoji',
  'Message-one',
  'Minus',
  'Minus-the-top',
  'Moon',
  'More-one',
  'More',
  'More-three',
  'More-two',
  'Paperclip',
  'Parallel-gateway',
  'People-top-card',
  'Percentage',
  'Phone-telephone',
  'Picture-one',
  'Pin Filled',
  'Pin',
  'Plus',
  'Preview-close-one',
  'Preview-close',
  'Preview-open',
  'Printer',
  'Pull',
  'Pushpin',
  'Reduce-one',
  'Refresh-one',
  'Return',
  'Right-c',
  'Right-small-down',
  'Right-small',
  'Right-small-up',
  'Right',
  'Save',
  'Search',
  'Send-email',
  'Setting-config',
  'Setting-two',
  'Shopping-bag',
  'Shopping-cart-one',
  'Shopping',
  'Shop',
  'Sort Alt',
  'Sort-amount-down',
  'Sort-amount-up',
  'Sort-one',
  'Sort',
  'Sort-three',
  'Star',
  'Success',
  'Sun-one',
  'Switch',
  'Table-report',
  'Tag-one',
  'Tag',
  'Time',
  'Tips-one',
  'To-top',
  'Transfer-data',
  'Translate',
  'Translation',
  'Triangle-round-rectangle',
  'Truck',
  'Undo',
  'Unlock',
  'Up-c',
  'Upload-one',
  'Upload',
  'Up-small',
  'Up',
  'User-business',
  'View-grid-list',
  'Write',
  'Zoom-in',
  'Zoom-out',
];

const ICON_BASE_URL =
  'https://raw.githubusercontent.com/SmartBase-SK/django-smartbase-admin/main/src/django_smartbase_admin/static/sb_admin/sprites/sb_admin';

function getIconUrl(iconName) {
  return `${ICON_BASE_URL}/${encodeURIComponent(iconName)}.svg`;
}

export default function IconCatalog() {
  const [query, setQuery] = useState('');

  const filteredIcons = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return ICON_NAMES;
    }

    return ICON_NAMES.filter((iconName) =>
      iconName.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <div>
      <div className={styles.toolbar}>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Filter icons by name..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Filter icons by name"
        />
        <div className={styles.resultCount}>
          Showing {filteredIcons.length} of {ICON_NAMES.length} icons
        </div>
      </div>

      <div className={styles.grid}>
        {filteredIcons.map((iconName) => (
          <div key={iconName} className={styles.card}>
            <div className={styles.preview}>
              <img
                src={getIconUrl(iconName)}
                alt={iconName}
                className={styles.image}
                loading="lazy"
              />
            </div>
            <code className={styles.name}>{iconName}</code>
          </div>
        ))}
      </div>
    </div>
  );
}
