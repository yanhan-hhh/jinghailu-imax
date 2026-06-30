// 经海路 iMax 影厅 — 剧目数据
// 数据来源：《影视综·短剧·漫剧IP信息与上映节奏报告（2026年06月26日）》
// 厅别 hall：main=正片厅(热播/上映中) / chase=追更厅(连载中·即将开播) / classic=经典厅(已完结回看·短剧漫剧)
// 媒介 media：国产剧 / 海外剧 / 院线电影 / 国漫番剧 / 短剧漫剧
// status：热播中 / 上映中 / 连载中 / 即将开播 / 已完结 / 新剧首播

// 最新报告日期（每日更新时改这里。用作归档/NEW 判断的数据基准）
const REPORT_DATE = "2026-06-29";

const MOVIES = [
  // ============ 一、国内剧集 ============
  {
    id: 1, firstSeen:"2026-06-26", lastSeen:"2026-06-29", title: "南部档案", media: "国产剧", hall: "main", status: "热播中",
    genre: ["民国奇幻", "悬疑探案"], hot: 92, rating: null,
    cast: "张新成、丁禹兮、姜珮瑶", director: null,
    ipFrom: "南派三叔《盗墓笔记》正统前传",
    release: "6月11日开播，6月23日提前点映大结局", platform: "爱奇艺",
    summary: "1916年南洋，围绕「水鬼乡」离奇命案展开。张新成饰张海盐（张家南部档案馆掌门人）、丁禹兮饰南怀舒（南洋第一白月光，绝技《南斗一刀》）。所有线索指向一桩凭空消失的案件「南安号」，涉及军阀生化阴谋与张家血脉秘密。6月最强悬疑IP，预约量破250万，登顶云合榜。",
    guide: "B站多位UP主已产出大量解说视频，搜索「南部档案」即可找到",
    risk: { level: "中风险", tags: ["无同性恋情节·低风险", "悬疑凶杀场面有血腥成分·中风险"] }
  },
  {
    id: 2, firstSeen:"2026-06-26", lastSeen:"2026-06-29", title: "莫离", media: "国产剧", hall: "main", status: "热播中",
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
    id: 4, firstSeen:"2026-06-26", lastSeen:"2026-06-29", title: "爱情有烟火", media: "国产剧", hall: "main", status: "热播中",
    genre: ["都市", "轻喜爱情"], hot: 78, rating: null,
    cast: "檀健次、王皓然、李乃文、张昊唯、姜珮瑶", director: null,
    ipFrom: null,
    release: "6月17日上线", platform: "腾讯视频",
    summary: "都市男女的轻松爱情喜剧，云合数据9.7排名第四，口碑稳步上升。",
    guide: "腾讯视频搜索《爱情有烟火》",
    risk: { level: "低风险", tags: ["无同性恋情节·低风险", "无血腥暴力·低风险"] }
  },
  {
    id: 5, firstSeen:"2026-06-26", lastSeen:"2026-06-29", title: "问心2", media: "国产剧", hall: "main", status: "热播中",
    genre: ["剧情", "医疗"], hot: 80, rating: null,
    cast: "赵又廷、毛晓彤、金世佳、张佳宁、陈冲", director: null,
    ipFrom: null,
    release: "6月17日央视+爱奇艺同步播出", platform: "爱奇艺",
    summary: "两年后，周筱风援救到来与林逸，方筱然会合，周筱风被破格提拔为心内科执行主任。面临新的现实冲突，无奈与温暖共生。",
    guide: "爱奇艺《问心2》",
    risk: { level: "低风险", tags: ["无同性恋情节·低风险", "无血腥暴力·低风险"] }
  },
  {
    id: 6, firstSeen:"2026-06-26", lastSeen:"2026-06-29", title: "云秀行", media: "国产剧", hall: "main", status: "新剧首播", today: true,
    genre: ["古装", "喜剧", "爱情"], hot: 85, rating: null,
    cast: "李一桐、曾舜晞、邓为、代露娃、王以纶", director: null,
    ipFrom: null,
    release: "6月26日首播", platform: "爱奇艺·优酷联播",
    summary: "古装喜剧爱情。在传说中的九城，名门望小范云远和白切黑城主彼此试探、相互信任，一路披荆斩棘携手民保科。阵容顶配但豆瓣云合仅3.3%遇冷。",
    guide: "优酷《云秀行》",
    risk: { level: "低风险", tags: ["无同性恋情节·低风险", "无血腥暴力·低风险"] }
  },
  {
    id: 7, firstSeen:"2026-06-26", lastSeen:"2026-06-29", title: "昨夜将至", media: "国产剧", hall: "main", status: "上映中",
    genre: ["悬疑"], hot: 72, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "6月24日上线（迷雾剧场）", platform: "爱奇艺迷雾剧场",
    summary: "爱奇艺迷雾剧场6月最新新作，接档《南部档案》之后上线。",
    guide: "爱奇艺搜索《昨夜将至》",
    risk: { level: "中风险", tags: ["无同性恋情节·低风险", "悬疑题材可能有惊悚元素·中风险"] }
  },
  {
    id: 8, firstSeen:"2026-06-26", lastSeen:"2026-06-29", title: "江云镇谜案", media: "国产剧", hall: "main", status: "新剧首播", today: true,
    genre: ["民国探案"], hot: 68, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "6月26日定档", platform: "爱奇艺",
    summary: "民国探案新剧，与《云秀行》同日上线，正面竞争。",
    guide: "爱奇艺搜索《江云镇谜案》",
    risk: { level: "中风险", tags: ["无同性恋情节·低风险", "探案题材有轻量凶杀元素·中风险"] }
  },

  // ============ 二、海外剧集 ============
  {
    id: 9, firstSeen:"2026-06-26", lastSeen:"2026-06-29", title: "铁拳教育", media: "海外剧", hall: "main", status: "全球爆款",
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
    id: 12, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "金特务：本色回归", media: "海外剧", hall: "main", status: "新剧首播", today: true,
    genre: ["动作", "谍战"], hot: 73, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "SBS金土剧 6月26日首播", platform: "SBS",
    summary: "动作谍战，SBS金土剧。",
    risk: { level: "中风险", tags: ["无同性恋情节·低风险", "动作谍战有部分战斗场面·中风险"] }
  },
  {
    id: 13, firstSeen:"2026-06-26", lastSeen:"2026-06-26", title: "末行手记", media: "海外剧", hall: "main", status: "新剧首播", today: true,
    genre: ["剧情"], hot: 66, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "6月26日上线", platform: "Netflix",
    summary: "Netflix最新剧情剧。",
    risk: { level: "中风险", tags: ["可能涉及敏感情节·中风险", "视具体内容待定·中风险"] }
  },
  {
    id: 14, firstSeen:"2026-06-26", lastSeen:"2026-06-29", title: "龙之家族 第三季", media: "海外剧", hall: "main", status: "热播中",
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
    id: 21, firstSeen:"2026-06-26", lastSeen:"2026-06-29", title: "热血足球少年·英雄初升", media: "院线电影", hall: "chase", status: "即将上映",
    genre: ["体育竞技", "动画电影"], hot: 60, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "6月27日上映", platform: "全国影院",
    summary: "紧抓2026美加墨世界杯热潮，讲述少年足球战队直面仿AI足球「天才」、逆袭登顶的燃爽故事。暑期档体育动画第一炮。",
    guide: "全国影院上映 | 预告片",
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
  },

  // ======================================================================
  // ===== 历史回溯：2026 上半年（1.1–6.25）影视综报告 =====
  // 来源《影视综·短剧·漫剧IP信息与上映节奏报告（2026.01.01-06.26）》
  // 均为上半年已播/已映剧目，lastSeen 设为各自档期 → 自动归入经典厅·已归档
  // ======================================================================

  // ---- 国产剧·年度爆款梯队（评分8.0+）----
  {
    id: 32, firstSeen:"2026-01-23", lastSeen:"2026-02-28", title: "太平年", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["古装", "历史正剧"], hot: 95, rating: 8.5,
    cast: "白宇、周雨彤、朱亚文、俞灏明、董勇", director: null,
    ipFrom: null,
    release: "1月23日首播", platform: "央视一套+爱奇艺+芒果TV+腾讯视频",
    summary: "聚焦五代末北宋初年，「修士归来」的历史风云，历经十年筹划、五年打捞，用8K超高清技术拍摄，呈现历史人物超230位。白宇饰钱弘升、朱亚文饰赵匡胤、俞灏明饰郭荣，三人在国家板荡中命运纠葛。2026上半年最高分国产剧。",
    hotDetail: "豆瓣8.4-8.5，约40集，2026上半年最高分国产剧",
    risk: { level: "中风险", tags: ["低风险", "战争场面有冷兵器战斗·中风险"] }
  },
  {
    id: 33, firstSeen:"2026-01-30", lastSeen:"2026-03-15", title: "生命树", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["环保", "悬疑", "现实题材"], hot: 88, rating: 8.3,
    cast: "杨蓉、胡歌、李光洁", director: null,
    ipFrom: null,
    release: "1月30日首播", platform: "央视一套+爱奇艺",
    summary: "在青海海拔4800米的雪域高原实景拍摄188天，讲述女警加入巡山队，与副县长冬未然共同打击盗猎团伙的故事。几乎每一集都在真境拍摄，人物鲜活、制作精良。",
    risk: { level: "中风险", tags: ["有盗猎、暴力场景·中风险", "低风险"] }
  },
  {
    id: 34, firstSeen:"2026-03-01", lastSeen:"2026-04-10", title: "危险关系", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["都市", "悬疑", "婚姻心理"], hot: 82, rating: 7.9,
    cast: "孙俪、吴肇仁、王戈", director: null,
    ipFrom: null,
    release: "3月上线", platform: "爱奇艺",
    summary: "聚焦「以爱为名」的精神操控（PUA），将互联网热词还原为真实可见的婚姻噩梦。吴肇仁饰演的罗姓男主被称为「近年国产剧最令人毛骨悚然的变态」，表面儒雅实则PUA教父。",
    risk: { level: "低风险", tags: ["低风险", "心理惊悚·低风险"] }
  },
  {
    id: 35, firstSeen:"2026-02-01", lastSeen:"2026-03-20", title: "低智商犯罪", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["犯罪", "喜剧", "悬疑"], hot: 80, rating: 8.1,
    cast: "王骁、田曦薇、王传君", director: null,
    ipFrom: null,
    release: "2月上线", platform: "爱奇艺",
    summary: "犯罪喜剧悬疑，一群「低智商」罪犯阴差阳错搅入大案的荒诞故事。",
    risk: { level: "中风险", tags: ["低风险", "犯罪题材有轻量暴力·中风险"] }
  },
  {
    id: 36, firstSeen:"2026-01-15", lastSeen:"2026-03-01", title: "主角", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["年代", "戏脉人生"], hot: 84, rating: 7.9,
    cast: "刘浩存、秦海璐", director: "张艺谋",
    ipFrom: "陈彦同名茅盾文学奖小说",
    release: "上线", platform: "腾讯视频",
    summary: "改编自陈彦茅奖小说，讲述秦腔名伶忆秦娥跌宕起伏的一生。张艺谋监制。",
    hotDetail: "豆瓣7.9-8.0",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },

  // ---- 国产剧·热搜热播大剧 ----
  {
    id: 37, firstSeen:"2026-02-15", lastSeen:"2026-04-01", title: "家业", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["古装", "女性创业", "非遗文化"], hot: 78, rating: 7.3,
    cast: "杨紫、韩东君", director: null,
    ipFrom: null,
    release: "上线", platform: "爱奇艺",
    summary: "聚焦「微雕」非遗文化，讲述李家小女夺嫡家族重创后，凭借制墨天赋再造辉煌的传奇故事。服化道精良，徽派建筑与制墨工艺呈现极具文化质感。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 38, firstSeen:"2026-03-06", lastSeen:"2026-04-15", title: "逐玉", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["古装", "爱情", "励志"], hot: 80, rating: null,
    cast: "李兰迪、田嘉瑞", director: null,
    ipFrom: null,
    release: "3月6日首播", platform: "爱奇艺+腾讯视频+东方卫视",
    summary: "屠户女樊长玉与落魄侯爷谢征风雪中宿命相遇，假婚真爱。开播第7天单日播放量破亿，全网播放量顺利突破6亿。",
    hotDetail: "开播第三次破亿，全网播放量破6亿",
    risk: { level: "低风险", tags: ["低风险", "古装战斗有轻量暴力·低风险"] }
  },
  {
    id: 39, firstSeen:"2026-02-23", lastSeen:"2026-04-05", title: "除恶", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["缉毒", "刑侦"], hot: 79, rating: 7.3,
    cast: "佟若汐、王骁、蔡文静、李泽锋", director: null,
    ipFrom: null,
    release: "2月23日首播（迷雾剧场）", platform: "爱奇艺迷雾剧场",
    summary: "迷雾剧场2026开年力作，一袋失踪的新型毒品揭开海滨小镇平静表象下的暗流。16集短小精悍。",
    risk: { level: "中风险", tags: ["缉毒题材有暴力场面·中风险", "低风险"] }
  },
  {
    id: 40, firstSeen:"2026-01-10", lastSeen:"2026-02-25", title: "小城大事", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["年代", "基建题材"], hot: 75, rating: null,
    cast: "赵丽颖、黄晓明", director: null,
    ipFrom: null,
    release: "1月10日首播", platform: "央视一套+腾讯视频",
    summary: "1:1复刻80年代「月海镇」，讲述特区发展故事。赵丽颖黄晓明首次搭档年代剧。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 41, firstSeen:"2026-01-27", lastSeen:"2026-03-10", title: "骄阳似我", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["都市", "职场", "爱情"], hot: 74, rating: null,
    cast: "宋威龙、赵今麦", director: null,
    ipFrom: "顾漫小说改编",
    release: "1月27日首播", platform: "浙江卫视",
    summary: "顾漫小说改编，上线11天登顶猫眼热度周榜榜首。都市职场爱情。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 42, firstSeen:"2026-01-09", lastSeen:"2026-02-20", title: "轧戏", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["都市", "言情"], hot: 68, rating: null,
    cast: "陈星旭、卢昱晓", director: null,
    ipFrom: null,
    release: "1月9日首播", platform: "东方卫视",
    summary: "都市言情剧。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 43, firstSeen:"2026-01-29", lastSeen:"2026-03-05", title: "有罪", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["犯罪", "悬疑"], hot: 70, rating: null,
    cast: "魏大勋、孙千、王龙正、高至霆、王真儿", director: null,
    ipFrom: null,
    release: "1月29日", platform: "爱奇艺",
    summary: "一名老刑警、三位负罪而行的大学生、一个煤矿老板，因一宗命案在十八年后被搅到一起。跨越十八年的调查，将一桩案子背后隐藏的人性秘密揭开。",
    risk: { level: "中风险", tags: ["犯罪题材有暴力凶杀·中风险", "低风险"] }
  },
  {
    id: 44, firstSeen:"2026-01-01", lastSeen:"2026-02-10", title: "长河落日", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["谍战"], hot: 72, rating: null,
    cast: "张鲁一", director: null,
    ipFrom: null,
    release: "1月1日首播", platform: "央视/卫视",
    summary: "谍战剧，2026开年大剧。",
    risk: { level: "中风险", tags: ["谍战有枪战场面·中风险", "低风险"] }
  },
  {
    id: 45, firstSeen:"2026-01-05", lastSeen:"2026-02-15", title: "冬至", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["刑侦"], hot: 70, rating: null,
    cast: "黄景瑜", director: null,
    ipFrom: null,
    release: "1月5日首播", platform: "卫视/网络",
    summary: "刑侦悬疑剧。",
    risk: { level: "中风险", tags: ["刑侦题材有凶案场面·中风险", "低风险"] }
  },
  {
    id: 46, firstSeen:"2026-01-05", lastSeen:"2026-01-25", title: "奇迹", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["精品短剧集"], hot: 66, rating: null,
    cast: "胡歌等", director: null,
    ipFrom: null,
    release: "1月5日首播", platform: "网络",
    summary: "精品短剧集，胡歌主演。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 47, firstSeen:"2026-01-26", lastSeen:"2026-03-01", title: "女神蒙上眼", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["律政"], hot: 68, rating: null,
    cast: "辛芷蕾", director: null,
    ipFrom: null,
    release: "1月26日首播", platform: "网络",
    summary: "律政题材剧，辛芷蕾主演。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 48, firstSeen:"2026-01-29", lastSeen:"2026-03-01", title: "夜色正浓", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["商战"], hot: 67, rating: null,
    cast: "江疏影", director: null,
    ipFrom: null,
    release: "1月29日首播", platform: "网络",
    summary: "商战题材剧，江疏影主演。",
    risk: { level: "中风险", tags: ["商战有冲突场面·中风险", "低风险"] }
  },

  // ---- 古装/仙侠/武侠 上新课 ----
  {
    id: 49, firstSeen:"2026-04-01", lastSeen:"2026-06-06", title: "雨霖铃", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["古装", "武侠"], hot: 72, rating: 7.0,
    cast: "杨洋、章若楠、方逸伦", director: "侯鸿亮",
    ipFrom: null,
    release: "4月-6月6日收官", platform: "CCTV-8+优酷",
    summary: "正午阳光出品，侯鸿亮制片。重塑中式侠义新内核，被赞为「中式美学武侠标杆」。",
    risk: { level: "低风险", tags: ["武侠打斗有暴力·低风险", "低风险"] }
  },
  {
    id: 50, firstSeen:"2026-04-01", lastSeen:"2026-05-15", title: "成何体统", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["古装", "喜剧"], hot: 70, rating: 7.2,
    cast: "王楚然、丞磊", director: null,
    ipFrom: null,
    release: "4月上线", platform: "网络",
    summary: "古装喜剧。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 51, firstSeen:"2026-04-01", lastSeen:"2026-05-20", title: "佳偶天成", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["古装", "奇幻", "爱情"], hot: 71, rating: null,
    cast: "任嘉伦、王鹤润", director: null,
    ipFrom: null,
    release: "4月上线", platform: "网络",
    summary: "身负「五不全」诅咒的战鬼陆千乔需换皮换肉换骨换心，与修仙者辛湄结为夫妻。古装奇幻爱情。",
    risk: { level: "低风险", tags: ["奇幻战斗有轻量暴力·低风险", "低风险"] }
  },
  {
    id: 52, firstSeen:"2026-04-01", lastSeen:"2026-05-10", title: "月鳞绮纪", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["古装", "奇幻"], hot: 69, rating: null,
    cast: "鞠婧祎、曾舜晞、陈都灵", director: null,
    ipFrom: null,
    release: "4月1日", platform: "网络",
    summary: "古装奇幻剧。",
    risk: { level: "中风险", tags: ["有男男女女CP暗示·中风险", "低风险"] }
  },
  {
    id: 53, firstSeen:"2026-03-28", lastSeen:"2026-05-10", title: "白日提灯", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["古装", "奇幻", "爱情"], hot: 70, rating: null,
    cast: "迪丽热巴等", director: null,
    ipFrom: null,
    release: "3月28日", platform: "网络",
    summary: "古装奇幻爱情剧。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 54, firstSeen:"2026-04-02", lastSeen:"2026-05-15", title: "惜花正", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["古装", "女性逆袭"], hot: 66, rating: null,
    cast: "张婧仪、胡一天", director: null,
    ipFrom: null,
    release: "4月2日首播", platform: "网络",
    summary: "古装女性逆袭剧。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 55, firstSeen:"2026-04-01", lastSeen:"2026-05-20", title: "八千里路风和云", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["年代"], hot: 65, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "4月上线", platform: "网络",
    summary: "年代剧。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 56, firstSeen:"2026-05-02", lastSeen:"2026-06-01", title: "一世狂枭", media: "国产剧", hall: "classic", status: "已完结",
    genre: ["古装", "网络剧"], hot: 60, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "5月2日", platform: "网络",
    summary: "古装网络短剧集。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },

  // ---- 海外剧·韩剧 ----
  {
    id: 57, firstSeen:"2026-01-16", lastSeen:"2026-03-01", title: "爱情怎么翻译", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["爱情", "喜剧"], hot: 75, rating: 8.3,
    cast: "金宣虎、高允贞、福士苍汰", director: null,
    ipFrom: null,
    release: "1月16日上线", platform: "Netflix",
    summary: "九尾狐变身人系的浪漫爱情喜剧。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 58, firstSeen:"2026-02-01", lastSeen:"2026-03-15", title: "夺命许愿", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["恐怖", "惊悚"], hot: 70, rating: 7.7,
    cast: "全昭民、姜美娜、白晋浩", director: null,
    ipFrom: null,
    release: "上线", platform: "Netflix",
    summary: "恐怖惊悚题材，8集短小精悍，全程剧情环环相扣、悬念重重。",
    risk: { level: "中风险", tags: ["恐怖题材有惊悚画面·中风险", "低风险"] }
  },
  {
    id: 59, firstSeen:"2026-01-15", lastSeen:"2026-03-01", title: "柔美的细胞小将 第三季", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["爱情", "动画真人"], hot: 68, rating: 8.7,
    cast: "金高银、金载原等", director: null,
    ipFrom: null,
    release: "上线", platform: "Netflix/Tving",
    summary: "高人气恋爱动画真人剧第三季。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 60, firstSeen:"2026-02-01", lastSeen:"2026-03-20", title: "卧底洪小姐", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["动作", "喜剧"], hot: 67, rating: 7.8,
    cast: "朴信惠、高庚杓", director: null,
    ipFrom: null,
    release: "上线", platform: "韩剧",
    summary: "卧底题材动作喜剧。",
    risk: { level: "中风险", tags: ["谍战有部分动作场面·中风险", "低风险"] }
  },
  {
    id: 61, firstSeen:"2026-02-01", lastSeen:"2026-03-15", title: "我的王室死对头", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["爱情", "宫廷"], hot: 66, rating: 7.8,
    cast: "林智妍等", director: null,
    ipFrom: null,
    release: "上线", platform: "韩剧",
    summary: "王室宫廷爱情剧。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 62, firstSeen:"2026-03-01", lastSeen:"2026-04-15", title: "21世纪大君夫人", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["穿越", "爱情"], hot: 70, rating: null,
    cast: "IU（李知恩）、边佑锡、鲁尚炫", director: null,
    ipFrom: null,
    release: "上线", platform: "韩剧",
    summary: "21世纪立志成为背景的财阀女性与王之子身份逆转罗曼史。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },

  // ---- 海外剧·美剧 ----
  {
    id: 63, firstSeen:"2026-01-18", lastSeen:"2026-03-01", title: "七王国的骑士", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["奇幻史诗"], hot: 80, rating: null,
    cast: null, director: null,
    ipFrom: "乔治·R·R·马丁《权游》衍生",
    release: "1月18日开播", platform: "HBO Max",
    summary: "《权游》一部前传，更像「武侠公路片」，没有龙和魔法的狂轰滥炸，更纯粹的骑士精神。",
    risk: { level: "中风险", tags: ["冷兵器战斗场面·中风险", "低风险"] }
  },
  {
    id: 64, firstSeen:"2026-01-08", lastSeen:"2026-02-20", title: "梦魇绝镇 第四季", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["恐怖", "惊悚"], hot: 68, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "上线", platform: "美剧",
    summary: "恐怖惊悚剧第四季。",
    risk: { level: "高风险", tags: ["恐怖惊悚·高风险", "低风险"] }
  },
  {
    id: 65, firstSeen:"2026-01-01", lastSeen:"2026-02-15", title: "辐射 第二季", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["废土", "科幻"], hot: 78, rating: null,
    cast: null, director: null,
    ipFrom: "游戏《辐射》改编",
    release: "上线", platform: "Prime Video",
    summary: "人气游戏改编废土科幻剧第二季。",
    risk: { level: "高风险", tags: ["废土暴力·高风险", "低风险"] }
  },
  {
    id: 66, firstSeen:"2026-01-08", lastSeen:"2026-02-20", title: "匹兹堡医护前线 第二季", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["医疗"], hot: 66, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "1月8日", platform: "美剧",
    summary: "医疗题材剧第二季。",
    risk: { level: "低风险", tags: ["医疗场景·低风险", "低风险"] }
  },
  {
    id: 67, firstSeen:"2026-01-01", lastSeen:"2026-02-15", title: "暗影蜘蛛侠 第一季", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["超级英雄", "动画"], hot: 70, rating: null,
    cast: null, director: null,
    ipFrom: "漫威IP",
    release: "上线", platform: "Disney+",
    summary: "漫威蜘蛛侠衍生动画剧第一季。",
    risk: { level: "高风险", tags: ["动作场面·高风险", "低风险"] }
  },

  // ---- 日剧 ----
  {
    id: 68, firstSeen:"2026-01-01", lastSeen:"2026-03-01", title: "危险又甜蜜", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["爱情", "BL"], hot: 64, rating: null,
    cast: "和泉佳菟、元之介", director: null,
    ipFrom: null,
    release: "春季黑马", platform: "日剧",
    summary: "高甜带感的剧系浪漫日剧。",
    risk: { level: "中风险", tags: ["涉及BL元素·中风险", "低风险"] }
  },
  {
    id: 69, firstSeen:"2026-01-01", lastSeen:"2026-03-01", title: "伪装的真实之吻", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["爱情", "BL"], hot: 62, rating: null,
    cast: "鸣海登、佐藤友佑", director: null,
    ipFrom: "改编自日本超人气同名漫画",
    release: "上线", platform: "日剧",
    summary: "改编自超人气漫画，宿敌变恋人。",
    risk: { level: "中风险", tags: ["涉及BL元素·中风险", "低风险"] }
  },

  // ---- 院线电影·春节档及上半年 ----
  {
    id: 70, firstSeen:"2026-02-17", lastSeen:"2026-04-01", title: "封神第二部：战火西岐", media: "院线电影", hall: "classic", status: "已下映",
    genre: ["神话史诗"], hot: 96, rating: null,
    cast: null, director: "乌尔善",
    ipFrom: "封神宇宙",
    release: "2月17日大年初一", platform: "全国院线",
    summary: "春节档六部大片「神仙打架」，年度票房突破157亿元。封神宇宙第二部，战火西岐。",
    hotDetail: "春节档总票房157亿元，年度爆款",
    risk: { level: "中风险", tags: ["战争场面·中风险", "低风险"] }
  },
  {
    id: 71, firstSeen:"2026-02-17", lastSeen:"2026-04-01", title: "哪吒之魔童闹海", media: "院线电影", hall: "classic", status: "已下映",
    genre: ["动画"], hot: 99, rating: null,
    cast: null, director: null,
    ipFrom: "哪吒IP",
    release: "2月17日大年初一", platform: "光线传媒/全国院线",
    summary: "春节档动画爆款，哪吒IP续作。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 72, firstSeen:"2026-02-17", lastSeen:"2026-04-01", title: "飞驰人生3", media: "院线电影", hall: "classic", status: "已下映",
    genre: ["喜剧", "运动"], hot: 88, rating: null,
    cast: "韩寒、沈腾", director: "韩寒",
    ipFrom: "IP续作",
    release: "2月17日大年初一", platform: "全国院线",
    summary: "韩寒赛车喜剧IP续作。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 73, firstSeen:"2026-02-17", lastSeen:"2026-04-01", title: "唐探1900", media: "院线电影", hall: "classic", status: "已下映",
    genre: ["悬疑", "喜剧"], hot: 90, rating: null,
    cast: "陈思诚、王宝强、刘昊", director: "陈思诚",
    ipFrom: "唐探IP",
    release: "2月17日大年初一", platform: "全国院线",
    summary: "唐人街探案系列电影，1900年代背景悬疑喜剧。",
    risk: { level: "中风险", tags: ["悬疑凶案·中风险", "低风险"] }
  },
  {
    id: 74, firstSeen:"2026-02-17", lastSeen:"2026-04-01", title: "蛟龙行动", media: "院线电影", hall: "classic", status: "已下映",
    genre: ["军事动作"], hot: 82, rating: null,
    cast: null, director: "林超贤",
    ipFrom: "主旋律",
    release: "2月17日大年初一", platform: "全国院线",
    summary: "林超贤执导军事动作大片。",
    risk: { level: "中风险", tags: ["军事战斗场面·中风险", "低风险"] }
  },
  {
    id: 75, firstSeen:"2026-02-17", lastSeen:"2026-04-01", title: "射雕英雄传：侠之大者", media: "院线电影", hall: "classic", status: "已下映",
    genre: ["武侠"], hot: 80, rating: null,
    cast: "肖战、庄达菲", director: null,
    ipFrom: "金庸IP",
    release: "2月17日大年初一", platform: "全国院线",
    summary: "金庸武侠IP电影改编。",
    risk: { level: "中风险", tags: ["武侠打斗·中风险", "低风险"] }
  },
  {
    id: 76, firstSeen:"2026-01-01", lastSeen:"2026-02-10", title: "过家家", media: "院线电影", hall: "classic", status: "已下映",
    genre: ["家庭", "温情"], hot: 70, rating: null,
    cast: "成龙、彭昱畅、张佳宁", director: null,
    ipFrom: null,
    release: "1月1日元旦档", platform: "全国院线",
    summary: "元旦档家庭温情喜剧片。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 77, firstSeen:"2026-05-01", lastSeen:"2026-06-01", title: "消失的她们", media: "院线电影", hall: "classic", status: "已下映",
    genre: ["悬疑", "犯罪"], hot: 78, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "五一档", platform: "全国院线",
    summary: "五一档悬疑犯罪片，票房破亿。",
    risk: { level: "中风险", tags: ["悬疑犯罪·中风险", "低风险"] }
  },

  // ---- 国漫/番剧 ----
  {
    id: 78, firstSeen:"2026-01-01", lastSeen:"2026-06-25", title: "沧元图", media: "国漫番剧", hall: "classic", status: "制作中",
    genre: ["玄幻", "国漫"], hot: 75, rating: null,
    cast: null, director: null,
    ipFrom: "我吃西红柿同名小说",
    release: "第三季制作中，院线电影已立项（2026年4月）", platform: "优酷",
    summary: "我吃西红柿经典IP，第三季在制作中，院线电影已立项备案，真人影视化正式启动。",
    risk: { level: "中风险", tags: ["打斗场面·中风险", "低风险"] }
  },
  {
    id: 79, firstSeen:"2026-01-01", lastSeen:"2026-06-25", title: "剑来 第二季", media: "国漫番剧", hall: "classic", status: "连载中",
    genre: ["仙侠", "国漫"], hot: 76, rating: null,
    cast: null, director: null,
    ipFrom: "烽火戏诸侯IP",
    release: "持续更新中", platform: "国漫平台",
    summary: "烽火戏诸侯人气仙侠IP动画第二季，持续更新中。",
    risk: { level: "低风险", tags: ["打斗场面·低风险", "低风险"] }
  },
  {
    id: 80, firstSeen:"2026-06-01", lastSeen:"2026-06-25", title: "斩神之凡尘神域II", media: "国漫番剧", hall: "classic", status: "连载中",
    genre: ["热血", "国漫"], hot: 74, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "6月首播", platform: "国漫平台",
    summary: "热血国漫第二季，6月首播。",
    risk: { level: "中风险", tags: ["热血战斗·中风险", "低风险"] }
  },
  {
    id: 81, firstSeen:"2026-01-16", lastSeen:"2026-06-25", title: "葬送的芙莉莲 第二季", media: "国漫番剧", hall: "classic", status: "连载中",
    genre: ["日本动画", "奇幻"], hot: 90, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "1月16日开播（黄金光番）", platform: "B站等",
    summary: "高人气奇幻番剧第二季，1月黄金档开播。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 82, firstSeen:"2026-06-01", lastSeen:"2026-06-25", title: "咒术回战 第三季", media: "国漫番剧", hall: "classic", status: "制作中",
    genre: ["日本动画", "热血战斗"], hot: 88, rating: null,
    cast: null, director: null,
    ipFrom: null,
    release: "制作中", platform: "B站等",
    summary: "人气热血战斗番第三季，制作中。",
    risk: { level: "高风险", tags: ["热血战斗有流血场面·高风险", "低风险"] }
  },

  // ---- 短剧/漫剧 ----
  {
    id: 83, firstSeen:"2026-03-01", lastSeen:"2026-05-01", title: "权宠4：权宠天下", media: "短剧漫剧", hall: "classic", status: "已完结",
    genre: ["古装", "权谋", "短剧"], hot: 70, rating: null,
    cast: "常喆宽×唐七七", director: null,
    ipFrom: null,
    release: "上线", platform: "短剧平台",
    summary: "上半年火爆短剧IP「权宠」系列第四部，古装权谋。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 84, firstSeen:"2026-06-03", lastSeen:"2026-06-25", title: "夫人她专治不服4", media: "短剧漫剧", hall: "classic", status: "已完结",
    genre: ["爽剧", "短剧"], hot: 65, rating: null,
    cast: "李若彤、王培廷", director: null,
    ipFrom: null,
    release: "6月3日上线", platform: "短剧平台",
    summary: "上半年火爆短剧IP「夫人她专治不服」系列第四部。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 85, firstSeen:"2026-01-01", lastSeen:"2026-05-01", title: "执手同谋不负卿", media: "短剧漫剧", hall: "classic", status: "已完结",
    genre: ["古装", "言情", "短剧"], hot: 58, rating: null,
    cast: "王培廷×姜十七", director: null,
    ipFrom: null,
    release: "上线", platform: "短剧平台",
    summary: "上半年其他热门短剧之一。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },
  {
    id: 86, firstSeen:"2026-01-01", lastSeen:"2026-05-01", title: "砚知山河意", media: "短剧漫剧", hall: "classic", status: "已完结",
    genre: ["古装", "言情", "短剧"], hot: 56, rating: null,
    cast: "李卓扬×陈羽翎", director: null,
    ipFrom: null,
    release: "上线", platform: "短剧平台",
    summary: "上半年其他热门短剧之一。",
    risk: { level: "低风险", tags: ["低风险", "低风险"] }
  },

  // ======================================================================
  // ===== 增量更新：2026.06.27 - 06.29 三日日报新增 =====
  // ======================================================================
  {
    id: 87, firstSeen:"2026-06-27", lastSeen:"2026-06-29", title: "俎楚", media: "国产剧", hall: "main", status: "热播中",
    genre: ["古装", "权谋", "复仇"], hot: 84, rating: null,
    cast: "陈都灵、周翊然、唐晓天、王瑞昌", director: null,
    ipFrom: "希行《楚后》小说改编",
    release: "6月2日开播", platform: "优酷+Netflix全球同步",
    summary: "将军之女楚朝重生后誓不沦为权力棋局中的牺牲品，主动执棋、步步为营。联手前夫陆谢燕求（周翊然饰）扶持皇孙登基，从权力的棋子逆袭为执掌朝堂的镇国长公主。三集完成「被杀—重生」全流程。Netflix全球同步，进入37国日榜Top10。",
    guide: "B站搜索《俎楚》解说",
    risk: { level: "中风险", tags: ["少量朝堂斗争/战场镜头·中风险", "偏权谋基调·低风险"] }
  },
  {
    id: 88, firstSeen:"2026-06-29", lastSeen:"2026-06-29", title: "灵魂摆渡·十年", media: "国产剧", hall: "main", status: "热播中",
    genre: ["奇幻", "悬疑"], hot: 80, rating: null,
    cast: "于毅、刘智扬、肖茵", director: null,
    ipFrom: "《灵魂摆渡》经典IP",
    release: "6月2日开播", platform: "爱奇艺",
    summary: "《铁三角》全员回归，《灵魂摆渡》十年之约再续。444号便利店营业至深夜，赵吏夙的经典组合即将再现。融合中国传统神怪文化与现代都市叙事。",
    guide: "B站搜索《灵魂摆渡 十年》",
    risk: { level: "中风险", tags: ["包含超自然/灵异恐怖元素·中风险", "有少量血腥/恐怖画面·中风险"] }
  },
  {
    id: 89, firstSeen:"2026-06-27", lastSeen:"2026-06-29", title: "酱园弄·悬案", media: "院线电影", hall: "main", status: "热映中",
    genre: ["民国", "犯罪", "悬疑"], hot: 86, rating: null,
    cast: "章子怡、王传君、易烊千玺、梅婷、赵丽颖、雷佳音、杨幂、大鹏、范伟等23位演员", director: "陈可辛",
    ipFrom: "改编自1945年真实民国奇案「酱园弄杀夫案」",
    release: "6月21日上映", platform: "全国院线",
    summary: "陈可辛执导全明星阵容民国犯罪大片。改编自1945年真实民国奇案「酱园弄杀夫案」，詹周氏（章子怡饰）不堪丈夫家暴、杀夫碎尸，分尸案掀起轩然大波。一部群像式民国奇案大片。",
    guide: "猫眼购票 | 全国院线热映",
    risk: { level: "高风险", tags: ["杀夫碎尸/分尸案件·高风险", "含暴力及死亡画面·高风险"] }
  },
  {
    id: 90, firstSeen:"2026-06-27", lastSeen:"2026-06-29", title: "黑袍纠察队 第四季", media: "海外剧", hall: "main", status: "热播中",
    genre: ["超级英雄", "反英雄", "暗黑"], hot: 82, rating: null,
    cast: "卡尔·厄本、安东尼·斯塔尔、艾林·莫里亚蒂", director: null,
    ipFrom: "同名漫画IP",
    release: "6月13日开播", platform: "Amazon Prime Video",
    summary: "世界濒临毁灭，祖国人挟持权势一步步迈进白宫，黑暗时代只剩几个月。反超级英雄暗黑神作第四季。",
    risk: { level: "高风险", tags: ["含LGBTQ+/角色元素·中风险", "极致血腥暴力、重口画面·高风险"] }
  },
  {
    id: 91, firstSeen:"2026-06-28", lastSeen:"2026-06-29", title: "信号2", media: "海外剧", hall: "main", status: "热播中",
    genre: ["悬疑", "犯罪", "穿越"], hot: 85, rating: null,
    cast: "金惠秀、赵震雄、李帝勋", director: null,
    ipFrom: "tvN十周年回归之作", mark: "Signal Season 2",
    release: "tvN播出，海外同步", platform: "tvN",
    summary: "时隔十年，作为tvN 20周年特别作品回归。用一支神秘对讲机连接过去与现在的悬疑犯罪剧。原班人马回归，韩国最强悬疑IP。",
    risk: { level: "中风险", tags: ["悬疑案件涉及血腥暴力、杀人场面·中风险", "低风险"] }
  },
  {
    id: 92, firstSeen:"2026-06-29", lastSeen:"2026-06-29", title: "韩国制造", media: "海外剧", hall: "chase", status: "即将开播",
    genre: ["年代", "政治", "双雄"], hot: 78, rating: null,
    cast: "玄彬、郑雨盛", director: null,
    ipFrom: null, mark: "Made in Korea",
    release: "预计2025-2026年上线", platform: "Disney+",
    summary: "讲述1970年代韩国动荡时期，对财富和权力抱有野心的男人与信念坚定的正义检察官之间正邪两派对决，贯穿韩国近代史变革。700亿韩元超高制作费。",
    risk: { level: "中风险", tags: ["含政治暴力/时代动荡/黑帮火并·中风险", "低风险"] }
  },
  {
    id: 93, firstSeen:"2026-06-27", lastSeen:"2026-06-29", title: "熊家餐馆 第五季", media: "海外剧", hall: "classic", status: "已完结",
    genre: ["剧情", "美食"], hot: 76, rating: null,
    cast: "杰瑞米·艾伦·怀特等", director: null,
    ipFrom: null,
    release: "6月26/27日上线", platform: "Disney+/Hulu",
    summary: "高人气美食剧最终季。后厨传奇的收官之作，卡米退出餐饮业团队被收购威胁，风暴来临前的最后服务。",
    risk: { level: "低风险", tags: ["剧情为主，无暴力内容·低风险", "低风险"] }
  },
  {
    id: 94, firstSeen:"2026-06-29", lastSeen:"2026-06-29", title: "攻壳机动队 新TV动画", media: "国漫番剧", hall: "chase", status: "即将开播",
    genre: ["日本动画", "科幻", "赛博朋克"], hot: 80, rating: null,
    cast: null, director: null,
    ipFrom: "士郎正宗原作",
    release: "2026年开播", platform: "Science SARU制作",
    summary: "士郎正宗经典赛博朋克IP全新TV动画，由Science SARU制作。",
    risk: { level: "中风险", tags: ["包含赛博朋克暴力/义体战斗·中风险", "政治暗杀场面·中风险"] }
  },
  {
    id: 95, firstSeen:"2026-06-29", lastSeen:"2026-06-29", title: "蜘蛛侠：崭新之日", media: "院线电影", hall: "chase", status: "即将上映",
    genre: ["超级英雄", "动作"], hot: 88, rating: null,
    cast: "汤姆·霍兰德、赞达亚", director: null,
    ipFrom: "漫威蜘蛛侠IP", mark: "Spider-Man: Brand New Day",
    release: "2026年7月31日北美上映", platform: "全球院线",
    summary: "汤姆·霍兰德回归，赞达亚饰演MJ。马克·鲁法洛（绿巨人）、惩罚者（乔·伯恩瑟）加盟。",
    guide: "B站蜘蛛侠4预告",
    risk: { level: "中风险", tags: ["超级英雄打斗场面/高楼坠落/爆炸·中风险", "PG-13级·低风险"] }
  },
  {
    id: 96, firstSeen:"2026-06-29", lastSeen:"2026-06-29", title: "镖人：风起大漠", media: "院线电影", hall: "classic", status: "已下映",
    genre: ["武侠", "动作", "国漫"], hot: 82, rating: null,
    cast: "吴京、谢霆锋、于适、李连杰（时隔14年重返大银幕）", director: "袁和平",
    ipFrom: "许先哲同名漫画《镖人》",
    release: "2026年2月17日上映", platform: "全国院线",
    summary: "改编自许先哲同名漫画《镖人》，大漠之上镖人、官府多方势力盘根错节。「天字第二号镖匠」刀马携手特殊押镖任务，从西域护镖远赴长安。隋末风云再起，国漫硬核武侠峰。",
    guide: "B站预告 | 1905",
    risk: { level: "高风险", tags: ["包含大量武侠打斗/冷兵器战斗/暴力场面·高风险", "硬核动作片·中风险"] }
  },
  {
    id: 97, firstSeen:"2026-06-29", lastSeen:"2026-06-29", title: "超级少女", media: "院线电影", hall: "main", status: "热映中",
    genre: ["超级英雄", "科幻"], hot: 78, rating: null,
    cast: "米莉·乔沃科克、杰森·莫玛（暴揍）", director: null,
    ipFrom: "DCU首部超人独立电影", mark: "Supergirl: Woman of Tomorrow",
    release: "6月26日上映", platform: "全球院线",
    summary: "DCU首部超人独立电影，全新宇宙开篇，不同于传统超人叙事。《龙之家族》杰森·莫玛参演。",
    risk: { level: "中风险", tags: ["超级英雄宇宙大战/星际战斗/爆破·中风险", "PG-13·低风险"] }
  },
  {
    id: 98, firstSeen:"2026-06-28", lastSeen:"2026-06-29", title: "朝思暮时", media: "短剧漫剧", hall: "main", status: "热播中",
    genre: ["真人短剧", "都市"], hot: 75, rating: null,
    cast: "锦子、王皓桢", director: null,
    ipFrom: null,
    release: "6月22日上线", platform: "抖音/快手等短剧平台",
    summary: "6月22日爆款真人短剧，首日热度8663万（红果双榜榜首），近期唯一打爆AI剧的真人短剧。",
    hotDetail: "首日热度8663万，红果双榜榜首",
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
  { date: "6月26日", title: "云秀行", type: "国产剧", platform: "爱奇艺+优酷", today: true },
  { date: "6月26日", title: "江云镇谜案", type: "国产剧", platform: "爱奇艺", today: true },
  { date: "6月26日", title: "金特务/末行手记", type: "韩剧", platform: "SBS/Netflix", today: true },
  { date: "6月27日", title: "热血足球少年", type: "动画电影", platform: "院线", soon: true },
  { date: "7月", title: "死神 千年血战篇", type: "日本动画", platform: "即将开播", soon: true },
  { date: "7月", title: "正相反的你和我 第二季", type: "日本动画", platform: "即将开播", soon: true }
];

// 下周值得关注
const SPOTLIGHT = [
  "6月27日《热血足球少年·英雄初升》院线上映，世界杯年足球题材动画电影值得关注",
  "《云秀行》刚开播，关注后续口碑发酵和云合数据走势",
  "《南部档案》与《莫离》的榜首之争继续",
  "《龙之家族S3》口碑炸裂，关注后续剧集表现",
  "《铁拳教育》全球爆红，B站二创持续发酵",
  "7月新番季即将来临，死神千年血战篇最终章等重磅日番即将上线"
];
