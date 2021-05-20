export const CKEDITOR_GLOBAL_CONF = {
  link: {
    decorators: {
      checkClass: {
        mode: 'automatic',
        defaultValue: true,
        callback: (url: any) => true,
      },
      addClassStyle1: {
        mode: 'manual',
        label: 'Button primary',
        attributes: {
          class: 'btn btn-primary',
        },
      },
      addClassStyle2: {
        mode: 'manual',
        label: 'Button Secondary',
        attributes: {
          class: 'btn btn-secondary',
        },
      },
    },
  },
};
