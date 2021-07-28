export const CKEDITOR_GLOBAL_CONF = {
  link: {
    decorators: {
      openInNewTab: {
        mode: 'manual',
        label: 'Open in a new tab',
        attributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      },
      addClassPrimaryButton: {
        mode: 'manual',
        label: 'Primary Button',
        attributes: {
          class: 'btn btn-primary',
        },
      },
      addClassSecondaryButton: {
        mode: 'manual',
        label: 'Secondary Button',
        attributes: {
          class: 'btn btn-secondary',
        },
      },
    },
  },
};
