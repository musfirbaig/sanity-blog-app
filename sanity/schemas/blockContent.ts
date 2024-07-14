export default {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [{ title: 'Normal', value: 'normal' }, { title: 'H1', value: 'h1' }, { title: 'H2', value: 'h2' }, { title: 'H3', value: 'h3' }, { title: 'Quote', value: 'blockquote' }],
        lists: [{ title: 'Bullet', value: 'bullet' }],
        marks: {
          decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
          annotations: [
            {
              title: 'Internal Link',
              name: 'internalLink',
              type: 'object',
              fields: [
                {
                  title: 'Reference',
                  name: 'reference',
                  type: 'reference',
                  to: [{ type: 'blogPost' }],
                },
              ],
            },

            {
              title: 'External Link',
              name: 'externalLink',
              type: 'object',
              fields: [
                {
                  title: 'URL',
                  name: 'href',
                  type: 'url',
                }
              ]
            }
          ],
        },
      },
      {
        type: 'image',
      },
    ],
  }
  