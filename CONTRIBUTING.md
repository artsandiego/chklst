# How to contribute

First off, thanks for taking the time to contribute! 🎉
The following are the steps to follow in order to properly contribute to the project. 

1. You can start contributing by forking this repo!
2. Once cloned, Edit the [data.js](https://github.com/crtved/prtflio/blob/main/components/data.js) file on your forked repo. (components/data.js)
3. Inside the array add the object block below.

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
4. PR your update.  
5. Wait till your contributions are reviewed reflected.
3. Done! 🌟
