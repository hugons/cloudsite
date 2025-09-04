module.exports = {
  content: {
    collections: {
      content: {
        title: 'Content',
        folder: '',
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
    contentPath: 'outstatic/content',
  },
};
