var rule = {
  title: 'MTV168',
  host: 'https://www.hdmtv168.com/',
  class_name: '日韩MV&欧美MV&华语MV&舞曲MV&4K-MV',
  class_url: '105&106&107&101&108',
  searchUrl: '/h-sr-18288.html?m35pageno=fypage&fromColId=107&nSL=%5B1%2C3%2C4%2C12%2C8%2C9%2C10%2C11%2C5%2C6%2C7%5D&skeyword=**&moduleId=1072',
  searchable: 2,
  quickSearch: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  url: '/h-col-fyclass.html[/h-col-fyclass.html]',
  filterable: 0,
  filter_url: '',
  filter: {},
  filter_def: {},
  detailUrl: '/index.php/vod/detail/id/fyid.html',
  play_parse: true,
  lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input = url && url.startsWith('http') && tellIsJx(url) ? {parse:0,jx:1,url:url}:input;\n  }",
  limit: 6,
  推荐: '*',
  一级: '.productTileForm;img&&alt;img&&data-original;.second_Param&&td&&Text;a&&href',
  二级:'*',
  搜索: '.newsList .item;a&&title;img&&src;;a&&href',
}