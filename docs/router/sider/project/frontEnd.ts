const feSiders = [
  {
    text: '前端基础（FrontEnd）',
    items: [
      {
        text: '大纲',
        link: '/project/frontEnd/index.md'
      },
      {
        text: 'HTML',
        link: '/project/frontEnd/html/index.md'
      },
      {
        text: 'CSS',
        link: '/project/frontEnd/css/index.md'
      },
      {
        text: 'JavaScript',
        items: [
          {
            text: 'js基础',
            link: '/project/frontEnd/js/index.md',
          },
          {
            text: 'jsDemo',
            items: [
              {
                text:'门槛',
                link: '/project/frontEnd/js/demo.md',
              },
              {
                text: '练习',
                link: '/project/frontEnd/js/example.md'
              }
            ]
            
          },
        ]
   
      }
    ]
  }, {
    text: '前端项目化',
    items: [
      {
        text: '项目',
        items: [
          {
            text: '前置知识',
            link: '/project/frontEnd/project/index.md'
          }
        ]
      }
    ]
  }
]
export default feSiders
