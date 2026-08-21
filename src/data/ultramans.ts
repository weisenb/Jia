export type UltramanCategory = '正方' | '其他'

export type UltramanEra = '昭和' | '平成' | '新生代'

export type Ultraman = {
  id: string
  name: string
  englishName: string
  japaneseName: string
  category: UltramanCategory
  era: UltramanEra | ''
  tags: string[]
  nameMeaning: string
  debut: string
  aliases: string[]
  origin: string
  humanHost: string
  description: string
  abilities: string[]
  equipment: string[]
  relationships: string[]
  images: string[]
}

export const ultramans: Ultraman[] = [
  {
    "id": "ultraman",
    "name": "奥特曼",
    "englishName": "Ultraman",
    "japaneseName": "ウルトラマン",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "光之国",
      "宇宙警备队",
      "奥特兄弟",
      "初代"
    ],
    "nameMeaning": "超人的意思，日文“ウルトラマン”也为超人的意思，中文根据其谐音翻译为“奥特曼”",
    "debut": "1966年",
    "aliases": [
      "初代奥特曼",
      "初代",
      "宇宙英雄奥特曼"
    ],
    "origin": "M78星云·奥特之星",
    "humanHost": "早田进",
    "description": "第一位从M78星云奥特之星来到地球的奥特曼，最初，奥特曼为追击怪兽百慕拉而来到了地球，不料在地球上与早田驾驶的飞机误撞，致使飞机坠毁，奥特曼为了救回早田，将自己的生命给予早田，和早田一起为保卫地球的和平而与怪兽战斗。 奥特曼离开地球时，将其中一个生命留给了早田，并清除了早田与自己合为一体的这段记忆。 此后每当奥特曼化身为人类形态时，均以早田的形象出现。",
    "abilities": [
      "斯派修姆光线",
      "八分光轮",
      "奥特屏障",
      "奥特水流",
      "奥特意念"
    ],
    "equipment": [
      "β魔棒",
      "奥特手镯"
    ],
    "relationships": [
      "奥特兄弟成员",
      "与早田进一心同体"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/8644ebf81a4c510fd9f9622d1f10322dd42a28340ff8?x-bce-process=image/resize,m_lfit,w_836,limit_1"
    ]
  },
  {
    "id": "zoffy",
    "name": "佐菲",
    "englishName": "Zoffy",
    "japaneseName": "ゾフィー",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "光之国",
      "宇宙警备队",
      "奥特兄弟",
      "队长"
    ],
    "nameMeaning": "来源于“Sophia”（智慧女神，因为佐菲是男性所以加以区别）",
    "debut": "1967年",
    "aliases": [
      "佐菲奥特曼",
      "宇宙警备队队长",
      "奥特兄弟长兄"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "M78星云·光之国的总部“宇宙警备队”的队长。领导能力出色，受到很大的信赖。“奥特兄弟”一员，佐菲的必杀技M87光线被公认为是单独奥特曼发射的最强光线技能。",
    "abilities": [
      "M87光线"
    ],
    "equipment": [],
    "relationships": [
      "奥特兄弟长兄之一",
      "宇宙警备队核心成员"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/730e0cf3d7ca7bcb0a4648c8d1407c63f6246a600288?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "seven",
    "name": "赛文",
    "englishName": "Seven",
    "japaneseName": "ウルトラセブン",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "光之国",
      "奥特警备队",
      "奥特兄弟"
    ],
    "nameMeaning": "数字7，由于奥特警备队原有6名队员，意为第七名成员。",
    "debut": "1967年",
    "aliases": [
      "赛文奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "赛文奥特曼是M78星云340号恒星观测员，为制作轨道图而来到了地球，后被地球人的真情所打动，留在地球上进行战斗。他化身为被自己救下的人的模样，决定和宇宙中的侵略者战斗到底。在1999年后的OV中，奥特眼镜暂时借给了风森正辉。",
    "abilities": [
      "艾梅利姆光线",
      "集束射线"
    ],
    "equipment": [
      "奥特眼镜",
      "头镖"
    ],
    "relationships": [
      "奥特兄弟成员"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/91ef76c6a7efce1b9d16ff4edd18e4deb48f8c54cf54?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "jack",
    "name": "杰克",
    "englishName": "Jack",
    "japaneseName": "ウルトラマンジャック",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "光之国",
      "奥特兄弟"
    ],
    "nameMeaning": "本来没有名字，曾经叫过“新曼”。名字是在美国播放的时候加的，本来是用在泰罗身上的，但是当时日本的“Hi Jack”不是什么好词。",
    "debut": "1971年",
    "aliases": [
      "新曼",
      "归来的奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "杰克奥特曼担负着保卫地球的使命而来到了地球。正在那时，为了救护少年和小狗的，惨遭怪兽伤害而阵亡的乡秀树。这时杰克被他的勇气所感动，就借助乡秀树的身躯和他合为一体，一起保卫地球。 杰克离开地球时，将乡秀树一起带回了奥特之星。 杰克奥特曼",
    "abilities": [
      "斯派修姆光线",
      "希奈拉玛射线"
    ],
    "equipment": [
      "奥特手镯"
    ],
    "relationships": [
      "奥特兄弟成员"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/dc54564e9258d109b3de8636a311dbbf6c81800ae754?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "ace",
    "name": "艾斯",
    "englishName": "Ace",
    "japaneseName": "ウルトラマンエース",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "光之国",
      "奥特兄弟"
    ],
    "nameMeaning": "英文：王牌",
    "debut": "1972年",
    "aliases": [
      "艾斯奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "异次元人亚波人派出了超兽贝劳克恩袭击地球。作为银河联邦一员的艾斯奥特曼从佐菲和赛文奥特曼那里取到了可以证明身份的证据——奥特戒指，并交给了北斗星司和南夕子，随后二人加入了超兽攻击队TAC队，肩负起保卫地球的重任。当戒指发光时，两人就合为一体变身为艾斯奥特曼，抵抗异次元人亚波人及其制造的超兽攻击地球。第28集后南夕子离开地球返回自己的故乡月球，北斗星司独自一人担负起保卫地球的责任。",
    "abilities": [
      "梅塔利姆光线",
      "断头刀"
    ],
    "equipment": [
      "奥特戒指"
    ],
    "relationships": [
      "奥特兄弟成员"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/8d5494eef01f3a292df5eb4beb6cab315c6034a8d657?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "taro",
    "name": "泰罗",
    "englishName": "Taro",
    "japaneseName": "ウルトラマンタロウ",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "光之国",
      "奥特兄弟"
    ],
    "nameMeaning": "太郎，日本家庭中长子的称呼。",
    "debut": "1973年",
    "aliases": [
      "泰罗奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "东京港突然出现了超兽度林卡，青年东光太郎挺身而出，孤身奋战击退了怪兽，得到ZAT队的重视，成为ZAT队一员，在一次与怪兽的战斗中献出了生命，这时奥特之母将泰罗奥特曼的生命给予了东光太郎，担负起保卫地球的使命，泰罗是奥特之父和奥特之母唯一的亲生儿子。",
    "abilities": [
      "斯特利姆光线",
      "奥特炸弹"
    ],
    "equipment": [
      "奥特徽章"
    ],
    "relationships": [
      "奥特之父与奥特之母之子",
      "奥特兄弟成员"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/32fa828ba61ea8d3fd1f6681e543274e251f95caf257?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "leo",
    "name": "雷欧",
    "englishName": "Leo",
    "japaneseName": "ウルトラマンレオ",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "L77星",
      "奥特兄弟"
    ],
    "nameMeaning": "英语：狮子座，寓指其故乡。",
    "debut": "1974年",
    "aliases": [
      "雷欧奥特曼"
    ],
    "origin": "L77星",
    "humanHost": "无固定人间体",
    "description": "再次担负地球防卫任务的赛文奥特曼在和怪兽的激战中受了重伤，正处在危急关头时，来自狮子座L77星的雷欧奥特曼出现并拯救了赛文奥特曼，但是诸星团（赛文奥特曼）因在战斗中受了重伤而失去了变身能力，这时雷欧奥特曼担起了保卫地球的重任，并在诸星团的训练下不断提升自己的格斗技能。",
    "abilities": [
      "雷欧飞踢",
      "雷欧双重射线"
    ],
    "equipment": [
      "狮子之瞳"
    ],
    "relationships": [
      "阿斯特拉之兄",
      "赛文的弟子"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/a1ec08fa513d269759ee9ad827b2a5fb43166d227256?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "astra",
    "name": "阿斯特拉",
    "englishName": "Astra",
    "japaneseName": "アストラ",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "L77星",
      "奥特兄弟"
    ],
    "nameMeaning": "日语：飞虎",
    "debut": "1974年",
    "aliases": [
      "阿斯特拉奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "雷欧奥特曼的孪生弟弟，同样来自L77星，因为L77星被马格马星人所毁，后在废墟中被找到，然而身为哥哥的雷欧亦未能将弟弟阿斯特拉救出，阿斯特拉左腿上的铁环是马格马星人给他带上的，记录着被马格马星人俘虏的艰苦日子，连奥特之王都无法取下。他被奥特之王解救，参加了雷欧奥特曼保卫地球的战斗，与哥哥合力打败了许多强敌！后来阿斯特拉的作用得到了奥特一族的认可，与哥哥雷欧奥特曼一起加入到奥特兄弟的行列。",
    "abilities": [
      "阿斯特拉飞踢"
    ],
    "equipment": [],
    "relationships": [
      "雷欧之弟"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/b90e7bec54e736d12f2e4f8de91958c2d5628535c356?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "jonias",
    "name": "乔尼亚斯",
    "englishName": "Jonias",
    "japaneseName": "ウルトラマンジョーニアス",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "U40星"
    ],
    "nameMeaning": "-",
    "debut": "1979年",
    "aliases": [
      "乔尼亚斯奥特曼"
    ],
    "origin": "U40星",
    "humanHost": "无固定人间体",
    "description": "第一部动画版的奥特曼，来自于U40奥特之星的超人英雄，是埃米娅奥特曼的哥哥，与科学警备队队员光超一郎合为一体，危急时刻由光 超一郎将变身道具“闪光之星”放到头部进行变身。",
    "abilities": [
      "普兰尼姆光线"
    ],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/63d0f703918fa0ec08fa2b3abadd4eee3d6d55fb6dfb?x-bce-process=image/resize,m_lfit,w_1316,limit_1"
    ]
  },
  {
    "id": "elek",
    "name": "艾雷克",
    "englishName": "Elek",
    "japaneseName": "",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "U40星"
    ],
    "nameMeaning": "元素",
    "debut": "",
    "aliases": [
      "艾雷克奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "艾雷克 艾雷克是为了守护宇宙和平、身经百战的U40星勇者，战斗力在U40星内仅次于乔尼亚斯·奥特曼。 通常是以和地球人相同的人身姿态（奥特人）生活着；在遇到战事时，便会使用“闪光之星”进行奥特变换，变身并巨大化为奥特战士，应对各种凶暴的怪兽和宇宙人。",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/500fd9f9d72a6059252dcd38366f239b033b5bb50cc4?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "lott",
    "name": "洛特",
    "englishName": "Lott",
    "japaneseName": "",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "U40星"
    ],
    "nameMeaning": "地段",
    "debut": "",
    "aliases": [
      "洛特奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "洛特 U40能够巨大化的战士之一，战斗力在U40星内仅次于乔尼亚斯奥特曼，使用洛特拉利亚光线。 性格勇敢，常和艾雷克组合行动，往返于宇宙各个星球之间、对抗各种怪兽和外星人战争灾害。 在乔尼亚斯驻守地球陷入危机时，和艾雷克一起经常伸出援手，帮其渡过难关。 在人间体状态时也能使用各种超能力。",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/b21bb051f8198618367a0fa554b639738bd4b31c48c4?x-bce-process=image/resize,m_lfit,w_794,limit_1"
    ]
  },
  {
    "id": "eighty",
    "name": "爱迪",
    "englishName": "Eighty",
    "japaneseName": "ウルトラマン80",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "光之国",
      "奥特兄弟"
    ],
    "nameMeaning": "播放时间是1980年，故以80的英文为名",
    "debut": "1980年",
    "aliases": [
      "爱迪奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "为了保卫地球的安宁，爱迪从M78星云被派到了地球，化身为中学理科教师矢的猛教导孩子们从小能分辩正义与邪恶。受UGM队队长的邀请已成为该队一员的矢的猛，在担任教师的同时也活跃地参加UGM队的各项工作。",
    "abilities": [
      "沙库修姆光线"
    ],
    "equipment": [
      "辉煌之棒"
    ],
    "relationships": [
      "尤莉安的伙伴"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/4d086e061d950a7b0208e22d659875d9f2d3562c638a?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "scott",
    "name": "斯科特",
    "englishName": "Scott",
    "japaneseName": "",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "光之国",
      "奥特部队"
    ],
    "nameMeaning": "源自苏格兰人的祖先斯科特人",
    "debut": "1989年",
    "aliases": [
      "斯科特奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "斯科特奥特曼来自于M78星云的超人英雄，追踪着怪兽来到地球，与防卫队队员史考特·马斯特森合为一体，危急时刻由意念进行变身。",
    "abilities": [],
    "equipment": [],
    "relationships": [
      "查克与贝丝的队友"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/5fdf8db1cb1349540923c58f39078558d109b2dedc8d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "chuck",
    "name": "查克",
    "englishName": "Chuck",
    "japaneseName": "",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "光之国",
      "奥特部队"
    ],
    "nameMeaning": "英语：扔出",
    "debut": "1989年",
    "aliases": [
      "查克奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "查克奥特曼是来自于M78星云的超人英雄，追踪着怪兽来到地球，与防卫队队员查克·加文合为一体，危急时刻由意念进行变身。",
    "abilities": [],
    "equipment": [],
    "relationships": [
      "斯科特与贝丝的队友"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/d058ccbf6c81800a19d89fe5de7c24fa828ba71ee98d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "beth",
    "name": "贝丝",
    "englishName": "Beth",
    "japaneseName": "",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "光之国",
      "奥特部队"
    ],
    "nameMeaning": "希伯来语第二个字母，寓意：奉献的，喜欢自由和旅游，一直在追寻目标",
    "debut": "1989年",
    "aliases": [
      "贝丝奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "来自于M78星云的英雄女战士，追踪着怪兽来到地球，与防卫队队员贝丝·奥布莱恩合为一体，危急时刻由意念进行变身。",
    "abilities": [],
    "equipment": [],
    "relationships": [
      "斯科特与查克的队友"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/32fa828ba61ea8d3fd1f6beff843274e251f94caf28d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "great",
    "name": "葛雷",
    "englishName": "Great",
    "japaneseName": "ウルトラマングレート",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "光之国"
    ],
    "nameMeaning": "伟大的",
    "debut": "1990年",
    "aliases": [
      "葛雷奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "火星上，进行勘测的行星调查员杰克·辛多由于卷入了银色巨人和宇宙邪恶生命体“戈迪斯”的战斗，被抛弃在宇宙空间，来自M78星云的巨人拯救了濒临死亡的杰克，并和他一体化后，紧追着戈迪斯的细胞来到了地球。地球上的各国主要城市被怪光包围，接连受到地震的威胁。专为对付超常现象、异常现象而组织起来的UMA队行动起来了。 葛雷特奥特曼",
    "abilities": [
      "灼热光线"
    ],
    "equipment": [
      "三角棱镜"
    ],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/b219ebc4b74543a98226b927715e9d82b9014b90be8d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "powered",
    "name": "帕瓦德",
    "englishName": "Powered",
    "japaneseName": "ウルトラマンパワード",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "光之国"
    ],
    "nameMeaning": "英语：强有力的",
    "debut": "1993年",
    "aliases": [
      "帕瓦特奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "帕瓦德奥特曼为追击企图征服地球的巴尔坦星人而来到地球，并打败狂暴的怪兽们，他是一名活跃在美国的奥特战士。 帕瓦德奥特曼",
    "abilities": [
      "百万电力光线"
    ],
    "equipment": [
      "闪光棱镜"
    ],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/6a63f6246b600c3387442a237505460fd9f9d62a0b8c?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "zea",
    "name": "哉阿斯",
    "englishName": "Z-earth",
    "japaneseName": "ウルトラマンゼアス",
    "category": "正方",
    "era": "昭和",
    "tags": [
      "Z95星"
    ],
    "nameMeaning": "Z-星球，意思是他来自Z95星球",
    "debut": "1996年",
    "aliases": [
      "哉阿斯奥特曼"
    ],
    "origin": "Z95星",
    "humanHost": "无固定人间体",
    "description": "来自Z95星云光之国。哉阿斯很讨厌脏，而且尽自己最大的努力把自己手洗干净。他的目标就是整治受污染的地球，将它变干净。与他一贯的卫生理论相一致的是，他用电动牙刷变身，显得很另类。人间体所在战队将基地伪装成一个加油站，而我们的英雄恰恰是看门的（又与他爱干净挂钩）。",
    "abilities": [
      "十字斯派修姆光线"
    ],
    "equipment": [
      "皮卡里刷"
    ],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/8601a18b87d6277f9e2fa0a67e720830e924b8995650?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "tiga",
    "name": "迪迦",
    "englishName": "Tiga",
    "japaneseName": "ウルトラマンティガ",
    "category": "正方",
    "era": "平成",
    "tags": [
      "平成三杰",
      "超古代战士"
    ],
    "nameMeaning": "印度尼西亚语中代表神圣数字“3”",
    "debut": "1996年",
    "aliases": [
      "迪迦奥特曼"
    ],
    "origin": "超古代文明",
    "humanHost": "无固定人间体",
    "description": "三千万年前从宇宙深处飞到地球的光之巨人，长久以来化作石像。直到危机再临选择了大古成为其人间体而复活，形态设定上首次打破以往的传统观念，加入了变换形态的设定，可以在复合型、强力型、空中型之间切换不同形态，这一史无前例的创举成为了后面登场的奥特曼形态设定参照的版本。",
    "abilities": [
      "哉佩利敖光线",
      "迪拉休姆光流"
    ],
    "equipment": [
      "神光棒"
    ],
    "relationships": [
      "与卡蜜拉有超古代渊源"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/ac6eddc451da81cb39dbf84b202fc7160924ab189b56?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "dyna",
    "name": "戴拿",
    "englishName": "Dyna",
    "japaneseName": "ウルトラマンダイナ",
    "category": "正方",
    "era": "平成",
    "tags": [
      "平成三杰",
      "SUPER GUTS"
    ],
    "nameMeaning": "取自于Dynamic，意为“充满活力的”",
    "debut": "1997年",
    "aliases": [
      "戴拿奥特曼"
    ],
    "origin": "火星",
    "humanHost": "无固定人间体",
    "description": "SUPER GUTS队的新队员飞鸟，在宇宙空间穷途末路的时候，对生存的强烈的心情使之诞生，在那里遭遇了光芒，得到了戴拿的变身能力。TV版大结局中被神秘宇宙球体斯菲亚吸入黑洞而穿越到其他平行宇宙。",
    "abilities": [
      "索尔捷特光线"
    ],
    "equipment": [
      "闪光剑"
    ],
    "relationships": [
      "飞鸟一马之子"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/7dd98d1001e93901213f4ce414a543e736d12e2e389d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "gaia",
    "name": "盖亚",
    "englishName": "Gaia",
    "japaneseName": "ウルトラマンガイア",
    "category": "正方",
    "era": "平成",
    "tags": [
      "平成三杰",
      "大地之光"
    ],
    "nameMeaning": "源于希腊神话大地之母的名字",
    "debut": "1998年",
    "aliases": [
      "盖亚奥特曼"
    ],
    "origin": "地球",
    "humanHost": "无固定人间体",
    "description": "为实现地球人高山我梦的强烈意愿，大地将“红光”给予了他，由此诞生的是“人类奥特曼——大地盖亚奥特曼”。无可非议，“盖亚”就是“我梦”的再现，所以，其性格也如“我梦”般亲切、温和。“红色巨人--大地意志奥特曼·盖亚”，是一个拥有不同绝技的奥特战士。",
    "abilities": [
      "光子冰刀",
      "量子流线"
    ],
    "equipment": [
      "蓝宝锥"
    ],
    "relationships": [
      "阿古茹的伙伴与竞争者"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/8cb1cb1349540923dd545ec51211c609b3de9c82e37d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "agul",
    "name": "阿古茹",
    "englishName": "Agul",
    "japaneseName": "ウルトラマンアグル",
    "category": "正方",
    "era": "平成",
    "tags": [
      "平成三杰",
      "海洋之光"
    ],
    "nameMeaning": "自造词，由表示“水源”的Aqua变形而来，与大地相对应，包含着“agressive（攻击性的）”和“agreement（同意、承诺、契约、协定）”以及日语“恶”的含义。",
    "debut": "1998年",
    "aliases": [
      "阿古茹奥特曼"
    ],
    "origin": "地球",
    "humanHost": "无固定人间体",
    "description": "阿古茹奥特曼同盖亚奥特曼一样，同为地球出生的“人类奥特曼”，他的真实身份是几年前从“炼金之星”突然消失、对我梦而言，如同哥哥般的藤宫。由此，他既要和怪兽战斗，又得和盖亚战斗。与盖亚相对，他象征着海洋。",
    "abilities": [
      "光子粉碎机"
    ],
    "equipment": [
      "蓝宝镯"
    ],
    "relationships": [
      "盖亚的伙伴与竞争者"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/d058ccbf6c81800a19d8aeb5317c24fa828ba61ee97d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "nice",
    "name": "纳伊斯",
    "englishName": "Nice",
    "japaneseName": "ウルトラマンナイス",
    "category": "正方",
    "era": "平成",
    "tags": [
      "光之国"
    ],
    "nameMeaning": "英语：令人愉快的",
    "debut": "1999年",
    "aliases": [
      "纳伊斯奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "TOY1最明亮的星星出身的奥特曼。 他的不对称花纹看上去非常酷（尤其是他的彩色计时器并不在前胸的正中央），他背后的红色花纹是一个“N”的形状（对应他的名字Nice）。 当危机来临的时候，梦星银河就用巧克力变身，巧克力放在手腕上的纳伊斯手表中，食用了纳伊斯手表中的巧克力之后，银河的身体就会发生改变，变身为纳伊斯奥特曼。",
    "abilities": [
      "梦幻光线"
    ],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/dbb44aed2e738bd4b31c465196c190d6277f9e2f5332?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "neos",
    "name": "尼奥斯",
    "englishName": "Neos",
    "japaneseName": "ウルトラマンネオス",
    "category": "正方",
    "era": "平成",
    "tags": [
      "光之国",
      "宇宙保安厅"
    ],
    "nameMeaning": "意为新世纪",
    "debut": "2000年",
    "aliases": [
      "尼奥斯奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "M78星云光之国出生的银色的巨人。是奥特战士中的精英团体“勇士司令部”所部属的人员，和被佐菲救出的神乐合二为一。尼奥斯是为了拯救遭到暗物质影响引起的不平衡现象的地球，被M78星云派遣的速度出色的战士。",
    "abilities": [
      "新玛格纽姆光线"
    ],
    "equipment": [
      "艾斯普拉斯"
    ],
    "relationships": [
      "赛文21的搭档"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/7a899e510fb30f2442a73b4424c3c643ad4bd113a567?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "seven-21",
    "name": "赛文21",
    "englishName": "Seven 21",
    "japaneseName": "セブン21",
    "category": "正方",
    "era": "平成",
    "tags": [
      "光之国",
      "宇宙保安厅"
    ],
    "nameMeaning": "数字7与21的组合，意为21世纪的赛文",
    "debut": "2000年",
    "aliases": [
      "赛文21奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "宇宙警备队的一员，隶属于宇宙保安厅。当地球面临危机时，他离开了自己的岗位被派遣到地球。因此宇宙警备队请求他协助一位年轻的奥特战士——尼奥斯奥特曼。赛文21是尼奥斯的搭档。",
    "abilities": [
      "阿德留姆光线"
    ],
    "equipment": [],
    "relationships": [
      "尼奥斯的搭档"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/0b55b319ebc4b74543a97a5123aa09178a82b901bf67?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "cosmos",
    "name": "高斯",
    "englishName": "Cosmos",
    "japaneseName": "ウルトラマンコスモス",
    "category": "正方",
    "era": "平成",
    "tags": [
      "慈爱战士",
      "TEAM EYES"
    ],
    "nameMeaning": "英语：秩序，宇宙",
    "debut": "2001年",
    "aliases": [
      "高斯奥特曼"
    ],
    "origin": "朱朗行星",
    "humanHost": "无固定人间体",
    "description": "高斯奥特曼The First Contact追赶巴尔坦星人为地球飞来，与幼年武藏相识。此事件解决后，返回到了宇宙中。不过，因为卡欧斯头部在地球出现，所以再次呈现在地球上，与武藏进行了一体化，从宇宙来的神秘巨人，期盼和平，不喜欢战斗，是一位主张不伤害对方并且建立友好关系，但是面对凶恶卑劣的敌人果断地与其战斗的战士。",
    "abilities": [
      "满月光波",
      "内巴斯特光线"
    ],
    "equipment": [
      "日月同辉"
    ],
    "relationships": [
      "杰斯提斯的伙伴",
      "雷杰多的合体者"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/e4dde71190ef76c6a7efcdf0f25feafaaf51f2dec99d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "justice",
    "name": "杰斯提斯",
    "englishName": "Justice",
    "japaneseName": "ウルトラマンジャスティス",
    "category": "正方",
    "era": "平成",
    "tags": [
      "德拉西翁"
    ],
    "nameMeaning": "英语：正义，公正",
    "debut": "2002年",
    "aliases": [
      "杰斯提斯奥特曼"
    ],
    "origin": "宇宙",
    "humanHost": "无固定人间体",
    "description": "杰斯提斯的标准型初看之下与赛文奥特曼非常相似，沿袭了赛文的护甲风格。 他初次登场于高斯奥特曼剧场版第二部《蓝色星球》，圣德罗斯光临地球并击败高斯的时候，杰斯提斯来了，他给高斯补充能量之后，和高斯携手，一起打败了这个强大的外星来客－－圣德罗斯。 后登场于高斯剧场版第三部《高斯VS杰斯提斯 最终决战》。 外表看起来很严肃的一个奥特曼，但人间体是女的。 有普通型和粉碎型两种形态。",
    "abilities": [
      "达格利普光线"
    ],
    "equipment": [],
    "relationships": [
      "高斯的伙伴",
      "雷杰多的合体者"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/e61190ef76c6a7efce1b99fd92b3b851f3deb58fc89d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "legend",
    "name": "雷杰多",
    "englishName": "Legend",
    "japaneseName": "ウルトラマンレジェンド",
    "category": "正方",
    "era": "平成",
    "tags": [
      "传说战士",
      "合体奥特曼"
    ],
    "nameMeaning": "英语：传说",
    "debut": "2003年",
    "aliases": [
      "雷杰多奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "圆谷官方的第30个奥特曼，是一个传奇的战士，别称：宇宙之神，被称为大宇宙的意志。 首次登场于剧场版《高斯VS杰斯提斯：最终决战》，剧中杰斯提斯奥特曼与高斯奥特曼一同阻止爆炸改造兵器——恩多拉，但最终失败了，当两个奥特曼的能量计时器汇聚到一起的时候，不可思议的事情发生了，传说中的光之战士——雷杰多奥特曼出现了，他抵挡并吸收了恩多拉射向地球的破坏光线，并将其推向恩多拉使其破坏，战斗结束之后，又变回高斯奥特曼和杰斯提斯奥特曼。",
    "abilities": [
      "火花传说"
    ],
    "equipment": [],
    "relationships": [
      "由高斯与杰斯提斯合体而成"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/77c6a7efce1b9d16fdfaa9ba9c97a38f8c5495eece9d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "the-next",
    "name": "奈克斯特",
    "englishName": "The Next",
    "japaneseName": "ウルトラマンネクスト",
    "category": "正方",
    "era": "平成",
    "tags": [
      "适能者"
    ],
    "nameMeaning": "英语：下一个",
    "debut": "2004年",
    "aliases": [
      "奈克斯特奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "在《奈克赛斯奥特曼》TV版第25话，剧情提及了在姬矢准（奈克赛斯的适能者）之前还有一人也曾是适能者，这个人就是真木舜一，而这个奥特曼当时的代号就是奈克斯特。于是我们可以了解到，其实奈克斯特奥特曼就是奈克赛斯奥特曼，奈克斯特是奈克赛斯的幼年形态。",
    "abilities": [
      "进化光线"
    ],
    "equipment": [
      "进化信赖者"
    ],
    "relationships": [
      "奈克赛斯的前身"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/caef76094b36acaf2edd4d1213909a1001e938013681?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "nexus",
    "name": "奈克赛斯",
    "englishName": "Nexus",
    "japaneseName": "ウルトラマンネクサス",
    "category": "正方",
    "era": "平成",
    "tags": [
      "适能者",
      "纽带"
    ],
    "nameMeaning": "英语：纽带",
    "debut": "2004年",
    "aliases": [
      "奈克赛斯奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "诺亚奥特曼的前身形态。因为来访者根据诺亚的样子制造了黑暗扎基。但由于黑暗扎基的暴走，来访者毁灭了M80星球而未杀死黑暗扎基，于是黑暗扎基逃到了地球。诺亚最初为了追击THE ONE而来到地球上，并借助地球人真木舜一的身躯来战斗，但最后诺亚被真木的话所感动，决定离开真木。之后诺亚把自己的光留在地球上等待像真木这样的人来继承光芒，而自己只剩下意志，与适能者同化之后成为奈克赛斯。",
    "abilities": [
      "十字风暴",
      "核心脉冲"
    ],
    "equipment": [
      "进化信赖者"
    ],
    "relationships": [
      "诺亚的退化形态"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/9c16fdfaaf51f3deb48f85bffba7e71f3a292cf5d39d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "noa",
    "name": "诺亚",
    "englishName": "Noa",
    "japaneseName": "ウルトラマンノア",
    "category": "正方",
    "era": "平成",
    "tags": [
      "传说战士"
    ],
    "nameMeaning": "源自《圣经》中的诺亚方舟",
    "debut": "2005年",
    "aliases": [
      "诺亚奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "奈克赛斯奥特曼的最终形态，存在于宇宙传说中的奥特曼，拥有着无限强大潜能的奥特战士，首次出场于儿童舞台剧《激斗！第一使者“诺亚奥特曼”光诞》中。背部有着伸缩自如的“诺亚之翼”使得诺亚有穿越平行宇宙的能力。拥有火焰包裹的拳头“诺亚·地狱火”和左拳靠在右臂后发出的超强力光线“诺亚·闪电”等许多神秘的超能力。",
    "abilities": [
      "诺亚闪电",
      "终极诺亚"
    ],
    "equipment": [],
    "relationships": [
      "奈克赛斯的原始形态"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/d6ca7bcb0a46f21fbe09d783996d7c600c3386440083?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "max",
    "name": "麦克斯",
    "englishName": "Max",
    "japaneseName": "ウルトラマンマックス",
    "category": "正方",
    "era": "平成",
    "tags": [
      "光之国",
      "DASH"
    ],
    "nameMeaning": "英文 Maximum 的缩写，意为：最大的",
    "debut": "2005年",
    "aliases": [
      "麦克斯奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "麦克斯，来自M78星云的光之巨人。做为文明监视员的他原本的任务仅仅是在轨道观测地球文明，协调宇宙生态的平衡。青年东马快斗在与怪兽拉格拉斯的较量下乘坐的Dash Bird One出了事故，但不料却被在地球轨道上空观测的巨人麦克斯救了下来，麦克斯选择附在其身与其合为了一体，使麦克斯奥特曼诞生了。",
    "abilities": [
      "麦克斯银河",
      "麦克斯火花"
    ],
    "equipment": [
      "麦克斯火花"
    ],
    "relationships": [
      "杰诺的伙伴"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/dc54564e9258d109b3de8169be11dbbf6c81810ae79d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "xenon",
    "name": "杰诺",
    "englishName": "Xenon",
    "japaneseName": "ウルトラマンゼノン",
    "category": "正方",
    "era": "平成",
    "tags": [
      "光之国"
    ],
    "nameMeaning": "希腊语：陌生人",
    "debut": "2005年",
    "aliases": [
      "杰诺奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "杰诺和麦克斯同为行星文明观测员，拥有和麦克斯同等的战力。在麦克斯有危险的时候出现，赋予麦克斯新的武器“麦克斯银河”。 在麦克斯打败百万巴萨库后，接麦克斯一起回到光之国。",
    "abilities": [
      "杰诺光线"
    ],
    "equipment": [
      "杰诺火花"
    ],
    "relationships": [
      "麦克斯的支援者"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/d53f8794a4c27d1ed21bc383f783ba6eddc451da9267?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "mebius",
    "name": "梦比优斯",
    "englishName": "Mebius",
    "japaneseName": "ウルトラマンメビウス",
    "category": "正方",
    "era": "平成",
    "tags": [
      "光之国",
      "GUYS",
      "奥特兄弟"
    ],
    "nameMeaning": "莫比乌斯环：∞，意为“无限”",
    "debut": "2006年",
    "aliases": [
      "梦比优斯奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "宇宙警备队的新人，受命前往地球，途中见到自己我牺牲的人类伴宏人感到十分敬佩，便决定以他的形象来到地球。是正统奥特曼故事的延续，奥特兄弟中最年轻的一位战士。",
    "abilities": [
      "梦比姆光线",
      "梦比姆爆裂"
    ],
    "equipment": [
      "梦比姆气息"
    ],
    "relationships": [
      "奥特兄弟成员",
      "希卡利的战友"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/b2de9c82d158ccbf6c81a1e17691ab3eb13532faeb9d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "hikari",
    "name": "希卡利",
    "englishName": "Hikari",
    "japaneseName": "ウルトラマンヒカリ",
    "category": "正方",
    "era": "平成",
    "tags": [
      "光之国",
      "科学技术局"
    ],
    "nameMeaning": "日语：光",
    "debut": "2006年",
    "aliases": [
      "希卡利奥特曼",
      "猎手骑士剑"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "由于奥特之母的感化，希卡利脱下了复仇的铠甲，恢复了真面目。 希卡利原属于M78星云光之国中的和宇宙警备队、与银十字军并列的宇宙科学技术局。因在调查研究时立下了汗马功劳，后来被佐菲提拔成为宇宙警备队的队员。他胸前的银点和佐菲一样是奖励给立下汗马功劳的战士的勋章。 曾经来到阿柏星，希卡利一来到阿柏星就爱上了这个星球，可是他得知了高次元捕食怪兽博伽茹即将来到阿柏星，并且毁灭它。为了拯救阿柏星，希卡利去找奥特之王得到了骑士气息，但是他没能从博伽茹手下保住阿柏星，最后穿上了复仇铠甲成为了猎手骑士剑。恢复原貌的希卡利，和GUYS队前队长芹泽和也合体后留在地球，成为梦比优斯在危机时刻必不可缺的战友。后来还可以自由召唤铠甲。",
    "abilities": [
      "骑士射线"
    ],
    "equipment": [
      "骑士气息"
    ],
    "relationships": [
      "梦比优斯的战友"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/9d82d158ccbf6c81800a3b33d377a63533fa838bea9d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "seven-x",
    "name": "赛文X",
    "englishName": "Seven X",
    "japaneseName": "ウルトラセブンX",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "平行宇宙"
    ],
    "nameMeaning": "7与X的组合",
    "debut": "2007年",
    "aliases": [
      "赛文X奥特曼"
    ],
    "origin": "平行宇宙",
    "humanHost": "无固定人间体",
    "description": "赛文X是赛文奥特曼在平行世界的身姿。赛文奥特曼为了阻止『X』的平行世界的支配者对这个世界的侵略，从而潜入异世界化身为赛文X奥特曼作战。",
    "abilities": [
      "艾梅利姆光线"
    ],
    "equipment": [
      "奥特眼镜"
    ],
    "relationships": [
      "赛文的平行宇宙形态"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/b03533fa828ba61ea8d3d4f42e7d800a304e241ff39d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "zero",
    "name": "赛罗",
    "englishName": "Zero",
    "japaneseName": "ウルトラマンゼロ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "光之国",
      "赛文之子",
      "新生代"
    ],
    "nameMeaning": "英语：数字 0",
    "debut": "2009年",
    "aliases": [
      "赛罗奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "赛罗奥特曼是赛文奥特曼的儿子，是M78星云奥特之星光之国诞生的新一代奥特战士。隶属于宇宙警备队，是光之国中最优秀的年轻战士。曾因年少叛逆，意图触碰等离子火花塔，险些铸成大错，之后赛文奥特曼把他交给雷欧奥特曼训练，意在塑造强大的内心。曾在光之国被冰封的生死关头只身赶往怪兽墓场，被等离子火花塔认可后，得到了等离子火花塔给予的巨大能量，成功解救了被贝利亚威胁的光之国。",
    "abilities": [
      "赛罗集束光线",
      "赛罗飞踢"
    ],
    "equipment": [
      "赛罗眼镜",
      "帕拉吉之盾"
    ],
    "relationships": [
      "赛文之子",
      "捷德的伙伴"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/7a899e510fb30f2442a7cfdf70dfc643ad4bd013a59f?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "boy",
    "name": "博伊",
    "englishName": "Boy",
    "japaneseName": "ウルトラマンボーイ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "光之国",
      "少年战士"
    ],
    "nameMeaning": "英语：男孩",
    "debut": "",
    "aliases": [
      "博伊奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "是光之国奥特小学的学生，梦想是成为正式的宇宙警备队队员。",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/7af40ad162d9f2d3572c6bac3aa59d13632762d06614?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "peony",
    "name": "佩欧妮",
    "englishName": "Peony",
    "japaneseName": "",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "光之国"
    ],
    "nameMeaning": "英语：牡丹",
    "debut": "",
    "aliases": [
      "佩欧妮奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "佩欧妮是光之国的居民。她在须贺川市M78光之町观光课工作。 注1：福岛县须贺川市与奥特曼的故乡“M78星云光之国”结成友好姐妹城市并建立了虚拟城市须贺川市M78光の町，市长是奥特之父。 注2：该皮套在舞台剧中重复使用，但角色形象及名称设定都有差异！不能一概而论！",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/562c11dfa9ec8a136327ffe5834a868fa0ec08fa6ad6?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "lara",
    "name": "拉腊",
    "englishName": "Lara",
    "japaneseName": "",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "光之国"
    ],
    "nameMeaning": "英语：Laura的变体，拉丁语系：意为令人愉快的",
    "debut": "",
    "aliases": [
      "拉腊奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "拉腊是M78星云光之国的偶像，光之国的一位超级女明星，首次出现在2011年的舞台剧。 注：该皮套在舞台剧中重复使用，但角色形象及名称设定都有差异！不能一概而论！ 唯一的区别是：拉腊她有配饰，包括项链、毛茸茸的粉红色手套和一个心形腰带。",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/0b46f21fbe096b63f624c6e88c7a9044ebf81a4c067b?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "sora",
    "name": "索拉",
    "englishName": "Sora",
    "japaneseName": "ソラ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "光之国",
      "科学技术局"
    ],
    "nameMeaning": "日语：相当于日语中的“天”",
    "debut": "2023年",
    "aliases": [
      "索拉奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "是与德凯奥特曼长相相似的神秘光之巨人。全身具有紫色的纹路以及红色的彩色计时器。与德凯使用的变身器相同。有专属的次元卡。 帝纳斯奥特曼",
    "abilities": [],
    "equipment": [],
    "relationships": [
      "希卡利的后辈"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/fc1f4134970a304e251f84f85d81b086c9177f3ef6d2?x-bce-process=image/resize,m_lfit,w_670,limit_1"
    ]
  },
  {
    "id": "voice",
    "name": "沃斯",
    "englishName": "Voice",
    "japaneseName": "",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "光之国"
    ],
    "nameMeaning": "英语：声音、说话声、嗓音、歌唱",
    "debut": "",
    "aliases": [
      "沃斯奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "他是赛罗奥特曼的童年好友，同时也是光之国的一位音乐老师。 他首次登场于2012年舞台剧《 Ultra Family Big Gathering 2012》。",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/bba1cd11728b4710b912e3bc4087d4fdfc0392458520?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "saga",
    "name": "赛迦",
    "englishName": "Saga",
    "japaneseName": "ウルトラマンサーガ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "传说战士",
      "合体奥特曼"
    ],
    "nameMeaning": "英语：传奇",
    "debut": "2012年",
    "aliases": [
      "赛迦奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "赛迦奥特曼是奥特曼系列剧场版《 奥特曼传奇 》中的登场角色，是由帕拉吉之盾进化成的赛迦手镯诞生的宇宙奇迹战士，是被称为由光之国的最强战士赛罗奥特曼、慈爱的勇者高斯奥特曼、传说中的英雄戴拿奥特曼三个性格不同的奥特曼的心成为一体为了地球的危机与海帕杰顿对抗而合体诞生的奇迹战士。",
    "abilities": [
      "赛迦极限"
    ],
    "equipment": [],
    "relationships": [
      "由赛罗、戴拿、高斯合体而成"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/024f78f0f736afc379312db90b53fcc4b74542a9b49f?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "ginga",
    "name": "银河",
    "englishName": "Ginga",
    "japaneseName": "ウルトラマンギンガ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "银河"
    ],
    "nameMeaning": "日语：银河",
    "debut": "2013年",
    "aliases": [
      "银河奥特曼"
    ],
    "origin": "未来",
    "humanHost": "无固定人间体",
    "description": "礼堂光用神秘道具——银河火花变身成的神秘英雄。一般情况下，披甲散发着蓝色光辉。是来自未来的奥特曼，使用闪耀的等离子能量发挥出惊人力量的新世代奥特英雄。 银河平时将本体以人偶状态隐藏在银河火花里，当充满勇气的心与银河奥特曼相呼应时，礼堂光即与银河奥特曼一体化，现出巨大化的身姿。自身也有意识，能脱离人间体的存在而活动。",
    "abilities": [
      "银河穿击光线"
    ],
    "equipment": [
      "银河火花"
    ],
    "relationships": [
      "维克特利的伙伴"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/728da9773912b31bb0515086ce51217adab44aed4b40?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "victory",
    "name": "维克特利",
    "englishName": "Victory",
    "japaneseName": "ウルトラマンビクトリー",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "地底世界"
    ],
    "nameMeaning": "英语：胜利",
    "debut": "2014年",
    "aliases": [
      "维克特利奥特曼"
    ],
    "origin": "地底世界",
    "humanHost": "无固定人间体",
    "description": "地底居民翔使用神秘的道具“维克特利圣枪”变身的守护地底世界的奥特曼。 维克特利是从宇宙飞来在地球太古时代降临守护维克特利安圣域的谜之奥特曼。 拥有许多的光线技和超能力，最特殊的能力是“奥特武装”，就是用维克特利圣枪读取怪兽火花人偶后，右臂能变成该怪兽部位并使用其力量（怪兽能力）的能力。",
    "abilities": [
      "维克特利姆射线"
    ],
    "equipment": [
      "维克特利火炬"
    ],
    "relationships": [
      "银河的伙伴"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/fc1f4134970a304e251fbb21be81b086c9177e3ef69d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "ginga-victory",
    "name": "银河维克特利",
    "englishName": "Ginga Victory",
    "japaneseName": "ウルトラマンギンガビクトリー",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "合体奥特曼"
    ],
    "nameMeaning": "将银河与维克特利的名字组合，意为银河与维克特利的合体",
    "debut": "2015年",
    "aliases": [
      "银河维克特利奥特曼"
    ],
    "origin": "地球",
    "humanHost": "无固定人间体",
    "description": "在赛罗奥特曼特训的最后使礼堂光和翔的思念变成了一个时候诞生的银河和维克特利的奇迹的融合形态。奥特十勇士的力量被隐藏了在奥特融合手镯中，可以释放所有平成奥特曼的必杀技。坚韧的肉体和超绝的力量，被托付了奥特战士们的力量同时，与强敌艾塔尔迦决战！",
    "abilities": [
      "银河维克特利射线"
    ],
    "equipment": [
      "银河火花",
      "维克特利火炬"
    ],
    "relationships": [
      "由银河与维克特利合体而成"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/94cad1c8a786c9177f3e3dac817467cf3bc79f3df947?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "ribut",
    "name": "利布特",
    "englishName": "Ribut",
    "japaneseName": "ウルトラマンリブット",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "光之国",
      "银河救援队"
    ],
    "nameMeaning": "马来文：暴风",
    "debut": "2014年",
    "aliases": [
      "利布特奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "利布特奥特曼是2014年马来西亚Upin Ipin节目的原创奥特曼，必杀技为L字的Galaxium Blaster。又被称为Ultarman Storm，后获得圆谷官方认可。",
    "abilities": [
      "银河闪光"
    ],
    "equipment": [
      "利布特长矛",
      "利布特盾牌"
    ],
    "relationships": [
      "银河救援队成员"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd5ad6e95f1259396cb39dbb6fd97d7?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "x",
    "name": "艾克斯",
    "englishName": "X",
    "japaneseName": "ウルトラマンエックス",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "Xio"
    ],
    "nameMeaning": "英文字母“X”，意为：未知",
    "debut": "2015年",
    "aliases": [
      "艾克斯奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "XiO特搜队所属的青年大空大地的便携式终端寄宿自己的灵魂，与大地融为一体的奥特曼。拥有明确的自我意识，决定与大地共同守护地球的和平而战斗。",
    "abilities": [
      "扎纳帝姆光线"
    ],
    "equipment": [
      "艾克斯终端",
      "怪兽装甲"
    ],
    "relationships": [
      "与大空大地共生"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/241f95cad1c8a786c9174dd50840de3d70cf3ac7fa9d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "orb",
    "name": "欧布",
    "englishName": "Orb",
    "japaneseName": "ウルトラマンオーブ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "O-50"
    ],
    "nameMeaning": "代表着圆环与球，也有伙伴间的纽带的意思",
    "debut": "2016年",
    "aliases": [
      "欧布奥特曼"
    ],
    "origin": "O-50行星",
    "humanHost": "无固定人间体",
    "description": "纪念《奥特曼》系列诞生50周年的作品，新生代奥特战士，每个形态各融合两位前辈奥特曼（昭和和平成时期各一位），其人间体红凯使用欧布圆环Orb Ring变身欧布奥特曼/Ultraman Orb。",
    "abilities": [
      "欧利吉姆光线"
    ],
    "equipment": [
      "欧布圆环",
      "欧布圣剑"
    ],
    "relationships": [
      "伽古拉的宿敌与伙伴"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/d62a6059252dd42a2834627be0724cb5c9ea14ce1283?x-bce-process=image/resize,m_lfit,w_1800,limit_1"
    ]
  },
  {
    "id": "geed",
    "name": "捷德",
    "englishName": "Geed",
    "japaneseName": "ウルトラマンジード",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "贝利亚之子"
    ],
    "nameMeaning": "自造词，英文gene（基因）和destiny（命运）开头的两个字母组合成gede后再调换d和e的位置变成geed，意味着命运的改变",
    "debut": "2017年",
    "aliases": [
      "捷德奥特曼"
    ],
    "origin": "地球",
    "humanHost": "无固定人间体",
    "description": "斯特鲁姆星人使用贝利亚的遗传因子制造的人工生命体。主人公朝仓陆有一天得到基德升华器与奥特胶囊，得到了FUSION RISE(融合升华)变身成捷德奥特曼的力量。与此同时也知道了继承了堕入邪恶的黑暗巨人贝利亚奥特曼的遗传基因。自己作为在地球长大的普通年轻人，知道了自己其实是贝利亚的儿子。捷德奥特曼，也就是朝仓陆的命运发生了巨大变化。命运，做好觉悟吧。",
    "abilities": [
      "毁灭爆裂"
    ],
    "equipment": [
      "捷德升华器"
    ],
    "relationships": [
      "贝利亚之子",
      "赛罗的伙伴"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/d53f8794a4c27d1ed21b7f44539cba6eddc451da9250?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "rosso",
    "name": "罗索",
    "englishName": "Rosso",
    "japaneseName": "ウルトラマンロッソ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "罗布兄弟"
    ],
    "nameMeaning": "意大利语：红色",
    "debut": "2018年",
    "aliases": [
      "罗索奥特曼"
    ],
    "origin": "地球",
    "humanHost": "无固定人间体",
    "description": "布鲁及格丽乔奥特曼的哥哥，由在地球上的凑兄弟-凑活海使用在某日得到的罗布水晶变身而成的新奥特曼，与身为弟弟凑勇海变身成的布鲁奥特曼作为新的奥特兄弟战士，使用火元素之力变身并战斗。将会与布鲁奥特曼共同成长，一起对抗强敌，为了地球的和平而战斗。",
    "abilities": [
      "火焰斯特利姆"
    ],
    "equipment": [
      "罗布回旋闪光"
    ],
    "relationships": [
      "布鲁之兄",
      "格丽乔之兄"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/1e30e924b899a9014c08fcbf6fdc1d7b02087af45faa?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "blu",
    "name": "布鲁",
    "englishName": "Blu",
    "japaneseName": "ウルトラマンブル",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "罗布兄弟"
    ],
    "nameMeaning": "意大利语：蓝色",
    "debut": "2018年",
    "aliases": [
      "布鲁奥特曼"
    ],
    "origin": "地球",
    "humanHost": "无固定人间体",
    "description": "罗索奥特曼的弟弟，格丽乔奥特曼的哥哥，由在地球上的凑勇海使用在某日得到的罗布水晶变身而成，与凑勇海的哥哥凑活海变身成的罗索奥特曼并称为兄弟战士，能够使用水元素之力战斗。将会与罗索奥特曼共同成长，一起对抗强敌，为了地球的和平而战斗。",
    "abilities": [
      "跃水斯特利姆"
    ],
    "equipment": [
      "罗布回旋闪光"
    ],
    "relationships": [
      "罗索之弟",
      "格丽乔之兄"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/7e3e6709c93d70cf3bc7ab848a95c600baa1cc11fdab?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "ruebe",
    "name": "罗布",
    "englishName": "Ruebe",
    "japaneseName": "ウルトラマンルーブ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "合体奥特曼"
    ],
    "nameMeaning": "意大利语：管",
    "debut": "2018年",
    "aliases": [
      "罗布奥特曼"
    ],
    "origin": "地球",
    "humanHost": "无固定人间体",
    "description": "罗索与布鲁使用极限水晶的力量合体诞生的强力奥特英雄，能发挥出2人各4倍以上的力量。",
    "abilities": [
      "罗布漩涡爆裂"
    ],
    "equipment": [
      "罗布回旋闪光"
    ],
    "relationships": [
      "由罗索与布鲁合体而成"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/7af40ad162d9f2d3572c8a66dba59d13632763d066aa?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "grigio",
    "name": "格丽乔",
    "englishName": "Grigio",
    "japaneseName": "ウルトラウーマングリージョ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "罗布家族"
    ],
    "nameMeaning": "意大利语：灰色；好友美剑本名",
    "debut": "2019年",
    "aliases": [
      "格丽乔奥特曼"
    ],
    "origin": "地球",
    "humanHost": "无固定人间体",
    "description": "凑朝阳变身的女性奥特战士。罗布（罗索、布鲁）奥特曼的妹妹，“格丽乔”是借助变身力量的美剑沙姬的本名。对朝阳来说，她是无可替代的朋友，曾经为维护宇宙和平而战斗的勇敢女性格丽乔，借助其变身之力，朝阳因此而感动，并仿照其名字命名。 她同时也是奥特系列史上最年轻的女性奥特英雄战士（初登场战斗时年仅17岁）。",
    "abilities": [
      "格丽乔治愈"
    ],
    "equipment": [
      "罗布回旋闪光"
    ],
    "relationships": [
      "罗索与布鲁的妹妹"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/9c16fdfaaf51f3deb48f8aeee6a7e71f3a292cf5d3aa?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "gruebe",
    "name": "格罗布",
    "englishName": "Gruebe",
    "japaneseName": "ウルトラマングルーブ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "合体奥特曼"
    ],
    "nameMeaning": "意大利语：坑",
    "debut": "2019年",
    "aliases": [
      "格罗布奥特曼"
    ],
    "origin": "地球",
    "humanHost": "无固定人间体",
    "description": "由凑活海、凑勇海以及凑朝阳兄妹三人之间的羁绊之力，使用真谛水晶的力量进行融合变身而成的奥特战士，全新的奥特英雄，被称为“真理的战士”。象征着凑家一家人的亲情，代表着罗索、布鲁和格丽乔三奥的最终力量。",
    "abilities": [
      "格罗布光轮"
    ],
    "equipment": [
      "罗布回旋闪光"
    ],
    "relationships": [
      "由罗索、布鲁、格丽乔合体而成"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/b03533fa828ba61ea8d3dba5337d800a304e241ff3aa?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "taiga",
    "name": "泰迦",
    "englishName": "Taiga",
    "japaneseName": "ウルトラマンタイガ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "光之国",
      "新生代",
      "三人小队"
    ],
    "nameMeaning": "在光之国意为“拥抱太阳的勇气之人”",
    "debut": "2019年",
    "aliases": [
      "泰迦奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "泰迦奥特曼是泰罗奥特曼的儿子，奥特之父和奥特之母的孙子，年轻、热血、富有正义感。真心想得到父亲泰罗的认可却不能坦率表达。继承了父亲泰罗的综合素质，擅长应对多种战况、活用技能的平衡型战士，以光线技能而自豪，号称【光之勇者】。 泰迦还是泰塔斯奥特曼和风马奥特曼的好伙伴，三人组成小队一起为正义战斗。同时，泰迦也是三人小队中的队长。",
    "abilities": [
      "斯特利姆爆冲"
    ],
    "equipment": [
      "泰迦火花"
    ],
    "relationships": [
      "泰罗之子",
      "泰塔斯与风马的伙伴"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/d53f8794a4c27d1ed21b441f749cba6eddc450da929d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "titas",
    "name": "泰塔斯",
    "englishName": "Titas",
    "japaneseName": "ウルトラマンタイタス",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "U40星",
      "新生代",
      "三人小队"
    ],
    "nameMeaning": "英语：泰坦。源自于希腊神话的古老神族",
    "debut": "2019年",
    "aliases": [
      "泰塔斯奥特曼"
    ],
    "origin": "U40星",
    "humanHost": "无固定人间体",
    "description": "与乔尼亚斯奥特曼一样来自U-40奥特之星，是泰迦奥特曼和风马奥特曼的战斗伙伴，三人组成三人小队，活跃在各个宇宙中，为正义而战斗。 泰塔斯身体健壮，爱秀肌肉，擅长力量型作战，作战风格偏重强力打击，格斗能力也是十分出色。性格沉稳，作战冷静，被誉为“力之贤者” 。",
    "abilities": [
      "普拉尼姆光线"
    ],
    "equipment": [
      "泰迦火花"
    ],
    "relationships": [
      "泰迦与风马的伙伴"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/472309f790529822720e358a3b9c6ccb0a46f21f7e79?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "fuma",
    "name": "风马",
    "englishName": "Fuma",
    "japaneseName": "ウルトラマンフーマ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "O-50",
      "新生代",
      "三人小队"
    ],
    "nameMeaning": "日语：风魔。源自战国时代的风魔忍者一族，对应自身的忍者能力和元素",
    "debut": "2019年",
    "aliases": [
      "风马奥特曼"
    ],
    "origin": "O-50行星",
    "humanHost": "无固定人间体",
    "description": "风马和欧布奥特曼、罗索奥特曼、布鲁奥特曼、格丽乔奥特曼一样在O-50行星战士之巅被授予了光之战士的力量。 风马身手敏捷，技能多样，同时还自带忍者属性，能够使用多种忍术，擅长速度作战，光线威力也很强。 风马性格热情外向，有时有些神经大条，但充满自信和责任心，也很讲道理。因有着风一般的速度，故有着【风之霸主】的美称。",
    "abilities": [
      "极星光波手里剑"
    ],
    "equipment": [
      "泰迦火花"
    ],
    "relationships": [
      "泰迦与泰塔斯的伙伴"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd5ad6e902f3e9396cb39dbb7fd979d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "zett",
    "name": "泽塔",
    "englishName": "Zett",
    "japaneseName": "ウルトラマンゼット",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "光之国",
      "新生代"
    ],
    "nameMeaning": "英文字母“Z”",
    "debut": "2020年",
    "aliases": [
      "泽塔奥特曼"
    ],
    "origin": "M78星云·光之国",
    "humanHost": "无固定人间体",
    "description": "泽塔奥特曼是赛罗奥特曼的徒弟，也是M78星云·光之国宇宙警备队的新队员。拥有强烈的正义之心，为守护地球与人类的和平而战斗。",
    "abilities": [
      "泽斯帝姆光线"
    ],
    "equipment": [
      "泽塔升华器",
      "贝利亚黄昏"
    ],
    "relationships": [
      "赛罗的弟子"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/1ad5ad6eddc451da81cb6930d9b44566d0160824949d?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "trigger",
    "name": "特利迦",
    "englishName": "Trigger",
    "japaneseName": "ウルトラマントリガー",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "超古代战士"
    ],
    "nameMeaning": "英语：扳机",
    "debut": "2021年",
    "aliases": [
      "特利迦奥特曼"
    ],
    "origin": "超古代文明",
    "humanHost": "无固定人间体",
    "description": "超越悠久的时间苏醒的光之巨人。除了基本形态的复合型之外，还运用地面战中的刚力特殊化的力量型、空中战和敏捷性特殊化的向天空型的类型交换能力、神秘的道具“圆环之臂”进行战斗。",
    "abilities": [
      "哉佩利敖光线"
    ],
    "equipment": [
      "胜利神光棒"
    ],
    "relationships": [
      "与卡尔蜜拉有超古代渊源"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b6003af358d1091c222ac65c1038190a?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "decker",
    "name": "德凯",
    "englishName": "Decker",
    "japaneseName": "ウルトラマンデッカー",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "GUTS-SELECT"
    ],
    "nameMeaning": "好生之德，凯旋 [4]",
    "debut": "2022年",
    "aliases": [
      "德凯奥特曼"
    ],
    "origin": "未来",
    "humanHost": "无固定人间体",
    "description": "是与明日见奏大融合的光之巨人。在闪亮型的基础上，能够以强壮型和奇迹型等型态变化的力量进行战斗。",
    "abilities": [
      "赛尔捷特光线"
    ],
    "equipment": [
      "奥特双重剑",
      "闪光剑"
    ],
    "relationships": [
      "特利迦的伙伴"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/54fbb2fb43166d224f4a13dcaa751ef7905298227466?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "regulos",
    "name": "雷古洛思",
    "englishName": "Regulos",
    "japaneseName": "ウルトラマンレグロス",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "宇宙幻兽拳"
    ],
    "nameMeaning": "来自英文“Regulus”（其中的第六个字母从u替换为o），意为“狮子座α星”，暗示与雷欧的渊源",
    "debut": "2022年",
    "aliases": [
      "雷古洛思奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "来自天龙座D60行星的奥特战士，师从雷亭大师习练宇宙幻兽拳的宇宙拳法高手，宇宙幻兽拳大师兼继承人。",
    "abilities": [
      "赤龙白虎拳"
    ],
    "equipment": [
      "宇宙幻兽斗法"
    ],
    "relationships": [
      "与雷欧有渊源"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/0823dd54564e9258d1092ca670d4c658ccbf6c81e066?x-bce-process=image/resize,m_lfit,w_700,limit_1"
    ]
  },
  {
    "id": "melos",
    "name": "美诺斯",
    "englishName": "Melos",
    "japaneseName": "ウルトラマンメロス",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "光之国"
    ],
    "nameMeaning": "甜瓜",
    "debut": "补充角色资料未标注",
    "aliases": [
      "美诺斯奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "宇宙警备队七大星云SP5星云支部长， 美洛斯 的养女，实力却在美洛斯之上，甚至不亚于 奥特之父 。非常反感他人对女奥的歧视及侮辱，一旦处于暴怒状态，破坏力极强！无人是她敌手！",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/eaf81a4c510fd9f9d72a014df164c32a2834349b0ef7?x-bce-process=image/resize,m_lfit,w_1394,limit_1"
    ]
  },
  {
    "id": "aura",
    "name": "奥拉",
    "englishName": "Aura",
    "japaneseName": "",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "光之国"
    ],
    "nameMeaning": "光环",
    "debut": "",
    "aliases": [
      "奥拉奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "宇宙警备队七大星云SP5星云支部长，美洛斯的养女，实力不亚于奥特之父。她反感对女性奥特战士的歧视与侮辱，愤怒时拥有极强的破坏力。",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/242dd42a2834349b033bf17058a302ce36d3d43910a6?x-bce-process=image/resize,m_lfit,w_798,limit_1"
    ]
  },
  {
    "id": "blazar",
    "name": "布莱泽",
    "englishName": "Blazar",
    "japaneseName": "ウルトラマンブレーザー",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "SKaRD"
    ],
    "nameMeaning": "英语：耀变体",
    "debut": "2023年",
    "aliases": [
      "布莱泽奥特曼"
    ],
    "origin": "M421星云",
    "humanHost": "无固定人间体",
    "description": "来自远离地球的天体M421、具有不可动摇的正义感的布莱泽奥特曼，与地球防卫军成立的特殊怪物应对分队SKaRD的指挥官比留间弦人一心同体，秉持着拯救人类生命的强烈愿望战斗。",
    "abilities": [
      "螺旋光矛"
    ],
    "equipment": [
      "布莱泽手镯"
    ],
    "relationships": [
      "与比留间弦人一体化"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/8601a18b87d6277f9e2f1670c46e0830e924b8995666?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "arc",
    "name": "亚刻",
    "englishName": "Arc",
    "japaneseName": "ウルトラマンアーク",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代",
      "SKIP"
    ],
    "nameMeaning": "英语：圆弧",
    "debut": "2024年",
    "aliases": [
      "亚刻奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "《亚刻奥特曼》主角，神秘的光之巨人。通过释放想象的力量，主人公——优马与来自遥远银河系的光之使者融为一体，变身亚刻奥特曼。他的模样和优马小时候画的“最强的英雄”素描一模一样。 亚刻奥特曼的必杀技是双手交叉放出的“亚刻最终升华光线”。",
    "abilities": [
      "亚刻终结光线"
    ],
    "equipment": [
      "亚刻升华器"
    ],
    "relationships": [
      "与飞世优马共鸣"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/0dd7912397dda144ad34889830efc7a20cf431ad28da?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "omega",
    "name": "奥美迦",
    "englishName": "Omega",
    "japaneseName": "ウルトラマンオメガ",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代"
    ],
    "nameMeaning": "希腊字母“Ω”",
    "debut": "2025年",
    "aliases": [
      "奥美迦奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "《奥美迦奥特曼》主角， 主人公——宙人召唤，奥美迦头镖便会自动出现在其手中。将胸前项链中的 “奥美迦星石”装入头镖，头镖会展开双翼，光芒笼罩宙人全身变身为光之巨人。变身后，奥美迦奥特曼头部的 “奥美迦头镖” 能作为锋利的武器。无论是常态下的宙人，还是变身后的奥美迦，面对对手时都会做出一个标志性动作“奥美迦感知”——抬手朝对方张开手掌，如同在观测对方。 奥迦奥特曼的必杀技双手组合释放出来的雷迪库琉特光线。",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/d009b3de9c82d158ccbf31e3b2500ed8bc3eb135e415?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "teo",
    "name": "提欧",
    "englishName": "Teo",
    "japaneseName": "",
    "category": "正方",
    "era": "新生代",
    "tags": [
      "新生代"
    ],
    "nameMeaning": "希腊语：神的意思，上帝的礼物",
    "debut": "2026年",
    "aliases": [
      "提欧奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "《提欧奥特曼》主角，主人公——光石息吹变身为光之巨人。 当息吹怀着强烈的“保护”欲望紧紧抓住“提欧星晶”时，他的身体被耀眼的光芒包裹，变成了一个巨大的身影。触摸胸前的色彩计时器，他可以点燃隐藏能量并释放各种光之术。 主要招式是“提欧修姆光线”，发射双臂交叉的长长发光能量。 [15]",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/c2cec3fdfc039245d68828543fc8b3c27d1ed21b8f61?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "shadow",
    "name": "夏德",
    "englishName": "Shadow",
    "japaneseName": "",
    "category": "其他",
    "era": "",
    "tags": [
      "其他",
      "黑暗"
    ],
    "nameMeaning": "影子",
    "debut": "",
    "aliases": [
      "夏德奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "女班赞星人 为控制人类仿制哉阿斯奥特曼制造出来派遣到地球的侵略机器人，实力极其强悍。 曾将哉阿斯打败，后和哉阿斯再次展开激战，最后被哉阿斯打败。 弱点是胸部的彩色计时器，但胸部的彩色计时器得到保护，挡下了Mydo（麦多队）的冲天号对其发射的杰顿光线，最终被哉阿斯奥特曼彻底消灭。",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/562c11dfa9ec8a1363276ae5fe5f868fa0ec08fa6a38?x-bce-process=image/resize,m_lfit,w_1464,limit_1"
    ]
  },
  {
    "id": "dark",
    "name": "黑暗",
    "englishName": "Dark",
    "japaneseName": "",
    "category": "其他",
    "era": "",
    "tags": [
      "其他",
      "黑暗"
    ],
    "nameMeaning": "黑暗",
    "debut": "2017年",
    "aliases": [
      "黑暗奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "登场于《银河奥特曼》，是奥特曼的人偶被黑暗实体化而形成的黑暗形态的奥特曼。",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/4d086e061d950a7b020884c7038d75d9f2d3572c6339?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "chaos",
    "name": "卡欧斯",
    "englishName": "Chaos",
    "japaneseName": "",
    "category": "其他",
    "era": "",
    "tags": [
      "其他",
      "混沌"
    ],
    "nameMeaning": "混沌",
    "debut": "2001年",
    "aliases": [
      "卡欧斯奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "卡欧斯系奥特曼包含卡欧斯奥特曼、卡欧斯奥特曼克莱美第、卡欧斯机械U、卡欧斯机械T和卡欧斯机械S，登场于《高斯奥特曼》及《银河奥特曼剧场特别篇2 奥特怪兽☆英雄大乱战》。",
    "abilities": [],
    "equipment": [],
    "relationships": [
      "高斯的对立者"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/faedab64034f78f0f736f583fa781d55b319ebc4b620?x-bce-process=image/resize,m_lfit,w_1118,limit_1"
    ]
  },
  {
    "id": "calamity",
    "name": "克莱美第",
    "englishName": "Calamity",
    "japaneseName": "",
    "category": "其他",
    "era": "",
    "tags": [
      "其他"
    ],
    "nameMeaning": "灾难",
    "debut": "补充角色资料未标注",
    "aliases": [
      "克莱美第"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "英文 Calamity 意为“灾难”。百度百科将其列入卡欧斯系奥特曼条目，与卡欧斯奥特曼、卡欧斯机械U、卡欧斯机械T和卡欧斯机械S一并介绍，未单列独立人物设定。",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/faedab64034f78f0f736f583fa781d55b319ebc4b620?x-bce-process=image/resize,m_lfit,w_1118,limit_1"
    ]
  },
  {
    "id": "faust",
    "name": "浮士德",
    "englishName": "Faust",
    "japaneseName": "ダークファウスト",
    "category": "其他",
    "era": "",
    "tags": [
      "其他",
      "黑暗"
    ],
    "nameMeaning": "来源于德国诗剧《浮士德》中的主角名",
    "debut": "2019年",
    "aliases": [
      "黑暗浮士德"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "浮士德只是个梅菲斯特（说到底是扎基）的傀儡，莉子就是浮士德，只有两种形态（人类姿态和巨人姿态）而已。因为她本来就在认识孤门当天就被害了，只是被操控的人偶。没有莉子就没有浮士德。",
    "abilities": [
      "黑暗光线"
    ],
    "equipment": [],
    "relationships": [
      "梅菲斯特的同类"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/060828381f30e924b8995031455479061d950a7b5924?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "mephisto",
    "name": "梅菲斯特",
    "englishName": "Mephisto",
    "japaneseName": "ダークメフィスト",
    "category": "其他",
    "era": "",
    "tags": [
      "其他",
      "黑暗"
    ],
    "nameMeaning": "恶魔",
    "debut": "",
    "aliases": [
      "黑暗梅菲斯特"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "继黑暗浮士德之后现身在奈克赛斯面前的黑暗巨人，与原夜袭队副队长沟吕木真也合为一体。 使用黑暗进化者进行变身的时候，全身被海洋漩涡形状的黑色光芒包覆，脸部裂开，黑暗梅菲斯特从中出现。拥有和奈克赛斯同等的能力，打算夺取奈克赛斯的光成为最强的黑暗巨人，操纵黑暗浮士德和异生兽，与姫矢准展开多次决斗。",
    "abilities": [
      "黑暗光线"
    ],
    "equipment": [],
    "relationships": [
      "扎基的手下"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/71cf3bc79f3df8dcd1001a90c44d658b4710b9128224?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "zagi",
    "name": "扎基",
    "englishName": "Zagi",
    "japaneseName": "ダークザギ",
    "category": "其他",
    "era": "",
    "tags": [
      "其他",
      "黑暗"
    ],
    "nameMeaning": "来源于埃及吉萨金字塔（Great Pyramid of Giza）中Giza倒过来的读音",
    "debut": "2004年",
    "aliases": [
      "黑暗扎基"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "有着与诺亚奥特曼相似的姿态和能力因此也被称为「诺亚的黑暗面」。 游走于身体上的红、黑线条构成了它的体色，胸前配有与诺亚同样的Y字型能量核心。 其本体是20年前来自M80天蝎座球状星云的外星人为了驱逐异生兽而制造的对异生兽用最终兵器人造巨人「人造人·扎基」。仿照着将母星从异生兽手下救出的光之巨人（诺亚奥特曼）所制作，因此有着与诺亚相似的外貌及能力。原本应该吸收（捕食）其他生物以对抗异生兽，所以编入了自我进化的程序。但由于扭曲的自我觉醒，致使「光之巨人的仿制品」觉醒后反而将异生兽增值且进化，自己则作为支配者立于顶点。",
    "abilities": [
      "闪电扎基"
    ],
    "equipment": [],
    "relationships": [
      "诺亚的黑暗复制体"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/34fae6cd7b899e510fb3559f30eece33c895d043a7ad?x-bce-process=image/resize,m_lfit,w_1562,limit_1"
    ]
  },
  {
    "id": "lucifer",
    "name": "路西法",
    "englishName": "Lucifer",
    "japaneseName": "",
    "category": "其他",
    "era": "",
    "tags": [
      "其他",
      "黑暗"
    ],
    "nameMeaning": "堕落天使",
    "debut": "",
    "aliases": [
      "黑暗路西法"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "别称：闇の巨人 继黑暗浮士德、黑暗梅菲斯特、黑暗扎基之后出现的第四名黑暗巨人，一切的罪魁祸首！ 是奥特系列唯一一个（也是唯一一次）首次在官方小说中登场的反派黑暗巨人！ 有自己的设计图存在，拥有很多奥特N计划中恶役的特征： ▪异生兽THE ONE：身体构造。 ▪黑暗浮士德：左颈的面孔。 ▪黑暗梅菲斯特：右颈的面孔。 ▪黑暗扎基：类似血液纹路的皮肤。 ▪背部刺状物: 在西条被篡改的儿时记忆中，是石堀光彦变身后背部的刺状部位以及阿拉库乃的背部。 总的来说，是能让人想到尖牙利齿的THE ONE和气场十足的黑暗扎基的「怪兽型奥特曼」【怪獣型ウルトラマン】。",
    "abilities": [],
    "equipment": [],
    "relationships": [],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/21a4462309f790529822ea3e80bac0ca7bcb0a467fd3?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "terranoid",
    "name": "泰拉诺伊德",
    "englishName": "Terranoid",
    "japaneseName": "テラノイド",
    "category": "其他",
    "era": "",
    "tags": [
      "其他",
      "人造巨人"
    ],
    "nameMeaning": "英文中代表“地球的，地球人的”单词Terran+“人形机器人”droid的复合词，代表由人类制造的巨人",
    "debut": "补充角色资料未标注",
    "aliases": [
      "泰拉诺伊德"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "人造奥特曼泰拉诺伊德由人类制造，是继戴拿奥特曼中的泰拉诺伊德之后，奥特系列第二个在现实世界中登场的由地球防卫组织制造的人造奥特曼。",
    "abilities": [],
    "equipment": [],
    "relationships": [
      "人类制造的巨人"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/f3d3572c11dfa9ec8a1341358c99e003918fa0ec6bf5?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1"
    ]
  },
  {
    "id": "lugiel",
    "name": "路基艾尔",
    "englishName": "Lugiel",
    "japaneseName": "ウルトラマンルギエル",
    "category": "其他",
    "era": "",
    "tags": [
      "其他",
      "黑暗"
    ],
    "nameMeaning": "原型为路西法",
    "debut": "补充角色资料未标注",
    "aliases": [
      "黑暗路基艾尔"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "路基艾尔的名称原型为路西法，是银河奥特曼相关作品中的黑暗战士与宿敌。",
    "abilities": [
      "黑暗火花"
    ],
    "equipment": [
      "黑暗火花"
    ],
    "relationships": [
      "银河的宿敌"
    ],
    "images": [
      "https://placehold.co/1200x1600/111827/f8fafc?text=%E8%B7%AF%E5%9F%BA%E8%89%BE%E5%B0%94"
    ]
  },
  {
    "id": "belial",
    "name": "贝利亚",
    "englishName": "Belial",
    "japaneseName": "ウルトラマンベリアル",
    "category": "其他",
    "era": "",
    "tags": [
      "其他",
      "黑暗",
      "光之国"
    ],
    "nameMeaning": "恶魔",
    "debut": "1974年",
    "aliases": [
      "贝利亚奥特曼",
      "银河皇帝"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "贝利亚奥特曼 早期形态 贝利亚作为奥特战士最原本的姿态，和健（年轻时的奥特之父）是战友，彼此共同变强、协作，并与威胁和平的敌人作战。在《奥特银河格斗：巨大的阴谋》中以反方角色亮相。",
    "abilities": [
      "帝斯修姆光线"
    ],
    "equipment": [
      "终极战斗仪"
    ],
    "relationships": [
      "捷德之父",
      "赛罗的宿敌"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/ae51f3deb48f8c5494eed8b268633af5e0fe9925d15e?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "darklops",
    "name": "黑暗洛普斯",
    "englishName": "Darklops",
    "japaneseName": "ダークロプスゼロ",
    "category": "其他",
    "era": "",
    "tags": [
      "其他",
      "机械",
      "黑暗"
    ],
    "nameMeaning": "暗黑独眼巨人",
    "debut": "",
    "aliases": [
      "黑暗洛普斯赛罗"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "在《超银河传说外传：赛罗奥特曼VS黑暗洛普斯赛罗》中登场的机械奥特曼，是贝利亚使用艾美拉鲁矿石模仿赛罗奥特曼制造的机器人。搭载着能毁灭整个次元的武器--次元炮，但在一次实验中流落到另一个次元被萨洛梅星人捕捉并加以改造企图控制他。在《超决战！贝利亚银河帝国》中被贝利亚大量量产，成为帝国猎兵黑暗洛普斯，侵略宇宙。（量产的则并没有次元炮）",
    "abilities": [
      "黑暗艾梅利姆光线"
    ],
    "equipment": [],
    "relationships": [
      "贝利亚制造的赛罗复制体"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/8b82b9014a90f603738d1d600149a41bb051f81947da?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  },
  {
    "id": "tregear",
    "name": "托雷基亚",
    "englishName": "Tregear",
    "japaneseName": "ウルトラマントレギア",
    "category": "其他",
    "era": "",
    "tags": [
      "其他",
      "黑暗",
      "光之国"
    ],
    "nameMeaning": "古希腊语 τρέλα (tréla)疯狂+ περιέργεια (periérgeia)好奇心两词结合； Tregear 在光之国意为“癫狂的好奇心”",
    "debut": "",
    "aliases": [
      "托雷基亚奥特曼"
    ],
    "origin": "未知",
    "humanHost": "无固定人间体",
    "description": "托雷基亚原本是诞生于M78星云光之国的蓝族奥特曼，也是泰罗从小一起长大的挚友。因体力不合格而进入宇宙科学技术局工作，凭借头脑开发出阿斯特莱尔粒子转化系统，即后来的泰迦火花。",
    "abilities": [
      "托雷拉凯尔波斯"
    ],
    "equipment": [
      "托雷基亚之眼"
    ],
    "relationships": [
      "泰罗的昔日挚友",
      "泰迦的宿敌"
    ],
    "images": [
      "https://bkimg.cdn.bcebos.com/pic/79f0f736afc379310a55f71e778ea04543a98226bbf8?x-bce-process=image/resize,m_lfit,w_250,h_250,limit_1"
    ]
  }
]
