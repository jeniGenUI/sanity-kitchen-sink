export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f887814ea29900e099a5aea',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-exdex8sn',
                  apiId: 'c1aa81f6-037c-4a81-abc6-af497ea033c0'
                },
                {
                  buildHookId: '5f8878142316fa09cf5e42d6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zjehxqgy',
                  apiId: 'eb52c570-5849-4eb0-af5e-654821801f3a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeniGenUI/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zjehxqgy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
