module.exports = {
  extend: '@vuepress/theme-default',
  title: 'Hello VuePress',
  description: 'Just playing around',
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
      
            // 其他的 Vssue 配置
            owner: 'jiaowxbx',
            repo: 'docs1',
            clientId: 'fbd21957616eda838c44',
            clientSecret: '0a26bbb9241bbf50f9150876604c84b468f59c56',
            autoCreateIssue:true,
            
           },
        '@vuepress/back-to-top':true
    },
    
    themeConfig:{
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about' },
            {
            text: 'Languages',
            items: [
              { text: 'Group1', items: [
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
              ] 
            },
              { text: 'Group2', items: [
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about1' },
              ] 
            }
            ]
            },
          
          ],
        displayAllHeaders: true,
        sidebar: 'auto',
        sidebar:[
          '/',
          'about',
          'about1',
          'quanxue'
        ]
    }
    
  };