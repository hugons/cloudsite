module.exports = {
  content: {
    collections: {
      pages: {
        title: 'Pages',
        folder: 'content/pages',
        fields: [
          {
            name: 'title',
            type: 'text',
            required: true,
          },
          {
            name: 'content',
            type: 'markdown',
            required: true,
          },
        ],
      },
    },
  },
  github: {
    repoOwner: 'hugons',
    repoName: 'cloudsite',
    repoBranch: 'main',
    contentPath: 'content',
  },
};
