# How to contribute

First off, thanks for taking the time to contribute! 🎉
The following are the steps to follow in order to properly contribute to the project. 

1. You can contribute by forking this repo and editing [data.js](https://github.com/crtved/prtflio/blob/main/components/data.js) file on your forked repo.
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
      **<!-- Add tags to filter your content *NO SPEC CHARACTER AND ALL SMALL CAPS -->**
      tags: [ 
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
3. PR your update and set me as reviewer. 
4. Wait till your contributions are reflected.
5. Done! 🌟
