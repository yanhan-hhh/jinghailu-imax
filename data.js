// 经海路 iMax 影厅 — 剧目数据
// 数据来源：《影视综·短剧·漫剧IP信息与上映节奏报告（2026年06月26日）》
// 厅别 hall：main=正片厅(热播/上映中) / chase=追更厅(连载中·即将开播) / classic=经典厅(已完结回看·短剧漫剧)
// 媒介 media：国产剧 / 海外剧 / 院线电影 / 国漫番剧 / 短剧漫剧
// status：热播中 / 上映中 / 连载中 / 即将开播 / 已完结 / 今日首发

// 最新报告日期（每日更新时改这里。用作“今日”基准 → 决定 NEW 角标和归档判断）
const REPORT_DATE = "2026-06-26";

const MOVIES = [
  // ============ 一、国内剧集 ============
  {
    id: 1, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "南部档案", media: "国产剧", hall: "main", status: "热播中",
    genre: ["民国奇幻", "悬疑探案"], hot: 92, rating: null,
    cast: "张新成、丁禹兮", director: null,
    ipFrom: "南派三叔《盗墓笔记》正统前传",
    release: "6月12日上线", platform: "爱奇艺",
    summary: "1916年南洋，围绕「水鬼乡」离奇命案展开。张新成饰张海盐（张家南部档案馆掌门人）、丁禹兮饰南怀舒（南洋第一白月光，绝技《南斗一刀》）。所有线索指向一桩凭空消失的案件「南安号」，涉及军阀生化阴谋与张家血脉秘密。",
    guide: "B站多位UP主已产出大量解说视频，搜索「南部档案」即可找到",
    risk: { level: "中风险", tags: ["无同性恋情节·低风险", "悬疑凶杀场面有血腥成分·中风险"] }
  },
  {
    id: 2, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "莫离", media: "国产剧", hall: "main", status: "热播中",
    genre: ["古装", "爱情", "悬疑"], hot: 88, rating: null,
    cast: "白鹿、丞磊", director: null,
    ipFrom: "小说改编",
    release: "6月9日上线", platform: "爱奇艺",
    summary: "南山遗孤叶璃为残疾的王墨修冲喜，先婚后爱联手查旧案洗冤。原著删除了部分穿插看点，古装质感在线，先婚后爱有看点。",
    guide: "腾讯视频搜索《莫离》",
    risk: { level: "低风险", tags: ["无同性恋情节·低风险", "古装权谋有轻微暴力·低风险"] }
  },
  {
    id: 3, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "迷墙", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["剧情", "犯罪", "黑色幽默"], hot: 70, rating: null,
    cast: "郭京飞、任素汐、谷嘉诚、漆昌昊、温峥嵘", director: null,
    ipFrom: null,
    release: "6月7日上线", platform: "爱奇艺",
    summary: "倒霉透顶的小夫妻误打误撞住进大别墅，意外发现一笔3000万藏匿巨款。黑色幽默荒诞悬疑，被认为是2026年度悬疑黑马。",
    guide: "爱奇艺搜索《迷墙》",
    risk: { level: "低风险", tags: ["无同性恋情节·低风险", "犯罪题材无过度血腥·低风险"] }
  },
  {
    id: 4, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "爱情有烟火", media: "国产剧", hall: "main", status: "热播中",
    genre: ["都市", "轻喜爱情"], hot: 78, rating: null,
    cast: "檀健次、王皓然、李乃文、张昊唯、姜珮瑶", director: null,
    ipFrom: null,
    release: "6月17日上线", platform: "腾讯视频",
    summary: "都市男女的轻松爱情喜剧，云合数据9.7排名第四，口碑稳步上升。",
    guide: "腾讯视频搜索《爱情有烟火》",
    risk: { level: "低风险", tags: ["无同性恋情节·低风险", "无血腥暴力·低风险"] }
  },
  {
    id: 5, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "问心2", media: "国产剧", hall: "main", status: "热播中",
    genre: ["剧情", "医疗"], hot: 80, rating: null,
    cast: "赵又廷、毛晓彤、金世佳、张佳宁、陈冲", director: null,
    ipFrom: null,
    release: "6月17日央视+爱奇艺同步播出", platform: "爱奇艺",
    summary: "两年后，周筱风援救到来与林逸，方筱然会合，周筱风被破格提拔为心内科执行主任。面临新的现实冲突，无奈与温暖共生。",
    guide: "爱奇艺《问心2》",
    risk: { level: "低风险", tags: ["无同性恋情节·低风险", "无血腥暴力·低风险"] }
  },
  {
    id: 6, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "云秀行", media: "国产剧", hall: "main", status: "今日首发", today: true,
    genre: ["古装", "喜剧", "爱情"], hot: 85, rating: null,
    cast: "李一桐、曾舜晞、邓为、代露娃、王以纶", director: null,
    ipFrom: null,
    release: "6月26日首播（今天！）", platform: "爱奇艺·优酷联播",
    summary: "古装喜剧爱情。在传说中的九城，名门望小范云远和白切黑城主彼此试探、相互信任，一路披荆斩棘携手民保科。阵容顶配但豆瓣云合仅3.3%遇冷。",
    guide: "优酷《云秀行》",
    risk: { level: "低风险", tags: ["无同性恋情节·低风险", "无血腥暴力·低风险"] }
  },
  {
    id: 7, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "昨夜将至", media: "国产剧", hall: "main", status: "上映中",
    genre: ["悬疑"], hot: 72, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "6月24日上线（迷雾剧场）", platform: "爱奇艺迷雾剧场",
    summary: "爱奇艺迷雾剧场6月最新新作，接档《南部档案》之后上线。",
    guide: "爱奇艺搜索《昨夜将至》",
    risk: { level: "中风险", tags: ["无同性恋情节·低风险", "悬疑题材可能有惊悚元素·中风险"] }
  },
  {
    id: 8, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "江云镇谜案", media: "国产剧", hall: "main", status: "今日首发", today: true,
    genre: ["民国探案"], hot: 68, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "6月26日定档（今天！）", platform: "爱奇艺",
    summary: "今天上线的民国探案新剧，与《云秀行》同日上线，正面竞争。",
    guide: "爱奇艺搜索《江云镇谜案》",
    risk: { level: "中风险", tags: ["无同性恋情节·低风险", "探案题材有轻量凶杀元素·中风险"] }
  },

  // ============ 二、海外剧集 ============
  {
    id: 9, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "铁拳教育", media: "海外剧", hall: "main", status: "全球爆款",
    genre: ["校园动作", "现实题材"], hot: 98, rating: 8.8,
    cast: "金试烈、李星民、秦基周、表志勋(P.O)", director: null,
    ipFrom: "改编自Naver超高人气网漫《Get Schooled》",
    release: "Netflix 6月5日全集上线，共8集", platform: "Netflix",
    summary: "在级强者的胜诉痛中，政府成立「教权保护局」，用铁腕手段整顿校园乱象——靠武力震慑、奇葩家长、倒卖处方药给学生的精英家长灰色产业链，均被一一收拾，被誉为「年度解压神剧」。",
    hotDetail: "豆瓣8.8分，FlixPatrol全球电视节目榜第三，非英语类第一，进入88国TOP10，27国榜首。B站解说视频播放破2000万。",
    guide: "B站搜索「铁拳教育」有海量解说视频，多个UP主播放量破百万",
    risk: { level: "中风险", tags: ["无同性恋情节·低风险", "有动作场面和校园暴力描绘·中风险"] }
  },
  {
    id: 10, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "边缘医生", media: "海外剧", hall: "chase", status: "连载中",
    genre: ["医疗", "爱情"], hot: 65, rating: null,
    cast: "李宰旭、申艺恩、洪敏基", director: null,
    ipFrom: null,
    release: "ENA电视台每周一二晚10点", platform: "ENA（每周一、二更新）",
    summary: "公立医生杜智恩和护士刘爱莉在偏远岛屿相遇，展开温馨的生命救援之旅。",
    risk: { level: "低风险", tags: ["无同性恋情节·低风险", "医疗场景有部分手术画面·低风险"] }
  },
  {
    id: 11, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "明天也要上班", media: "海外剧", hall: "main", status: "热播中",
    genre: ["职场喜剧"], hot: 70, rating: null,
    cast: "成励、朴智贤、康美娜、崔京勋", director: null,
    ipFrom: null,
    release: "tvN月火剧 6月22日首播", platform: "tvN",
    summary: "职场社畜的日常写照，治愈系职场剧。",
    risk: { level: "低风险", tags: ["无同性恋情节·低风险", "无血腥暴力·低风险"] }
  },
  {
    id: 12, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "金特务：本色回归", media: "海外剧", hall: "main", status: "今日首发", today: true,
    genre: ["动作", "谍战"], hot: 73, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "SBS金土剧 6月26日首播（今天！）", platform: "SBS",
    summary: "动作谍战，今日首播。",
    risk: { level: "中风险", tags: ["无同性恋情节·低风险", "动作谍战有部分战斗场面·中风险"] }
  },
  {
    id: 13, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "末行手记", media: "海外剧", hall: "main", status: "今日首发", today: true,
    genre: ["剧情"], hot: 66, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "6月26日上线（今天！）", platform: "Netflix",
    summary: "Netflix最新剧情剧，今日上线。",
    risk: { level: "中风险", tags: ["可能涉及敏感情节·中风险", "视具体内容待定·中风险"] }
  },
  {
    id: 14, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "龙之家族 第三季", media: "海外剧", hall: "main", status: "热播中",
    genre: ["奇幻史诗"], hot: 99, rating: null, mark: "House of the Dragon S3",
    cast: "马特·史密斯、艾玛·达西、奥利维亚·库克", director: null,
    ipFrom: "乔治·R·R·马丁《血与火》",
    release: "HBO Max 6月21日开播，共8集", platform: "HBO Max",
    summary: "血龙狂舞全面爆发！筹备四年的史诗海战「喉道之战」在本季呈现，被制片人称为「电视史上最大的一集」。雷妮拉、戴蒙正式发兵君临。",
    hotDetail: "烂番茄新鲜度100%，IGN 10分满分评价",
    guide: "B站大量UP主在做《龙之家族》系列解说，搜索「龙之家族S3」即可",
    risk: { level: "高风险", tags: ["无同性恋情节·低风险", "奇幻战争有大量血腥战争场面·高风险"] }
  },
  {
    id: 15, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "吸血鬼莱斯特 第三季", media: "海外剧", hall: "main", status: "上映中",
    genre: ["奇幻", "恐怖", "摇滚"], hot: 75, rating: null, mark: "夜访吸血鬼S3",
    cast: "萨姆·里德", director: null,
    ipFrom: null,
    release: "AMC+ 6月7日上线", platform: "AMC+",
    summary: "莱斯特开启时代摇滚巡演，同时被来自叛逆过去的「绑斯」纠缠。吸血鬼人口非自然激增的「大转化」背景下，各方势力角逐。",
    risk: { level: "高风险", tags: ["涉及LGBTQ+角色与情节·高风险", "吸血鬼题材有大量血腥场面·高风险"] }
  },
  {
    id: 16, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "恐怖角 新版", media: "海外剧", hall: "main", status: "上映中",
    genre: ["惊悚"], hot: 64, rating: null,
    cast: "哈维尔·巴登、艾米·亚当斯、帕特里克·威尔森", director: null,
    ipFrom: "经典惊悚IP重启新版",
    release: "—", platform: "—",
    summary: "经典惊悚IP重启新版，备受期待。",
    risk: { level: "中风险", tags: ["无同性恋情节·低风险", "惊悚有心理惊悚恐怖元素·中风险"] }
  },

  // ============ 三、院线电影 ============
  {
    id: 17, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "宇宙巨人：希曼崛起", media: "院线电影", hall: "main", status: "热映中",
    genre: ["奇幻", "动作", "冒险"], hot: 82, rating: null,
    cast: "尼古拉斯·盖兰《大黄蜂》", director: "特拉维斯·奈特",
    ipFrom: null,
    release: "6月5日 热映中", platform: "全国各影院热映中",
    summary: "异星王子亚当回到埃坦尼亚星球，喊出「赐予我力量吧」变身希曼，对抗骷髅王捍卫家园。投资2亿美元，但房房表现不及预期。",
    guide: "全国影院热映中 | 预告片",
    risk: { level: "低风险", tags: ["无同性恋情节·低风险", "奇幻战斗场面无过度血腥·低风险"] }
  },
  {
    id: 18, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "诺曼底72小时", media: "院线电影", hall: "main", status: "热映中",
    genre: ["战争", "剧情"], hot: 70, rating: null,
    cast: "安德鲁·斯科特、布兰登·肖恩", director: null,
    ipFrom: null,
    release: "6月5日", platform: "全国各影院",
    summary: "二战题材战争剧情。",
    risk: { level: "高风险", tags: ["无同性恋情节·低风险", "战争片有大规模战斗场面·高风险"] }
  },
  {
    id: 19, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "冒险小子奇遇记", media: "院线电影", hall: "main", status: "热映中",
    genre: ["儿童动画"], hot: 55, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "6月1日", platform: "全国各影院",
    summary: "儿童动画冒险。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 20, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "钟馗", media: "院线电影", hall: "main", status: "热映中",
    genre: ["奇幻", "动作"], hot: 68, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "6月上映", platform: "全国各影院",
    summary: "守护人妖两界的钟馗与人河少女初九联手对抗邪恶的地府冒险故事。",
    risk: { level: "低风险", tags: ["低风险", "奇幻有部分战斗画面·低风险"] }
  },
  {
    id: 21, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "热血足球少年·英雄初升", media: "院线电影", hall: "chase", status: "即将上映",
    genre: ["体育竞技", "动画电影"], hot: 60, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "6月27日（明天！）", platform: "全国影院明日上映",
    summary: "紧抓2026美加墨世界杯热潮，讲述少年足球战队直面仿AI足球「天才」、逆袭登顶的燃爽故事。暑期档体育动画第一炮。",
    guide: "全国影院明日上映 | 预告片",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },

  // ============ 四、国漫/动漫/动画番剧 ============
  {
    id: 22, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "光阴之外 第一季", media: "国漫番剧", hall: "chase", status: "第二季年番上线",
    genre: ["废土修仙", "国漫"], hot: 78, rating: null,
    cast: null, director: null,
    ipFrom: "起点白金作家耳根同名小说",
    release: "第一季6月13日完结（26集），第二季6月21日无缝衔接开播，升级为52集年番", platform: "优酷独播",
    summary: "少年许青在末世废土求存，融合中式修仙与克苏鲁元素。第二季以多视角展开雷立大陆世界版图与权力结构。",
    hotDetail: "第二季开播前预约突破300万",
    guide: "优酷《光阴之外》",
    risk: { level: "低风险", tags: ["低风险", "打斗场面有轻量暴力·低风险"] }
  },
  {
    id: 23, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "神墓", media: "国漫番剧", hall: "chase", status: "热播中",
    genre: ["玄幻", "国漫"], hot: 75, rating: null,
    cast: null, director: null,
    ipFrom: "辰东同名经典小说",
    release: "年番持续更新中", platform: "优酷",
    summary: "玄幻斗斗场面有轻量暴力，年番持续更新中。",
    guide: "优酷搜索《神墓》",
    risk: { level: "低风险", tags: ["低风险", "玄幻斗斗场面有轻量暴力·低风险"] }
  },
  {
    id: 24, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "死神 千年血战篇 - 祸进谭 -", media: "国漫番剧", hall: "chase", status: "即将开播",
    genre: ["日本动画", "热血战斗"], hot: 80, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "2026年7月即将开播", platform: "日本电视台/国内B站等",
    summary: "千年血战篇最终决战关键篇章，衔接「诀别谭」，灵王宫大战即将展开。",
    guide: "B站搜索《死神 千年血战篇》",
    risk: { level: "高风险", tags: ["低风险", "热血战斗番有大量战斗与流血场面·高风险"] }
  },

  // ============ 五、短剧/漫剧 ============
  {
    id: 25, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "撕夜", media: "短剧漫剧", hall: "classic", status: "热播中",
    genre: ["重生复仇"], hot: 76, rating: null,
    cast: "袁雨涵、姚冠宇", director: null,
    ipFrom: null, keywords: "重生复仇、双强联手",
    release: "—", platform: "抖音话题榜",
    summary: "江清正前世被亲人和男友合谋杀害，重生后借楚辰安权势复仇。「以命护爱」情节出彩。",
    hotDetail: "预约量突破180万，B站预告播放量超300万，引发二次创作热潮。抖音话题榜霸榜72小时。",
    risk: { level: "中风险", tags: ["低风险", "复仇题材有轻量暴力情节·中风险"] }
  },
  {
    id: 26, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "驯养", media: "短剧漫剧", hall: "classic", status: "热播中",
    genre: ["先婚后爱", "追妻火葬场"], hot: 72, rating: null,
    cast: "王奕然、兰岚", director: null,
    ipFrom: "改编自同名小说", keywords: "改编自同名小说、金丝雀文学、追妻火葬场",
    release: "—", platform: "—",
    summary: "被金丝雀委曲求全的女主，全程隐忍不强求自变，最终成长为「当代独立女性成长教科书」，姜含从委曲求全到自立自强的蜕变。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 27, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "凤刃", media: "短剧漫剧", hall: "classic", status: "已完结",
    genre: ["复仇", "虐恋", "女频"], hot: 70, rating: 8.7,
    cast: "余茵、张洪鸣", director: null,
    ipFrom: null,
    release: "—", platform: "爱奇艺末央工作室（61集全）",
    summary: "被人毒死的侯府真千金重生回到侯府接亲前夜，带着前世记忆与杀戮狠绝，逆天改命，让仇人血债血偿。",
    guide: "爱奇艺短剧频道",
    risk: { level: "中风险", tags: ["低风险", "复仇题材有部分暴力·中风险"] }
  },
  {
    id: 28, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "蔷薇花谢即归来", media: "短剧漫剧", hall: "classic", status: "热播中",
    genre: ["先婚后爱"], hot: 60, rating: null,
    cast: "岳雨婷、陈添祥", director: null,
    ipFrom: null,
    release: "—", platform: "—",
    summary: "先婚后爱情感短剧。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },

  // ============ 六、短剧新上汇总（6月下旬） ============
  {
    id: 29, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "我在风花雪月里等你", media: "短剧漫剧", hall: "classic", status: "新上",
    genre: ["甜宠", "短剧"], hot: 50, rating: null,
    cast: "白方文×朱芝芝", director: null,
    ipFrom: null,
    release: "6月11日", platform: "短剧平台",
    summary: "6月下旬短剧新上汇总剧目之一。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 30, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "可爱入侵", media: "短剧漫剧", hall: "classic", status: "新上",
    genre: ["甜宠", "短剧"], hot: 50, rating: null,
    cast: "邵巍×威羽佳", director: null,
    ipFrom: null,
    release: "6月11日", platform: "短剧平台",
    summary: "6月下旬短剧新上汇总剧目之一。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 31, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "当离婚律师想离婚第二季", media: "短剧漫剧", hall: "classic", status: "新上",
    genre: ["都市情感", "短剧"], hot: 52, rating: null,
    cast: "常陆微×李若琪", director: null,
    ipFrom: null,
    release: "6月25日", platform: "短剧平台",
    summary: "6月下旬短剧新上汇总剧目之一。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  }
];

// 上映节奏速览（总表）
const TIMELINE = [
  { date: "6月1日", title: "边缘医生", type: "韩剧", platform: "ENA" },
  { date: "6月1日", title: "冒险小子奇遇记", type: "动画电影", platform: "院线" },
  { date: "6月5日", title: "铁拳教育", type: "韩剧", platform: "Netflix", hot: true },
  { date: "6月5日", title: "宇宙巨人：希曼崛起", type: "电影", platform: "院线" },
  { date: "6月5日", title: "极限造生", type: "喜剧电影", platform: "院线" },
  { date: "6月7日", title: "迷墙", type: "国产剧", platform: "爱奇艺" },
  { date: "6月7日", title: "吸血鬼莱斯特S3", type: "美剧", platform: "AMC+" },
  { date: "6月9日", title: "莫离", type: "国产剧", platform: "腾讯" },
  { date: "6月10日", title: "多部短剧上新", type: "短剧", platform: "短剧平台" },
  { date: "6月12日", title: "南部档案", type: "国产剧", platform: "爱奇艺", hot: true },
  { date: "6月17日", title: "爱情有烟火", type: "国产剧", platform: "腾讯" },
  { date: "6月17日", title: "问心2", type: "国产剧", platform: "爱奇艺+央视" },
  { date: "6月21日", title: "龙之家族S3", type: "美剧", platform: "HBO Max", hot: true },
  { date: "6月21日", title: "光阴之外 第二季", type: "国漫", platform: "优酷" },
  { date: "6月22日", title: "明天也要上班", type: "韩剧", platform: "tvN" },
  { date: "6月24日", title: "昨夜将至", type: "国产剧", platform: "爱奇艺迷雾" },
  { date: "6月26日 (今天)", title: "云秀行", type: "国产剧", platform: "爱奇艺+优酷", today: true },
  { date: "6月26日 (今天)", title: "江云镇谜案", type: "国产剧", platform: "爱奇艺", today: true },
  { date: "6月26日 (今天)", title: "金特务/末行手记", type: "韩剧", platform: "SBS/Netflix", today: true },
  { date: "6月27日 (明天)", title: "热血足球少年", type: "动画电影", platform: "院线", soon: true },
  { date: "7月", title: "死神 千年血战篇", type: "日本动画", platform: "即将开播", soon: true },
  { date: "7月", title: "正相反的你和我 第二季", type: "日本动画", platform: "即将开播", soon: true }
];

// 下周值得关注
const SPOTLIGHT = [
  "6月27日《热血足球少年·英雄初升》院线上映，世界杯年足球题材动画电影值得关注",
  "《云秀行》今天刚开播，关注后续口碑发酵和云合数据走势",
  "《南部档案》与《莫离》的榜首之争继续",
  "《龙之家族S3》口碑炸裂，关注后续剧集表现",
  "《铁拳教育》全球爆红，B站二创持续发酵",
  "7月新番季即将来临，死神千年血战篇最终章等重磅日番即将上线"
];
