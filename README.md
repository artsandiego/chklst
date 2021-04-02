# How to contribute
1. You can contribute by editing [data.js](https://github.com/crtved/prtflio/blob/main/components/data.js)
2. Inside the array, you can add the following object block.

```
{
  name: 'Your name here',
  bio: 'Your short bio',
  emoji: '🔥',
  socials: [ <!-- Your socials and website, let's connect! -->
    {
      label: 'github',
      url: 'https://github.com/johndoe'
    },
    {
      label: 'linkedin',
      url: 'https://linkedin.com/in/johndoe'
    },
    {
      label: 'website',
      url: 'https://johndoe.com'
    }
  ],
  sources: [ <!-- The main meat -->
    {
      label: 'Label or title of resource',
      url: 'link to resource',
      tags: [ <!-- Add tags to filter your content *NO SPEC CHARACTER -->
        'youtube',
        'website',
      ]
    },
    {
      label: 'Label or title of the 2nd resource',
      url: 'link to the 2nd resource',
      tags: [ <!-- Add tags to filter your content *NO SPEC CHARACTER -->
        'behance',
        'pinterest',
        'ui',
        'ux',
      ]
    },
  ]
},
  ```
  3. Connect with your fellow devs! 

Designed in [Figma](https://figma.com/) and Developed using [Next JS](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/) with ❤️ by [@crtved](https://artsandiego.dev)

