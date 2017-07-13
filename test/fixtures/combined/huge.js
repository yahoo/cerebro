module.exports = [
  {
    "setting": "a",
    "value": "0",
    "except": [
      {
        "value": "foo",
        "buckets": [
          "bucketA"
        ]
      },
      {
        "value": "bar",
        "buckets": [
          "bucketB"
        ]
      }
    ]
  },
  {
    "setting": "b",
    "value": 3000
  },
  {
    "setting": "c",
    "value": [],
    "except": [
      {
        "value": ['hi'],
        "buckets": [
          "bucketC"
        ]
      }
    ]
  },
  {
    "setting": "d",
    "value": 50,
    "except": [
      {
        "value": 150,
        "buckets": [
          "bucketD"
        ]
      }
    ]
  },
  {
    "setting": "e",
    "value": 500
  },
  {
    "setting": "f",
    "value": "aa",
    "except": [
      {
        "value": "bb",
        "colos": [
          "gq1"
        ]
      },
      {
        "value": "cc",
        "colos": [
          "ir2"
        ]
      },
      {
        "value": "dd",
        "colos": [
          "ne1"
        ]
      },
      {
        "value": "ee",
        "colos": [
          "sg3"
        ]
      },
      {
        "value": "ff",
        "colos": [
          "tw1"
        ]
      }
    ]
  },
  {
    "setting": "g",
    "value": [
      14,
      18,
      19
    ]
  },
  {
    "setting": "h",
    "value": "http://www.yahoo.com/"
  },
  {
    "setting": "i",
    "value": 500
  },
  {
    "setting": "j",
    "value": 1000
  },
  {
    "setting": "k",
    "value": 10
  },
  {
    "setting": "l",
    "value": 100
  },
  {
    "setting": "m",
    "value": [
      "aa",
      "bb",
      "cc",
      "dd",
      "ee",
      "ff",
      "gg",
      "hh"
    ],
    "except": [
      {
        "value": [
          "aa",
          "bb",
          "cc",
          "dd",
          "ee",
          "ff",
          "gg",
          "jj"
        ],
        "buckets": [
          "bucketD"
        ]
      }
    ]
  },
  {
    "setting": "n",
    "value": "https://www.yahoo.com"
  },
  {
    "setting": "o",
    "value": "intl-user",
    "except": [
      {
        "value": "en-user",
        "langs": [
          "en"
        ]
      }
    ]
  },
  {
    "setting": "p",
    "value": "guid1",
    "except": [
      {
        "value": "guid2",
        "buckets": [
          "bucketE",
          "bucketF"
        ]
      },
      {
        "value": "guid3",
        "buckets": [
          "bucketG"
        ]
      }
    ]
  },
  {
    "setting": "q",
    "value": "linkText",
    "except": [
      {
        "value": "btnPrimaryText",
        "buckets": [
          "bucketE",
          "bucketF"
        ]
      },
      {
        "value": " ",
        "buckets": [
          "bucketG"
        ]
      }
    ]
  },
  {
    "setting": "r",
    "value": "aa",
    "except": [
      {
        "value": "bb",
        "buckets": [
          "bucket10"
        ]
      },
      {
        "value": "cc",
        "buckets": [
          "bucket11"
        ]
      },
      {
        "value": "dd",
        "buckets": [
          "bucket12",
          "bucket16"
        ]
      },
      {
        "value": "ee",
        "buckets": [
          "bucket13"
        ]
      }
    ]
  },
  {
    "setting": "s",
    "value": "aa",
    "except": [
      {
        "value": "bb",
        "buckets": [
          "bucket02",
          "bucket16",
          "bucket17"
        ]
      },
      {
        "value": "cc",
        "buckets": [
          "bucket03"
        ]
      },
      {
        "value": "dd",
        "buckets": [
          "bucket04"
        ]
      },
      {
        "value": "ee",
        "buckets": [
          "bucket05"
        ]
      },
      {
        "value": "ff",
        "buckets": [
          "bucket06"
        ]
      },
      {
        "value": "gg",
        "buckets": [
          "bucket07"
        ]
      }
    ]
  },
  {
    "setting": "t",
    "value": " ",
    "except": [
      {
        "value": "bb",
        "buckets": [
          "CMUSSPOTLIGHTT06"
        ]
      },
      {
        "value": "cc",
        "buckets": [
          "CMUSSPOTLIGHTT07"
        ]
      }
    ]
  },
  {
    "setting": "u",
    "value": "aa",
    "except": [
      {
        "value": "bb",
        "buckets": [
          "bucket02",
          "bucket04",
          "bucket06",
          "bucket07"
        ]
      },
      {
        "value": "cc",
        "buckets": [
          "bucket03",
          "bucket05"
        ]
      },
      {
        "value": "dd",
        "buckets": [
          "bucket16",
          "bucket17"
        ]
      }
    ]
  },
  {
    "setting": "v",
    "value": "aa",
    "except": [
      {
        "value": "bb",
        "langs": [
          "en-US"
        ]
      }
    ]
  },
  {
    "setting": "w",
    "value": "from",
    "except": [
      {
        "value": "all",
        "buckets": [
          "bucketA"
        ]
      }
    ]
  },
  {
    "setting": "x",
    "value": [
      "from",
      "to",
      "all"
    ],
    "except": [
      {
        "value": [
          "all",
          "from",
          "to"
        ],
        "buckets": [
          "bucketB"
        ]
      }
    ]
  },
  {
    "setting": "y",
    "value": "aa"
  },
  {
    "setting": "z",
    "value": "bb"
  },
  {
    "setting": "aa",
    "value": {
      "default-src": [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        "safari-extension:",
        "chrome-extension:",
        "resource:"
      ],
      "img-src": [
        "*",
        "safari-extension:",
        "chrome-extension:",
        "resource:",
        "data:",
        "blob:"
      ],
      "media-src": [
        "*"
      ],
      "object-src": [
        "*"
      ],
      "connect-src": [
        "*"
      ],
      "font-src": [
        "*",
        "safari-extension:",
        "chrome-extension:",
        "resource:",
        "data:"
      ]
    }
  },
  {
    "setting": "bb",
    "value": 256000
  },
  {
    "setting": "cc",
    "value": "aa"
  },
  {
    "setting": "dd",
    "value": 2500
  },
  {
    "setting": "ee",
    "value": 3
  },
  {
    "setting": "ff",
    "value": 30
  },
  {
    "setting": "gg",
    "value": [
      ":-)",
      ":)",
      ":-(",
      ":("
    ]
  },
  {
    "setting": "hh",
    "value": [
      "attach"
    ]
  },
  {
    "setting": "ii",
    "value": 30
  },
  {
    "setting": "jj",
    "value": 30,
    "except": [
      {
        "value": 45,
        "buckets": [
          "bucket02"
        ]
      },
      {
        "value": 60,
        "buckets": [
          "bucket03"
        ]
      },
      {
        "value": 120,
        "buckets": [
          "bucket04"
        ]
      }
    ]
  },
  {
    "setting": "kk",
    "value": 30
  },
  {
    "setting": "ll",
    "value": 20000
  },
  {
    "setting": "mm",
    "value": "aa"
  },
  {
    "setting": "nn",
    "value": "bb"
  },
  {
    "setting": "oo",
    "value": "cc"
  },
  {
    "setting": "pp",
    "value": 20
  },
  {
    "setting": "qq",
    "value": 8
  },
  {
    "setting": "rr",
    "value": "aa",
    "except": [
      {
        "value": "bb",
        "langs": [
          "es-AR"
        ]
      },
      {
        "value": "cc",
        "langs": [
          "en-AU"
        ]
      },
      {
        "value": "dd",
        "langs": [
          "de-AT"
        ]
      },
      {
        "value": "ee",
        "langs": [
          "fr-BE"
        ]
      },
      {
        "value": "ff",
        "langs": [
          "en-GB"
        ]
      },
      {
        "value": "gg",
        "langs": [
          "pt-BR"
        ]
      },
      {
        "value": "hh",
        "langs": [
          "en-CA"
        ]
      },
      {
        "value": "ii",
        "langs": [
          "es-CL"
        ]
      },
      {
        "value": "jj",
        "langs": [
          "es-CO"
        ]
      },
      {
        "value": "kk",
        "langs": [
          "fr-FR"
        ]
      },
      {
        "value": "ll",
        "langs": [
          "de-DE"
        ]
      },
      {
        "value": "mm",
        "langs": [
          "zh-Hant-HK"
        ]
      },
      {
        "value": "nn",
        "langs": [
          "en-IN"
        ]
      },
      {
        "value": "oo",
        "langs": [
          "id-ID"
        ]
      },
      {
        "value": "pp",
        "langs": [
          "it-IT"
        ]
      },
      {
        "value": "qq",
        "langs": [
          "en-MY"
        ]
      },
      {
        "value": "rr",
        "langs": [
          "es-MX"
        ]
      },
      {
        "value": "ss",
        "langs": [
          "en-JO"
        ]
      },
      {
        "value": "tt",
        "langs": [
          "en-NZ"
        ]
      },
      {
        "value": "uu",
        "langs": [
          "es-PE"
        ]
      },
      {
        "value": "vv",
        "langs": [
          "en-PH"
        ]
      },
      {
        "value": "ww",
        "langs": [
          "en-SG"
        ]
      },
      {
        "value": "xx",
        "langs": [
          "en-ZA"
        ]
      },
      {
        "value": "yy",
        "langs": [
          "es-ES"
        ]
      },
      {
        "value": "zz",
        "langs": [
          "en-SG"
        ]
      },
      {
        "value": "aaa",
        "langs": [
          "zh-Hant-TW"
        ]
      },
      {
        "value": "bbb",
        "langs": [
          "es-US"
        ]
      },
      {
        "value": "ccc",
        "langs": [
          "es-VE"
        ]
      },
      {
        "value": "ddd",
        "langs": [
          "vi-VN"
        ]
      }
    ]
  },
  {
    "setting": "ss",
    "value": {
      "aa": {
        "value": 53
      },
      "bb": {
        "value": 21
      }
    }
  },
  {
    "setting": "tt",
    "value": 35000,
    "except": [
      {
        "value": 0,
        "settingA": [
          "1330"
        ]
      },
      {
        "value": 60000,
        "settingA": [
          "750"
        ]
      },
      {
        "value": 90000,
        "settingA": [
          "1900"
        ]
      }
    ]
  },
  {
    "setting": "uu",
    "value": "aa"
  },
  {
    "setting": "vv",
    "value": 10
  },
  {
    "setting": "ww",
    "value": "aa"
  },
  {
    "setting": "xx",
    "value": "aa"
  },
  {
    "setting": "yy",
    "value": "zz"
  },
  {
    "setting": "zz",
    "value": "aa"
  },
  {
    "setting": "aaa",
    "value": "aa"
  },
  {
    "setting": "bbb",
    "value": "aa"
  },
  {
    "setting": "ccc",
    "value": "aa",
    "except": [
      {
        "value": "bb",
        "setting": "winApp"
      }
    ]
  },
  {
    "setting": "ddd",
    "value": "aa"
  },
  {
    "setting": "eee",
    "value": {
      "aa": 969331494,
      "bb": 230553119
    }
  },
  {
    "setting": "fff",
    "value": 53
  },
  {
    "setting": "ggg",
    "value": "aa",
    "except": [
      {
        "value": "bb",
        "stages": [
          "dev"
        ]
      }
    ]
  },
  {
    "setting": "hhh",
    "value": [
      "aaa"
    ]
  },
  {
    "setting": "iii",
    "value": "aa"
  },
  {
    "setting": "jjj",
    "value": "bb"
  },
  {
    "setting": "kkk",
    "value": "aaa"
  },
  {
    "setting": "lll",
    "value": "aa",
    "except": [
      {
        "value": "bb",
        "buckets": [
          "bucketA"
        ]
      }
    ]
  },
  {
    "setting": "mmm",
    "value": 1431234000
  },
  {
    "setting": "nnn",
    "value": "aa",
    "except": [
      {
        "value": "bb",
        "langs": [
          "en"
        ]
      }
    ]
  },
  {
    "setting": "ooo",
    "value": "help",
    "except": [
      {
        "value": "ar.ayuda",
        "langs": [
          "es-AR"
        ]
      },
      {
        "value": "au.help",
        "langs": [
          "en-AU"
        ]
      },
      {
        "value": "be.aide",
        "langs": [
          "fr-BE"
        ]
      },
      {
        "value": "br.ajuda",
        "langs": [
          "pt-BR"
        ]
      },
      {
        "value": "ca.help",
        "langs": [
          "en-CA"
        ]
      },
      {
        "value": "cl.ayuda",
        "langs": [
          "es-CL"
        ]
      },
      {
        "value": "co.ayuda",
        "langs": [
          "es-CO"
        ]
      },
      {
        "value": "de.hilfe",
        "langs": [
          "de-DE"
        ]
      },
      {
        "value": "es.ayuda",
        "langs": [
          "es-ES"
        ]
      },
      {
        "value": "es-us.ayuda",
        "langs": [
          "es-US"
        ]
      },
      {
        "value": "fr.aide",
        "langs": [
          "fr-FR"
        ]
      },
      {
        "value": "in.help",
        "langs": [
          "en-IN"
        ]
      },
      {
        "value": "id.bantuan",
        "langs": [
          "id-ID"
        ]
      },
      {
        "value": "it.aiuto",
        "langs": [
          "it-IT"
        ]
      },
      {
        "value": "my.help",
        "langs": [
          "en-MY"
        ]
      },
      {
        "value": "mx.ayuda",
        "langs": [
          "es-MX"
        ]
      },
      {
        "value": "nz.help",
        "langs": [
          "en-NZ"
        ]
      },
      {
        "value": "at.hilfe",
        "langs": [
          "de-AT"
        ]
      },
      {
        "value": "pe.ayuda",
        "langs": [
          "es-PE"
        ]
      },
      {
        "value": "ph.help",
        "langs": [
          "en-PH"
        ]
      },
      {
        "value": "pl.pomoc",
        "langs": [
          "pl-PL"
        ]
      },
      {
        "value": "fr-ca.aide",
        "langs": [
          "fr-CA"
        ]
      },
      {
        "value": "ro.ajutor",
        "langs": [
          "ro-RO"
        ]
      },
      {
        "value": "sg.help",
        "langs": [
          "en-SG"
        ]
      },
      {
        "value": "za.help",
        "langs": [
          "en-ZA"
        ]
      },
      {
        "value": "tr.help",
        "langs": [
          "tr-TR"
        ]
      },
      {
        "value": "uk.help",
        "langs": [
          "en-GB"
        ]
      },
      {
        "value": "ve.ayuda",
        "langs": [
          "es-VE"
        ]
      },
      {
        "value": "gr.help",
        "langs": [
          "el-GR"
        ]
      },
      {
        "value": "ru.help",
        "langs": [
          "ru-RU"
        ]
      },
      {
        "value": "tw.help",
        "langs": [
          "zh-Hant-TW"
        ]
      },
      {
        "value": "hk.help",
        "langs": [
          "zh-Hant-HK"
        ]
      }
    ]
  },
  {
    "setting": "qqq",
    "value": "foo@yahoo.com"
  },
  {
    "setting": "rrr",
    "value": "bbb"
  },
  {
    "setting": "sss",
    "value": "sss"
  },
  {
    "setting": "ttt",
    "value": "aa",
    "except": [
      {
        "value": "",
        "setting": "uu"
      },
      {
        "value": "bb",
        "setting": "bb"
      },
      {
        "value": "",
        "setting": "aa"
      }
    ]
  },
  {
    "setting": "uuu",
    "value": 5000,
  },
  {
    "setting": "vvv",
    "value": ""
  },
  {
    "setting": "www",
    "value": "main.html"
  },
  {
    "setting": "xxx",
    "value": "none"
  },
  {
    "setting": "yyy",
    "value": "aa"
  },
  {
    "setting": "zzz",
    "value": "proddata"
  },
  {
    "setting": "aaaa",
    "value": "aa",
    "except": [
      {
        "value": "bb",
        "users": [
          "internal"
        ]
      }
    ]
  },
  {
    "setting": "bbbb",
    "value": "aa",
    "except": [
      {
        "value": "aaa",
        "users": [
          "internal"
        ]
      }
    ]
  },
  {
    "setting": "cccc",
    "value": "aa"
  },
  {
    "setting": "dddd",
    "value": "bb"
  },
  {
    "setting": "eeee",
    "value": 80,
    "except": [
      {
        "value": 50,
        "browsers": [
          {
            "name": "firefox",
            "version": 0
          }
        ]
      }
    ]
  },
  {
    "setting": "ffff",
    "value": 7000
  },
  {
    "setting": "gggg",
    "value": "aa"
  },
  {
    "setting": "hhhh",
    "value": [
      "3011722490",
      "3011742191",
      "3011427492",
      "3013311146"
    ]
  },
  {
    "setting": "iiii",
    "value": {
      "30116146": "bb",
      "30112490": "aa",
      "30112491": "aa",
      "30112492": "aa",
      "30265084": "cc",
      "30264068": "ddd",
      "30328667": "ddd",
      "30321672": "ddd",
      "30323652": "ddd",
      "30308474": "eee",
      "30303454": "ff",
      "30306470": "aaaa"
    }
  },
  {
    "setting": "jjjj",
    "value": {}
  },
  {
    "setting": "kkkk",
    "value": "",
    "except": [
      {
        "value": "",
        "partners": [
          "all"
        ]
      },
      {
        "value": "",
        "buckets": [
          "bucketA"
        ]
      },
      {
        "value": "aa",
        "buckets": [
          "bucketB"
        ],
        "intls": [
          "us"
        ]
      },
      {
        "value": "fs_ctrl",
        "buckets": [
          "bucketC"
        ]
      }
    ]
  },
  {
    "setting": "mmmm",
    "value": "none",
    "except": [
      {
        "value": "en-GB",
        "partners": [
          "asdfa"
        ]
      }
    ]
  },
  {
    "setting": "nnnn",
    "value": {},
    "except": [
      {
        "setting": "mmmm",
        "value": {
          "a": "541583",
          "b": "541663",
          "c": "541322",
          "d": "541320",
          "e": "541394",
          "f": "517979"
        }
      },
      {
        "setting": "ddd",
        "value": {
          "a": "542155",
          "b": "543663",
          "c": "541322",
          "d": "541370",
          "e": "541394",
          "f": "547979"
        }
      },
    ]
  },
  {
    "setting": "oooo",
    "value": 60
  },
  {
    "setting": "qqqq",
    "value": "https://www.tumblr.com"
  },
  {
    "setting": "rrrr",
    "value": "https://twitter.com"
  },
  {
    "setting": "ssss",
    "value": "Yahoo"
  },
  {
    "setting": "tttt",
    "value": "https://pinterest.com"
  },
  {
    "setting": "uuuu",
    "value": "https://www.facebook.com"
  },
  {
    "setting": "vvvv",
    "value": "342534"
  },
  {
    "setting": "wwww",
    "value": "hi"
  },
  {
    "setting": "xxxx",
    "value": "b9e9c83-001b784d35e1"
  },
  {
    "setting": "yyyy",
    "value": "d3b9598a89-001b784d35e1"
  },
  {
    "setting": "zzzz",
    "value": "e0b61ee7a3a"
  },
  {
    "setting": "aaaaa",
    "value": "07b12949916"
  },
  {
    "setting": "bbbbb",
    "value": "aa174f1d99"
  },
  {
    "setting": "ccccc",
    "value": "1ce676d35e1"
  },
  {
    "setting": "ddddd",
    "value": "0c24a9916"
  },
  {
    "setting": "eeeee",
    "value": "f7e0acef4f721"
  },
  {
    "setting": "fffff",
    "value": "http://yahoo.com",
  },
  {
    "setting": "ggggg",
    "value": "https://yahoo.com",
  },
  {
    "setting": "hhhhh",
    "value": "hi"
  },
  {
    "setting": "iiiii",
    "value": "bb aa"
  },
  {
    "setting": "jjjjj",
    "value": "asdf"
  },
  {
    "setting": "kkkkk",
    "value": 6
  },
  {
    "setting": "lllll",
    "value": 2592000
  },
  {
    "setting": "mmmmm",
    "value": "nplggdlldoal"
  },
  {
    "setting": "nnnnn",
    "value": 6
  },
  {
    "setting": "ooooo",
    "value": "/hello",
    "except": [
      {
        "value": "/hello?env=staging",
        "settingA": [
          "23",
          "26"
        ]
      }
    ]
  },
  {
    "setting": "ppppp",
    "value": 3000
  },
  {
    "setting": "qqqqq",
    "value": 99
  },
  {
    "setting": "rrrrr",
    "value": 60000
  },
  {
    "setting": "sssss",
    "value": 100
  },
  {
    "setting": "ttttt",
    "value": "3.32"
  },
  {
    "setting": "uuuuu",
    "value": "/ws/cello"
  },
  {
    "setting": "vvvvv",
    "value": 10
  },
  {
    "setting": "wwwww",
    "value": 12
  },
  {
    "setting": "xxxxx",
    "value": 2
  },
  {
    "setting": "yyyyy",
    "value": 10
  },
  {
    "setting": "zzzzz",
    "value": [
      "first-light",
      "seascape-evening",
      "guadiana",
      "dark-abstract",
      "cool-abstract",
      "cherry-blossoms",
      "snow-globe",
      "candy-canes",
      "hazy-winter",
      "mountain-mist",
      "sunset",
      "warm-abstract",
      "console",
      "serengeti-sunrise",
      "liquid-sunshine",
      "bright-abstract",
      "spacemen-1",
      "trees-and-snow",
      "water-drops",
      "derecho",
      "cny-large-lantern",
      "singapore-fireworks"
    ]
  },
  {
    "setting": "aaaaaa",
    "value": 10
  },
  {
    "setting": "bbbbbb",
    "value": "https://calendar.com"
  },
  {
    "setting": "cccccc",
    "value": "aa"
  },
  {
    "setting": "dddddd",
    "value": "/hi"
  },
  {
    "setting": "eeeeee",
    "value": "fasdf"
  },
  {
    "setting": "ffffff",
    "value": {
      "xs": 10,
      "s": 13,
      "m": 16,
      "l": 24,
      "xl": 32,
      "xxl": 48
    }
  },
  {
    "setting": "gggggg",
    "value": {
      "large": 800,
      "small": 400
    }
  },
  {
    "setting": "hhhhhh",
    "value": 1,
    "except": [
      {
        "value": 3,
        "intls": [
          "fr"
        ]
      }
    ]
  },
  {
    "setting": "iiiiii",
    "value": "str"
  },
  {
    "setting": "jjjjjj",
    "value": "str_",
  },
  {
    "setting": "kkkkkk",
    "value": "www.yahoo.com",
    "except": [
      {
        "value": "www.verizon.com",
        "buckets": [
          "bucketN"
        ]
      }
    ]
  },
  {
    "setting": "llllll",
    "value": "assets/"
  },
  {
    "setting": "mmmmmm",
    "value": "0.05"
  },
  {
    "setting": "nnnnnn",
    "value": "a-1",
    "except": [
      {
        "value": "a-2",
        "buckets": [
          "bucketG"
        ]
      },
      {
        "value": "a-3",
        "buckets": [
          "bucketH"
        ]
      }
    ]
  },
  {
    "setting": "oooooo",
    "value": "a-2"
  },
  {
    "setting": "pppppp",
    "value": "a-1"
  },
  {
    "setting": "qqqqqq",
    "value": "a-2",
    "except": [
      {
        "value": "a-3",
        "buckets": [
          "bucketQ"
        ]
      }
    ]
  },
  {
    "setting": "rrrrrr",
    "value": "a-bf"
  },
  {
    "setting": "ssssss",
    "value": "a-bf-1"
  },
  {
    "setting": "tttttt",
    "value": "a-bf"
  },
  {
    "setting": "uuuuuu",
    "value": "pb"
  },
  {
    "setting": "vvvvvv",
    "value": "basdkgj"
  },
  {
    "setting": "wwwwww",
    "value": "bakgj"
  },
  {
    "setting": "xxxxxx",
    "value": "basdgj"
  },
  {
    "setting": "yyyyyy",
    "value": "/trending"
  },
  {
    "setting": "zzzzzz",
    "value": 14511600,
  },
  {
    "setting": "ab",
    "value": "asdf"
  },
  {
    "setting": "ac",
    "value": "asdf"
  },
  {
    "setting": "ad",
    "value": "agasdg"
  },
  {
    "setting": "ae",
    "value": [
      "58",
      "1201",
      "1202",
      "1207",
      "1209",
      "1210",
      "1211",
      "1216",
      "1249",
      "1260",
      "1261",
      "1267",
      "1268",
      "1402",
      "1403",
      "1407",
      "1411",
      "1414",
      "1415",
      "1416",
      "417",
      "423",
      "426",
      "427",
      "623",
      "649",
      "650",
      "811",
      "941"
    ]
  },
  {
    "setting": "af",
    "value": "none"
  },
  {
    "setting": "ag",
    "value": 30
  },
  {
    "setting": "ah",
    "value": "a"
  },
  {
    "setting": "ai",
    "value": "aj"
  },
  {
    "setting": "aj",
    "value": "adf"
  },
  {
    "setting": "ak",
    "value": {
      "asdf": "1"
    }
  },
  {
    "setting": "al",
    "value": {
      "d": "0",
      "b": "1"
    }
  },
  {
    "setting": "am",
    "value": {
      "d": "0",
      "f": "1"
    }
  },
  {
    "setting": "an",
    "value": {
      "a_tall_search": "80",
      "a_search": "81",
      "a_search_2": "82",
      "a_search_3": "100"
    }
  },
  {
    "setting": "ao",
    "value": "user",
    "except": [
      {
        "value": "hi",
        "users": [
          "someone"
        ]
      },
      {
        "value": "her",
        "setting": "aaa"
      },
      {
        "value": "he",
        "setting": "bbb"
      }
    ]
  },
  {
    "setting": "ap",
    "value": {
      "a": "0",
      "b": "1",
      "c": "2",
      "d": "3"
    }
  },
  {
    "setting": "aq",
    "value": 5,
    "except": [
      {
        "value": 9,
        "users": [
          "someone"
        ]
      }
    ]
  },
  {
    "setting": "ar",
    "value": "us,ca,uk,in,fr,de,br,sg,hk,kr,tw,ph,my,id,vn,th,cf,ro,mx,ar,es,e1,it,co,th,gr,za,tr,pe,cl,nl,se,ve,il,rs,ru,dk,at,no,pl,hu,bg,lt,hr,ua,fi,aa,cz,ee,lv,si,sk,xa,xe,xp"
  },
  {
    "setting": "as",
    "value": "us,ca,au,hk,id,in,kr,my,nz,ph,sg,th,tw,vn,cn,jp,at,ch,de,dk,es,fi,fr,it,nl,no,se,uk,ie,ar,bo,br,cl,co,cr,cu,do,ec,gt,hn,mx,ni,pa,pe,pr,py,sv,uy,ve"
  },
  {
    "setting": "at",
    "value": 2,
    "except": [
      {
        "value": 6,
        "setting": "fff"
      },
      {
        "value": 5,
        "setting": "aaa"
      }
    ]
  },
  {
    "setting": "au",
    "value": "2000"
  },
  {
    "setting": "av",
    "value": "2"
  },
  {
    "setting": "aw",
    "value": "100"
  },
  {
    "setting": "ax",
    "value": "asfasf"
  },
  {
    "setting": "ay",
    "value": "100"
  },
  {
    "setting": "az",
    "value": "4000"
  },
  {
    "setting": "aab",
    "value": "2100000"
  },
  {
    "setting": "aac",
    "value": "us,in,id,tw,ca,uk,it,es,de,fr"
  },
  {
    "setting": "aad",
    "value": "asfasfasf"
  },
  {
    "setting": "aae",
    "value": 2
  },
  {
    "setting": "aaf",
    "value": "7500"
  },
  {
    "setting": "aag",
    "value": "7500"
  },
  {
    "setting": "aah",
    "value": "-9999"
  },
  {
    "setting": "aai",
    "value": 260
  },
  {
    "setting": "aaj",
    "value": 154
  },
  {
    "setting": "aak",
    "value": "3,20"
  },
  {
    "setting": "aal",
    "value": "2000"
  },
  {
    "setting": "aam",
    "value": "asfasf/"
  },
  {
    "setting": "aan",
    "value": "200"
  },
  {
    "setting": "aao",
    "value": 20111027
  },
  {
    "setting": "aap",
    "value": "us,kr,co,cl,ve,pe,e1,xa,xe"
  },
  {
    "setting": "aaq",
    "value": "2"
  },
  {
    "setting": "aar",
    "value": "2"
  },
  {
    "setting": "aas",
    "value": "3,3"
  },
  {
    "setting": "aat",
    "value": "50"
  },
  {
    "setting": "aau",
    "value": "4"
  },
  {
    "setting": "aav",
    "value": "4"
  },
  {
    "setting": "aaw",
    "value": "uk:4,in:3"
  },
  {
    "setting": "aax",
    "value": "asdfasdf"
  },
  {
    "setting": "aay",
    "value": "all"
  },
  {
    "setting": "aaz",
    "value": "aa,ar,at,au,b5,be,bg,br,ca,cf,ch,cl,cn,co,cz,de,dk,e1,ee,es,fi,fr,gr,hi,hk,hr,hu,id,ie,il,in,it,jp,kr,lt,lv,mx,my,nl,no,nz,nz_abcdefg,pe,ph,pl,ro,rs,ru,se,sg,si,sk,th,tr,tw,ua,uk,ve,vn,xa,xe,xp,za"
  },
  {
    "setting": "ba",
    "value": "2"
  },
  {
    "setting": "bc",
    "value": "2"
  },
  {
    "setting": "bd",
    "value": ""
  },
  {
    "setting": "be",
    "value": "255"
  },
  {
    "setting": "bf",
    "value": "100"
  },
  {
    "setting": "bg",
    "value": "asdf"
  },
  {
    "setting": "bh",
    "value": "asdf"
  },
  {
    "setting": "bi",
    "value": "100000"
  },
  {
    "setting": "bj",
    "value": "70"
  },
  {
    "setting": "bk",
    "value": "60"
  },
  {
    "setting": "bl",
    "value": "2000"
  },
  {
    "setting": "bm",
    "value": "asdfasd"
  },
  {
    "setting": "bn",
    "value": "none"
  },
  {
    "setting": "bo",
    "value": "2100000"
  },
  {
    "setting": "bp",
    "value": "a1"
  },
  {
    "setting": "bq",
    "value": "a2"
  },
  {
    "setting": "br",
    "value": "a3"
  },
  {
    "setting": "bs",
    "value": "0"
  },
  {
    "setting": "bt",
    "value": "19a8ad9",
    "except": [
      {
        "value": "19ad1c8ad9",
        "stages": [
          "prod",
          "pilot",
          "qa"
        ]
      },
      {
        "value": "597838ad9",
        "stages": [
          "dev"
        ]
      }
    ]
  },
  {
    "setting": "bu",
    "value": "ab",
    "except": [
      {
        "value": "abc",
        "stages": [
          "prod",
          "pilot"
        ]
      },
      {
        "value": "ab",
        "stages": [
          "qa"
        ]
      },
      {
        "value": "a",
        "stages": [
          "dev"
        ]
      }
    ]
  },
  {
    "setting": "bv",
    "value": "ab",
    "except": [
      {
        "value": "abc",
        "stages": [
          "prod",
          "pilot",
          "qa"
        ]
      },
      {
        "value": "abcd",
        "stages": [
          "dev"
        ]
      }
    ]
  },
  {
    "setting": "bw",
    "value": "a",
    "except": [
      {
        "value": "ab",
        "stages": [
          "prod",
          "pilot",
          "qa"
        ]
      },
      {
        "value": "abc",
        "stages": [
          "dev"
        ]
      }
    ]
  },
  {
    "setting": "bx",
    "value": "cre38ad9",
    "except": [
      {
        "value": "cre8838ad9",
        "stages": [
          "prod",
          "pilot",
          "qa"
        ]
      },
      {
        "value": "crad9",
        "stages": [
          "dev"
        ]
      }
    ]
  },
  {
    "setting": "by",
    "value": 1
  },
  {
    "setting": "bz",
    "value": 1
  },
  {
    "setting": "ca",
    "value": 0
  },
  {
    "setting": "cb",
    "value": 0
  },
  {
    "setting": "cd",
    "value": "asdf",
    "except": [
      {
        "value": "asf",
        "stages": [
          "prod",
          "pilot",
          "qa"
        ]
      },
      {
        "value": "asdfasdf",
        "stages": [
          "dev"
        ]
      }
    ]
  },
  {
    "setting": "ce",
    "value": "a",
    "except": [
      {
        "value": "b",
        "stages": [
          "prod",
          "pilot",
          "qa",
          "dev"
        ]
      }
    ]
  },
  {
    "setting": "cf",
    "value": 50
  },
  {
    "setting": "cg",
    "value": 1
  },
  {
    "setting": "ch",
    "value": "prod",
    "except": [
      {
        "value": "qa",
        "stages": [
          "qa",
          "dev"
        ]
      }
    ]
  },
  {
    "setting": "ci",
    "value": 1
  },
  {
    "setting": "cj",
    "value": 30
  },
  {
    "setting": "ck",
    "value": ""
  },
  {
    "setting": "cl",
    "value": "en-"
  },
  {
    "setting": "cm",
    "value": "asdgkhklasdg"
  },
  {
    "setting": "cn",
    "value": "alsfj"
  },
  {
    "setting": "co",
    "value": 5,
    "except": [
      {
        "value": 100,
        "stages": [
          "qa"
        ]
      }
    ]
  },
  {
    "setting": "cp",
    "value": 100,
    "except": [
      {
        "value": 100,
        "stages": [
          "qa"
        ]
      }
    ]
  },
  {
    "setting": "cq",
    "value": "",
    "except": [
      {
        "value": "0.9.js",
        "buckets": [
          "bucketJ"
        ]
      }
    ]
  },
  {
    "setting": "cr",
    "value": "0.3.3.min.js"
  },
  {
    "setting": "cs",
    "value": "0.3.3.min.js"
  },
  {
    "setting": "ct",
    "value": {
      "a": 0,
      "b": 1
    }
  },
  {
    "setting": "cu",
    "value": "49847"
  },
  {
    "setting": "cv",
    "value": "ssads"
  },
  {
    "setting": "cw",
    "value": 7
  },
  {
    "setting": "cx",
    "value": 100
  },
  {
    "setting": "cy",
    "value": ""
  },
  {
    "setting": "cz",
    "value": 3
  },
  {
    "setting": "da",
    "value": 6000
  },
  {
    "setting": "db",
    "value": 5000
  },
  {
    "setting": "dc",
    "value": 30,
    "except": [
      {
        "value": 100,
        "stages": [
          "pilot",
          "dev",
          "qa"
        ]
      },
      {
        "value": 50,
        "setting": "aa"
      },
      {
        "value": 50,
        "setting": "bb"
      }
    ]
  },
  {
    "setting": "de",
    "value": 50
  },
  {
    "setting": "df",
    "value": 10
  },
  {
    "setting": "dg",
    "value": 10
  },
  {
    "setting": "dh",
    "value": "0"
  },
  {
    "setting": "di",
    "value": {
      "broadband": {
        "batch": 2,
        "limit": 2
      },
      "cable": {
        "batch": 2,
        "limit": 2
      },
      "dialup": {
        "batch": 1,
        "limit": 1
      }
    }
  },
  {
    "setting": "dj",
    "value": 1000
  },
  {
    "setting": "dk",
    "value": 500
  },
  {
    "setting": "dl",
    "value": 3000
  },
  {
    "setting": "dm",
    "value": 20000
  },
  {
    "setting": "dn",
    "value": 300
  },
  {
    "setting": "do",
    "value": 20000
  },
  {
    "setting": "dp",
    "value": 20000
  },
  {
    "setting": "dq",
    "value": [
      "1221",
      "1214"
    ]
  },
  {
    "setting": "dr",
    "value": {
      "1428,1200-1226,1229,1245,1247,1249-1262,1267-1268,1404,1601,1632-1636,1638-1640,1645-1648": 1
    }
  },
  {
    "setting": "ds",
    "value": "asdf"
  },
  {
    "setting": "dt",
    "value": "asdf/manage"
  },
  {
    "setting": "du",
    "value": 14100,
    "except": [
      {
        "value": 1420,
        "intls": [
          "uk",
          "de",
          "fr",
          "e1"
        ]
      }
    ]
  },
  {
    "setting": "dv",
    "value": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    "setting": "dw",
    "value": "asdf",
    "except": [
      {
        "value": "ahgahasd",
        "stages": [
          "dev"
        ]
      }
    ]
  },
  {
    "setting": "dx",
    "value": "asdfgaa",
    "except": [
      {
        "value": "asdgasdfg",
        "stages": [
          "dev"
        ]
      }
    ]
  },
  {
    "setting": "dy",
    "value": "asdf"
  },
  {
    "setting": "dz",
    "value": "asdf"
  },
  {
    "setting": "ea",
    "value": "asf"
  },
  {
    "setting": "eb",
    "value": "newsstreamremote"
  },
  {
    "setting": "ec",
    "value": "newsstreamxhr"
  },
  {
    "setting": "ed",
    "value": false
  },
  {
    "setting": "ei",
    "value": 1000
  },
  {
    "setting": "ef",
    "value": "asfagasf"
  },
  {
    "setting": "eg",
    "value": "_remote"
  },
  {
    "setting": "eh",
    "value": "api"
  },
  {
    "setting": "ej",
    "value": "remote"
  },
  {
    "setting": "ek",
    "value": "ee"
  },
  {
    "setting": "el",
    "value": 86400
  },
  {
    "setting": "em",
    "value": 600
  },
  {
    "setting": "en",
    "value": "ajsdlfj"
  },
  {
    "setting": "eo",
    "value": 86400
  },
  {
    "setting": "ep",
    "value": 600
  },
  {
    "setting": "eq",
    "value": "asdf",
    "except": [
      {
        "value": "asdfasdf",
        "stages": [
          "dev"
        ]
      }
    ]
  },
  {
    "setting": "er",
    "value": "breakingnews"
  },
  {
    "setting": "es",
    "value": "%A, %B %d"
  },
  {
    "setting": "et",
    "value": "fffffff",
    "except": [
      {
        "value": "asdfasdfasdfasdf",
        "settingA": [
          "9323"
        ]
      }
    ]
  },
  {
    "setting": "eu",
    "value": 200
  },
  {
    "setting": "ev",
    "value": 700
  },
  {
    "setting": "ew",
    "value": 2000
  },
  {
    "setting": "ex",
    "value": 5
  },
  {
    "setting": "ey",
    "value": 15
  },
  {
    "setting": "ez",
    "value": 1800
  },
  {
    "setting": "fa",
    "value": 1000
  },
  {
    "setting": "fb",
    "value": 200
  },
  {
    "setting": "fc",
    "value": "100",
    "except": [
      {
        "value": "200",
        "buckets": [
          "001",
          "002",
          "003",
          "004",
          "005"
        ]
      },
      {
        "value": "300",
        "buckets": [
          "002",
          "001",
          "003",
          "004",
          "005"
        ]
      }
    ]
  },
  {
    "setting": "fd",
    "value": 5000,
    "except": [
      {
        "value": 10000,
        "buckets": [
          "10"
        ]
      },
      {
        "value": 15000,
        "buckets": [
          "15"
        ]
      },
      {
        "value": 20000,
        "buckets": [
          "20"
        ]
      },
      {
        "value": 25000,
        "buckets": [
          "25"
        ]
      },
      {
        "value": 30000,
        "buckets": [
          "30",
          "LH30"
        ]
      }
    ]
  },
  {
    "setting": "fe",
    "value": 120000
  },
  {
    "setting": "fg",
    "value": "asfasfasfsaf"
  },
  {
    "setting": "fh",
    "value": "asfagfasgasdgads"
  },
  {
    "setting": "fi",
    "value": [],
    "except": [
      {
        "langs": [
          "ar",
          "en-JO"
        ],
        "value": [
          {
            "name": "Arabic Transparent",
            "value": "Arabic Transparent, Arial"
          },
          {
            "name": "Simplified Arabic",
            "value": "Simplified Arabic, Arial"
          }
        ]
      },
      {
        "langs": [
          "ko"
        ],
        "value": [
          {
            "name": "굴림",
            "value": "굴림, gulim, sans-serif"
          },
          {
            "name": "돋움",
            "value": "돋움, dotum, sans-serif"
          },
          {
            "name": "바탕",
            "value": "바탕, batang, serif"
          },
          {
            "name": "궁서",
            "value": "궁서, gungsuh, serif"
          }
        ]
      },
      {
        "langs": [
          "zh-Hans-CN"
        ],
        "value": [
          {
            "name": "宋体",
            "value": "宋体, simsun, serif"
          },
          {
            "name": "新宋体",
            "value": "新宋体, nsimsun, sans-serif"
          },
          {
            "name": "黑体",
            "value": "黑体, simhei, sans-serif"
          }
        ]
      },
      {
        "langs": [
          "zh-Hant-HK",
          "zh-Hant-TW"
        ],
        "value": [
          {
            "name": "細明體",
            "value": "細明體, mingliu, serif"
          },
          {
            "name": "新細明體",
            "value": "新細明體, pmingliu, serif"
          },
          {
            "name": "標楷體",
            "value": "標楷體, dfkai-sb"
          }
        ]
      }
    ]
  },
  {
    "setting": "fj",
    "value": 3000,
    "except": [
      {
        "value": 3500,
        "buckets": [
          "035"
        ]
      },
      {
        "value": 4000,
        "buckets": [
          "04"
        ]
      },
      {
        "value": 4500,
        "buckets": [
          "045"
        ]
      },
      {
        "value": 5000,
        "buckets": [
          "05",
          "T05"
        ]
      },
      {
        "value": 7000,
        "buckets": [
          "07"
        ]
      },
      {
        "value": 10000,
        "buckets": [
          "10"
        ]
      }
    ]
  },
  {
    "setting": "fk",
    "value": "purple"
  },
  {
    "setting": "fl",
    "value": 25000
  },
  {
    "setting": "fm",
    "value": 2000
  },
  {
    "setting": "fn",
    "value": 1433142000
  },
  {
    "setting": "fo",
    "value": [
      1,
      8,
      15,
      22,
      25,
      27,
      29,
      30
    ]
  },
  {
    "setting": "fp",
    "value": "asfasfasf"
  },
  {
    "setting": "fq",
    "value": -1
  },
  {
    "setting": "fr",
    "value": 3
  },
  {
    "setting": "fs",
    "value": "asfgasgasg"
  },
  {
    "setting": "ft",
    "value": "asdfasdfasdf"
  },
  {
    "setting": "fu",
    "value": "asdgasdgasdhasd"
  },
  {
    "setting": "fv",
    "value": "gabadsfa"
  },
  {
    "setting": "fw",
    "value": "asdhgashc"
  },
  {
    "setting": "fx",
    "value": "ajldgkjaskj",
    "except": [
      {
        "users": [
          "internal",
          "someone"
        ],
        "value": "adslokfhjkafhj"
      }
    ]
  },
  {
    "setting": "fy",
    "value": 300,
    "except": [
      {
        "value": 1000,
        "settingA": [
          "9323",
          "3100"
        ]
      }
    ]
  },
  {
    "setting": "fz",
    "value": "aa"
  },
  {
    "setting": "ga",
    "value": "aa"
  },
  {
    "setting": "gb",
    "value": "aa"
  },
  {
    "setting": "gc",
    "value": 953
  },
  {
    "setting": "gd",
    "value": 15000
  },
  {
    "setting": "ge",
    "value": 1000,
    "except": [
      {
        "value": 6000,
        "users": [
          "someone"
        ]
      }
    ]
  },
  {
    "setting": "gf",
    "value": 200,
    "except": [
      {
        "value": 250,
        "setting": "as"
      }
    ]
  },
  {
    "setting": "gh",
    "value": 1,
    "except": [
      {
        "value": 1,
        "users": [
          "someone",
          "another",
          "anotherAssoc"
        ]
      },
      {
        "value": 1,
        "setting": "aa"
      },
      {
        "value": 2,
        "setting": "bb"
      }
    ]
  },
  {
    "setting": "gi",
    "value": 86400
  },
  {
    "setting": "gj",
    "value": "aflkjaskjdfg"
  },
  {
    "setting": "gk",
    "value": 60
  },
  {
    "setting": "gl",
    "value": 30
  },
  {
    "setting": "gm",
    "value": 120
  },
  {
    "setting": "gn",
    "value": 15
  },
  {
    "setting": "go",
    "value": [
      "yahoo",
      "google",
      "aol",
      "outlook"
    ]
  },
  {
    "setting": "gp",
    "value": "asdgasdgasdg"
  },
  {
    "setting": "gq",
    "value": 2000
  },
  {
    "setting": "gr",
    "value": 3000
  },
  {
    "setting": "gs",
    "value": 3600
  },
  {
    "setting": "gt",
    "value": "ivy"
  },
  {
    "setting": "gu",
    "value": "desktop"
  },
  {
    "setting": "gv",
    "value": "empty"
  },
  {
    "setting": "gw",
    "value": "175x219"
  },
  {
    "setting": "gx",
    "value": 10
  },
  {
    "setting": "gy",
    "value": "recent"
  },
  {
    "setting": "gz",
    "value": "community"
  },
  {
    "setting": "ha",
    "value": "empty"
  },
  {
    "setting": "hb",
    "value": "asdg"
  },
  {
    "setting": "hc",
    "value": 630
  },
  {
    "setting": "hd",
    "value": 0
  },
  {
    "setting": "he",
    "value": "afhashas"
  },
  {
    "setting": "hf",
    "value": 1097
  },
  {
    "setting": "hg",
    "value": "hi"
  },
  {
    "setting": "hi",
    "value": "html"
  },
  {
    "setting": "hj",
    "value": {
      "e": {
        "at": "gasd",
        "ct": "hgafh"
      }
    }
  },
  {
    "setting": "hk",
    "value": [
      "logger"
    ]
  },
  {
    "setting": "hl",
    "value": 0.5
  },
  {
    "setting": "hm",
    "value": 0
  },
  {
    "setting": "hn",
    "value": 1
  },
  {
    "setting": "ho",
    "value": 1
  },
  {
    "setting": "hp",
    "value": 10
  },
  {
    "setting": "hq",
    "value": "asdsdf",
    "except": [
      {
        "value": "asdfasdf",
        "partners": [
          "somePartner"
        ]
      },
      {
        "value": "adf",
        "browsers": [
          {
            "name": "ie",
            "version": 10
          }
        ]
      }
    ]
  },
  {
    "setting": "hr",
    "value": "asdgasdgasdg"
  },
  {
    "setting": "hs",
    "value": 5000
  },
  {
    "setting": "ht",
    "value": "asdfgkhasklhdg"
  },
  {
    "setting": "hu",
    "value": 5000
  },
  {
    "setting": "hv",
    "value": 50
  },
  {
    "setting": "hw",
    "value": 70
  },
  {
    "setting": "hx",
    "value": 0
  },
  {
    "setting": "hy",
    "value": [
      "lunch"
    ]
  },
  {
    "setting": "hz",
    "value": 0
  },
  {
    "setting": "ia",
    "value": 1500
  },
  {
    "setting": "ib",
    "value": "v3.1."
  },
  {
    "setting": "ic",
    "value": false
  },
  {
    "setting": "id",
    "value": false
  },
  {
    "setting": "ie",
    "value": true
  }, {
    "setting": "if",
    "value": false
  },
  {
    "setting": "ig",
    "value": false
  },
  {
    "setting": "ih",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01",
          "bucket02",
          "bucket03",
          "bucket04"
        ]
      }
    ],
    "setting": "ij",
    "value": false
  },
  {
    "setting": "ik",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "stages": [
          "dev"
        ]
      }
    ],
    "setting": "il",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "im",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "LET01"
        ]
      }
    ],
    "setting": "in",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "LET02"
        ]
      }
    ],
    "setting": "io",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "LET03"
        ]
      }
    ],
    "setting": "ip",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "setting": "aa"
      },
      {
        "value": true,
        "setting": "bb"
      },
      {
        "value": true,
        "setting": "cc"
      }
    ],
    "setting": "iq",
    "value": false
  },
  {
    "setting": "ir",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "aa"
      }
    ],
    "setting": "is",
    "value": false
  },
  {
    "setting": "it",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "ACT01"
        ]
      }
    ],
    "setting": "iu",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "ACC01"
        ]
      }
    ],
    "setting": "iv",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "settingA": [
          "9326",
          "3000..5999"
        ]
      }
    ],
    "setting": "force",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "aa"
      },
      {
        "value": false,
        "setting": "bb"
      },
      {
        "value": true,
        "buckets": [
          "ART01"
        ]
      }
    ],
    "setting": "iw",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "ab"
      },
      {
        "value": false,
        "setting": "ac"
      },
      {
        "value": true,
        "buckets": [
          "ART02"
        ]
      }
    ],
    "setting": "ix",
    "value": false
  },
  {
    "setting": "iy",
    "value": false
  },
  {
    "setting": "iz",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01",
          "bucket02",
          "bucket03",
          "bucket04",
          "bucket05",
          "bucket06",
          "bucket07",
          "bucket08",
          "bucket09",
          "bucket10",
          "bucket11",
          "bucket12",
          "bucket13",
          "bucket14",
          "bucket15",
          "bucket16",
          "bucket17"
        ]
      }
    ],
    "setting": "ja",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "OUT01"
        ]
      },
      {
        "value": false,
        "partners": [
          "all"
        ]
      }
    ],
    "setting": "jb",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "OUT02"
        ]
      },
      {
        "value": false,
        "partners": [
          "all"
        ]
      }
    ],
    "setting": "jc",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "OUT01"
        ]
      },
      {
        "value": false,
        "partners": [
          "all"
        ]
      }
    ],
    "setting": "jd",
    "value": false
  },
  {
    "setting": "je",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "nn"
      }
    ],
    "setting": "jf",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "setting": "bbb"
      },
      {
        "value": false,
        "setting": "ccc"
      }
    ],
    "setting": "jg",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "setting": "ddd"
      }
    ],
    "setting": "jh",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "ji",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "jk",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      }
    ],
    "setting": "jl",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket48"
        ]
      }
    ],
    "setting": "jm",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket48"
        ]
      }
    ],
    "setting": "jn",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "jo",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket02"
        ]
      }
    ],
    "setting": "jp",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "jq",
    "value": false
  },
  {
    "setting": "jr",
    "value": false
  },
  {
    "setting": "js",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "users": [
          "another"
        ]
      }
    ],
    "setting": "jt",
    "value": true
  },
  {
    "setting": "ju",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "setting": "aa"
      },
      {
        "value": true,
        "setting": "bb"
      }
    ],
    "setting": "jv",
    "value": true
  },
  {
    "setting": "jw",
    "value": false
  },
  {
    "setting": "jx",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "aa"
      },
      {
        "value": true,
        "os": "win",
        "osver": "10",
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "jy",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "bbbb"
      },
      {
        "value": true,
        "os": "win",
        "osver": "10",
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "jz",
    "value": false
  },
  {
    "setting": "ka",
    "value": true
  },
  {
    "setting": "kb",
    "value": false
  },
  {
    "setting": "kc",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "aaa"
      },
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "users": [
          "someone",
          "another",
          "anotherAssoc"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucket01",
          "bucket001"
        ]
      }
    ],
    "setting": "kd",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "users": [
          "someone",
          "another",
          "anotherAssoc"
        ]
      },
      {
        "value": true,
        "langs": [
          "en-US"
        ],
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "ke",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "aa",
        "buckets": [
          "bucket01",
          "bucket02",
          "bucket03",
          "bucket04",
          "bucket05",
          "bucket06",
          "bucket07",
          "bucket08",
          "bucket09",
          "bucket10",
          "bucket11",
          "bucket12"
        ]
      }
    ],
    "setting": "kf",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "agadg",
        "buckets": [
          "bucket001",
          "bucket002"
        ]
      }
    ],
    "setting": "kg",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "users": [
          "someone",
          "another",
          "anotherAssoc"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket001"
        ]
      }
    ],
    "setting": "kh",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "gg"
      }
    ],
    "setting": "ki",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "users": [
          "another",
          "anotherAssoc"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucket27"
        ]
      },
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketB1",
          "bucketB2"
        ]
      }
    ],
    "setting": "kj",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucketB2"
        ]
      },
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ],
        "setting": "aaaaa"
      }
    ],
    "setting": "kl",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "bbbbb"
      }
    ],
    "setting": "km",
    "value": false
  },
  {
    "setting": "kn",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "settingA": [
          "1330"
        ]
      }
    ],
    "setting": "ko",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ]
      },
      {
        "value": true,
        "setting": "ggg"
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucket01"
        ]
      },
      {
        "value": false,
        "partners": [
          "asdf",
          "abcdefg"
        ]
      },
      {
        "value": true,
        "langs": [
          "en"
        ]
      }
    ],
    "setting": "kp",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "kr",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "ks",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "langs": [
          "en-US"
        ]
      }
    ],
    "setting": "kt",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "percentage": 2,
        "browsers": [
          {
            "name": "chrome",
            "version": 0
          }
        ]
      }
    ],
    "setting": "ku",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "aabc"
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "users": [
          "others"
        ],
        "randompercentage": 0.1
      },
      {
        "value": true,
        "randompercentage": 0.01
      }
    ],
    "setting": "kv",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "langs": [
          "en"
        ]
      }
    ],
    "setting": "kw",
    "value": false
  },
  {
    "setting": "kx",
    "value": true
  },
  {
    "setting": "ky",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "langs": [
          "en"
        ]
      }
    ],
    "setting": "kz",
    "value": false
  },
  {
    "setting": "la",
    "value": true
  },
  {
    "setting": "lb",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "setting": "aa"
      },
      {
        "value": true,
        "setting": "bb"
      }
    ],
    "setting": "lc",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "ld",
    "value": false
  },
  {
    "setting": "le",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "intls": [
          "us"
        ],
        "langs": [
          "en-US"
        ]
      }
    ],
    "setting": "lf",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket25"
        ],
        "setting": "bbbb"
      }
    ],
    "setting": "lg",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket25"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "lh",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket26"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "li",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket26"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "lj",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket18"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "lk",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket18"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "lm",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket12"
        ]
      }
    ],
    "setting": "ln",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucket12",
          "bucket12",
          "bucket19"
        ]
      },
      {
        "value": true,
        "setting": "bbbbb"
      }
    ],
    "setting": "lo",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket19"
        ]
      }
    ],
    "setting": "lp",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket12",
          "bucket19"
        ]
      }
    ],
    "setting": "lq",
    "value": false
  },
  {
    "setting": "lr",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket29"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "ls",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket29"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "lt",
    "value": false
  },
  {
    "setting": "lu",
    "value": false
  },
  {
    "setting": "lv",
    "value": false
  },
  {
    "setting": "lw",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "langs": [
          "ar-JO",
          "en-JO",
          "he-IL",
          "ur-PK"
        ]
      }
    ],
    "setting": "lx",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket17"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "ly",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "setting": "li"
      },
      {
        "value": true,
        "setting": "lj"
      },
      {
        "value": true,
        "setting": "lk"
      }
    ],
    "setting": "lz",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "gu"
      }
    ],
    "setting": "ma",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket17"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "mb",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "hi"
      }
    ],
    "setting": "mc",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "a"
      },
      {
        "value": true,
        "setting": "b"
      },
      {
        "value": false,
        "setting": "c"
      }
    ],
    "setting": "md",
    "value": false
  },
  {
    "setting": "me",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "users": [
          "another"
        ]
      }
    ],
    "setting": "mf",
    "value": true
  },
  {
    "setting": "mg",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "langs": [
          "en",
          "gu",
          "hi",
          "kn",
          "ml",
          "mr",
          "ta",
          "te",
          "th",
          "ur"
        ]
      }
    ],
    "setting": "mh",
    "value": true
  },
  {
    "setting": "mi",
    "value": true
  },
  {
    "setting": "mj",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "langs": [
          "ar",
          "he",
          "ur"
        ]
      }
    ],
    "setting": "mk",
    "value": false
  },
  {
    "setting": "ml",
    "value": false
  },
  {
    "setting": "mn",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "randompercentage": 10
      }
    ],
    "setting": "mo",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ],
        "countries": [
          "us"
        ]
      }
    ],
    "setting": "mp",
    "value": false
  },
  {
    "setting": "mq",
    "value": true
  },
  {
    "setting": "mr",
    "value": true
  },
  {
    "setting": "ms",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "percentage": 10
      }
    ],
    "setting": "mt",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": false,
        "intls": [
          "de"
        ]
      },
      {
        "value": false,
        "browsers": [
          {
            "name": "safari",
            "version": 6
          }
        ]
      },
      {
        "value": false,
        "ages": [
          "minor"
        ]
      }
    ],
    "setting": "mu",
    "value": true
  },
  {
    "setting": "mv",
    "value": false
  },
  {
    "setting": "mw",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "mw"
      },
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "mx",
    "value": false
  },
  {
    "setting": "my",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "mx"
      }
    ],
    "setting": "mz",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucketU"
        ]
      }
    ],
    "setting": "na",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "na"
      },
      {
        "value": true,
        "setting": "mz"
      }
    ],
    "setting": "nb",
    "value": false
  },
  {
    "setting": "nc",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "qa",
          "dev"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      }
    ],
    "setting": "nd",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "langs": [
          "en-US"
        ]
      },
      {
        "value": true,
        "stages": [
          "qa",
          "dev"
        ]
      }
    ],
    "setting": "ne",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "browsers": [
          {
            "name": "ie",
            "version": 10
          }
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "nf",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "setting": "na"
      }
    ],
    "setting": "ng",
    "value": false
  },
  {
    "setting": "nh",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "ng"
      }
    ],
    "setting": "ni",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "ng"
      }
    ],
    "setting": "nj",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "setting": "ng"
      }
    ],
    "setting": "nk",
    "value": true
  },
  {
    "setting": "nl",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "setting": "ng"
      }
    ],
    "setting": "nm",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucket24"
        ]
      }
    ],
    "setting": "no",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "setting": "ng"
      }
    ],
    "setting": "np",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "setting": "ng"
      }
    ],
    "setting": "nq",
    "value": false
  },
  {
    "setting": "nr",
    "value": false
  },
  {
    "setting": "ns",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "nr"
      },
      {
        "value": true,
        "setting": "ns"
      },
      {
        "value": false,
        "users": [
          "someone"
        ]
      },
      {
        "value": false,
        "setting": "abd"
      },
      {
        "value": true,
        "setting": "ng"
      }
    ],
    "setting": "nt",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "abd"
      },
      {
        "value": false,
        "users": [
          "someone"
        ]
      }
    ],
    "setting": "nu",
    "value": false
  },
  {
    "setting": "nv",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "nw",
    "value": false
  },
  {
    "setting": "nx",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ],
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "langs": [
          "cs",
          "da",
          "de",
          "en",
          "es",
          "et",
          "fi",
          "fil",
          "fr",
          "hr",
          "hu",
          "id",
          "it",
          "lt",
          "lv",
          "nb",
          "nl",
          "pl",
          "pt",
          "ro",
          "sk",
          "sl",
          "sv",
          "tr"
        ]
      }
    ],
    "setting": "ny",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "setting": "ny"
      }
    ],
    "setting": "nz",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "setting": "aa"
      }
    ],
    "setting": "oa",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "intls": [
          "us"
        ],
        "langs": [
          "en"
        ]
      }
    ],
    "setting": "ob",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ],
        "buckets": [
          "bucket01"
        ],
        "intls": [
          "us"
        ],
        "langs": [
          "en"
        ]
      }
    ],
    "setting": "oc",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "randompercentage": 1
      },
      {
        "value": true,
        "setting": "oa"
      }
    ],
    "setting": "od",
    "value": false
  },
  {
    "setting": "oe",
    "value": false
  },
  {
    "setting": "of",
    "value": false
  },
  {
    "setting": "og",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "ab"
      }
    ],
    "setting": "oh",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "oi",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "stages": [
          "qa",
          "dev"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketA"
        ]
      }
    ],
    "setting": "oj",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucket01"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketCB"
        ]
      }
    ],
    "setting": "ok",
    "value": true
  },
  {
    "setting": "ol",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "ol"
      },
      {
        "value": false,
        "setting": "ba"
      }
    ],
    "setting": "om",
    "value": true
  },
  {
    "setting": "on",
    "value": false
  },
  {
    "setting": "op",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "op"
      }
    ],
    "setting": "oq",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "op"
      }
    ],
    "setting": "or",
    "value": false
  },
  {
    "setting": "os",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "stages": [
          "qa",
          "dev"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket1"
        ]
      }
    ],
    "setting": "ot",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "intls": [
          "us"
        ],
        "browsers": [
          {
            "name": "chrome",
            "version": 0
          }
        ],
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "ou",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "browsers": [
          {
            "name": "chrome",
            "version": 0
          }
        ],
        "os": "win",
        "buckets": [
          "bucket01"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "ox",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "browsers": [
          {
            "name": "chrome",
            "version": 0
          }
        ],
        "os": "win",
        "buckets": [
          "bucket02"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "ow",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "browsers": [
          {
            "name": "chrome",
            "version": 0
          }
        ],
        "os": "win",
        "buckets": [
          "bucketC1"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "ov",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "oy",
    "value": false
  },
  {
    "setting": "oz",
    "value": false
  },
  {
    "setting": "pa",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "stages": [
          "qa",
          "dev"
        ]
      }
    ],
    "setting": "pb",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "stages": [
          "qa",
          "dev"
        ]
      }
    ],
    "setting": "pc",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "stages": [
          "qa",
          "dev"
        ]
      }
    ],
    "setting": "pd",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "fds"
      }
    ],
    "setting": "pe",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "ages": [
          "adult"
        ],
        "partners": [
          "none"
        ],
        "langs": [
          "en-US"
        ],
        "buckets": [
          "TBD"
        ]
      },
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      }
    ],
    "setting": "pf",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "pg"
      },
      {
        "value": true,
        "buckets": [
          "bucket08",
          "bucket07",
          "bucket06",
          "bucket05",
          "bucketL05"
        ]
      }
    ],
    "setting": "ph",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucketC2"
        ]
      },
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket01",
          "bucket02"
        ]
      },
      {
        "value": true,
        "setting": "aa"
      }
    ],
    "setting": "pi",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "pj",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "setting": "asdf",
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "pk",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "pl",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "aba",
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "pm",
    "value": false
  },
  {
    "setting": "pn",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "po",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "pq",
    "value": false
  },
  {
    "setting": "pr",
    "value": true
  },
  {
    "setting": "ps",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "pt",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "pu",
    "value": false
  },
  {
    "setting": "pv",
    "value": true
  },
  {
    "setting": "pw",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      },
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      }
    ],
    "setting": "px",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "py",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "pz",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketT01"
        ]
      }
    ],
    "setting": "qa",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "qb",
    "value": false
  },
  {
    "setting": "qc",
    "value": true
  },
  {
    "setting": "qd",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "abcdefg"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucket03"
        ]
      },
      {
        "value": true,
        "intls": [
          "at",
          "br",
          "ca",
          "cf",
          "de",
          "dk",
          "es",
          "fi",
          "fr",
          "hk",
          "in",
          "it",
          "mx",
          "nl",
          "no",
          "se",
          "sg",
          "tw",
          "uk",
          "us"
        ]
      }
    ],
    "setting": "qe",
    "value": false
  },
  {
    "setting": "qf",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket02"
        ],
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "qg",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "setting": "aab",
        "stages": [
          "dev",
          "qa",
          "pilot"
        ],
        "users": [
          "someone"
        ]
      }
    ],
    "setting": "qh",
    "value": false
  },
  {
    "setting": "qi",
    "value": true
  },
  {
    "setting": "qj",
    "value": false
  },
  {
    "setting": "qk",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "bbd"
      }
    ],
    "setting": "ql",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      }
    ],
    "setting": "qm",
    "value": false
  },
  {
    "setting": "qn",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "users": [
          "someone"
        ]
      },
      {
        "value": false,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucket01"
        ],
        "intls": [
          "us"
        ],
        "langs": [
          "en"
        ]
      },
      {
        "value": false,
        "intls": [
          "us"
        ],
        "langs": [
          "en"
        ],
        "percentage": 10
      }
    ],
    "setting": "qo",
    "value": false
  },
  {
    "setting": "qp",
    "value": false
  },
  {
    "setting": "qr",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "setting": "qr"
      }
    ],
    "setting": "qs",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      }
    ],
    "setting": "qt",
    "value": false
  },
  {
    "setting": "qu",
    "value": false
  },
  {
    "setting": "qv",
    "value": false
  },
  {
    "setting": "qw",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucketT01"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "qx",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucketC01"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "qy",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ],
        "setting": "bbbbb"
      },
      {
        "value": true,
        "users": [
          "someone"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "qz",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "intls": [
          "us"
        ],
        "langs": [
          "en"
        ]
      }
    ],
    "setting": "ra",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "intls": [
          "us",
          "ca",
          "in",
          "mx",
          "ar",
          "br"
        ],
        "langs": [
          "en-US",
          "es-US",
          "en-CA",
          "fr-CA",
          "en-IN",
          "es-MX",
          "es-AR",
          "pt-BR"
        ]
      }
    ],
    "setting": "rb",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "rc",
    "value": false
  },
  {
    "setting": "rd",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket1"
        ],
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "re",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "setting": "asdf"
      }
    ],
    "setting": "rf",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "rg",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "ra"
      },
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucket02"
        ]
      }
    ],
    "setting": "rh",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "asdf"
      }
    ],
    "setting": "ri",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "assav"
      }
    ],
    "setting": "rj",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketM1"
        ]
      }
    ],
    "setting": "rk",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketM2"
        ]
      }
    ],
    "setting": "rl",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketM3"
        ]
      }
    ],
    "setting": "rm",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketM4"
        ]
      }
    ],
    "setting": "rn",
    "value": false
  },
  {
    "setting": "ro",
    "value": false
  },
  {
    "setting": "rq",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucketLN2",
          "bucketLN4"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketLN1",
          "bucketLN3"
        ],
        "intls": [
          "us"
        ],
        "langs": [
          "en"
        ]
      },
      {
        "value": true,
        "setting": "acxLN5",
        "intls": [
          "us"
        ],
        "langs": [
          "en"
        ]
      }
    ],
    "setting": "rs",
    "value": false
  },
  {
    "setting": "rt",
    "value": false
  },
  {
    "setting": "ru",
    "value": false
  },
  {
    "setting": "rv",
    "value": false
  },
  {
    "setting": "rw",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "rx"
        ]
      }
    ],
    "setting": "rx",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "ry",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucket12"
        ],
        "intls": [
          "us"
        ],
        "langs": [
          "en"
        ]
      }
    ],
    "setting": "rz",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "ascx"
      },
      {
        "value": false,
        "browsers": [
          {
            "name": "ie",
            "version": 0
          }
        ]
      },
      {
        "value": false,
        "partners": [
          "asdf",
          "abcdefg"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucketC03"
        ],
        "setting": "bbbbb"
      }
    ],
    "setting": "sa",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "partners": [
          "asdf"
        ]
      },
      {
        "value": false,
        "partners": [
          "all"
        ]
      }
    ],
    "setting": "sb",
    "value": true
  },
  {
    "setting": "sc",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "setting": "sc",
        "langs": [
          "en"
        ]
      }
    ],
    "setting": "sd",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucketT01"
        ]
      }
    ],
    "setting": "se",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucketC2"
        ]
      },
      {
        "value": false,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ]
      }
    ],
    "setting": "sf",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "setting": "sf"
      }
    ],
    "setting": "sg",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucketTPC1",
          "bucketRDC1"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketTP01",
          "bucketRD01"
        ]
      }
    ],
    "setting": "sh",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucketB01"
        ]
      }
    ],
    "setting": "si",
    "value": false
  },
  {
    "setting": "sj",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "settingA": [
          "1428",
          "1200..1226",
          "1229",
          "1245",
          "1247",
          "1249..1262",
          "1267..1268",
          "1404",
          "1601",
          "1632..1636",
          "1638..1640",
          "1645..1648"
        ]
      }
    ],
    "setting": "sk",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "users": [
          "someone"
        ]
      }
    ],
    "setting": "sl",
    "value": true
  },
  {
    "setting": "sm",
    "value": true
  },
  {
    "setting": "sn",
    "value": true
  },
  {
    "setting": "so",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucketHKT"
        ]
      },
      {
        "value": true,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "setting": "sn"
      }
    ],
    "setting": "sp",
    "value": true
  },
  {
    "setting": "sq",
    "value": false
  },
  {
    "setting": "sr",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "setting": "sbas"
      }
    ],
    "setting": "st",
    "value": false
  },
  {
    "setting": "su",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "langs": [
          "ml-IN",
          "ta-IN",
          "fr-CA",
          "el-GR",
          "bn-IN",
          "sr-Cyrl-RS"
        ]
      }
    ],
    "setting": "sv",
    "value": false
  },
  {
    "setting": "sw",
    "value": true
  },
  {
    "setting": "sx",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      }
    ],
    "setting": "sy",
    "value": false
  },
  {
    "setting": "sz",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": false,
        "users": [
          "someone"
        ]
      },
      {
        "value": false,
        "setting": "sgasdg"
      }
    ],
    "setting": "ta",
    "value": true
  },
  {
    "setting": "tb",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      }
    ],
    "setting": "tc",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "tc"
      }
    ],
    "setting": "td",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucketT01"
        ]
      }
    ],
    "setting": "te",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "tf",
    "value": false
  },
  {
    "setting": "tg",
    "value": true
  },
  {
    "setting": "th",
    "value": true
  },
  {
    "setting": "ti",
    "value": true
  },
  {
    "setting": "tj",
    "value": true
  },
  {
    "setting": "tk",
    "value": true
  },
  {
    "setting": "tl",
    "value": true
  },
  {
    "setting": "tm",
    "value": true
  },
  {
    "setting": "tn",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucket01"
        ]
      },
      {
        "value": false,
        "percentage": 40
      }
    ],
    "setting": "to",
    "value": true
  },
  {
    "setting": "tp",
    "value": false
  },
  {
    "setting": "tq",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "intls": [
          "be",
          "uk",
          "in",
          "fr",
          "us",
          "br",
          "tw",
          "de",
          "cf",
          "ca",
          "au",
          "it",
          "hk",
          "es",
          "ar",
          "mx",
          "e1",
          "ie",
          "nz",
          "sg",
          "aa",
          "cn",
          "se",
          "no",
          "dk",
          "kr",
          "gr",
          "cl",
          "co",
          "pe",
          "ve",
          "nl",
          "pl",
          "ro",
          "ru",
          "tr",
          "id",
          "my",
          "ph",
          "vn",
          "th",
          "fi"
        ],
        "partners": [
          "none"
        ]
      },
      {
        "value": true,
        "partners": [
          "asdf",
          "abcdefg"
        ]
      }
    ],
    "setting": "tr",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "intls": [
          "aa",
          "cn",
          "ca",
          "cf",
          "ar",
          "au",
          "in",
          "ie",
          "es",
          "gr",
          "no",
          "tw",
          "nz",
          "de",
          "it",
          "fr",
          "hk",
          "br",
          "e1",
          "us",
          "kr",
          "uk",
          "sg",
          "mx",
          "se",
          "dk"
        ],
        "partners": [
          "none"
        ]
      },
      {
        "value": true,
        "partners": [
          "asdf",
          "abcdefg"
        ]
      }
    ],
    "setting": "ts",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "settingA": [
          "1860",
          "1861",
          "874",
          "877",
          "878",
          "879"
        ]
      }
    ],
    "setting": "tu",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      }
    ],
    "setting": "tv",
    "value": true
  },
  {
    "setting": "tw",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketA"
        ]
      },
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      }
    ],
    "setting": "tx",
    "value": false
  },
  {
    "setting": "ty",
    "value": false
  },
  {
    "setting": "tz",
    "value": true
  },
  {
    "setting": "ua",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      }
    ],
    "setting": "ub",
    "value": false
  },
  {
    "setting": "uc",
    "value": true
  },
  {
    "setting": "ud",
    "value": true
  },
  {
    "setting": "ue",
    "value": false
  },
  {
    "setting": "uf",
    "value": true
  },
  {
    "setting": "ug",
    "value": true
  },
  {
    "setting": "uh",
    "value": true
  },
  {
    "setting": "ui",
    "value": true
  },
  {
    "setting": "uj",
    "value": true
  },
  {
    "setting": "uk",
    "value": true
  },
  {
    "setting": "ul",
    "value": true
  },
  {
    "setting": "um",
    "value": false
  },
  {
    "setting": "un",
    "value": true
  },
  {
    "setting": "uo",
    "value": true
  },
  {
    "setting": "up",
    "value": true
  },
  {
    "setting": "uq",
    "value": true
  },
  {
    "setting": "ur",
    "value": false
  },
  {
    "setting": "us",
    "value": false
  },
  {
    "setting": "ut",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket04"
        ]
      }
    ],
    "setting": "uv",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "qa"
        ]
      }
    ],
    "setting": "uw",
    "value": false
  },
  {
    "setting": "ux",
    "value": true
  },
  {
    "setting": "uy",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketS01"
        ],
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "uz",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketS01",
          "bucket01",
          "bucket02",
          "bucket03",
          "bucket04",
          "bucket05",
          "bucket06",
          "bucket07",
          "bucket08",
          "bucket09",
          "bucket10",
          "bucket11",
          "bucket12",
          "bucket13",
          "bucket14",
          "bucket15",
          "bucket16"
        ],
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "va",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      }
    ],
    "setting": "vb",
    "value": false
  },
  {
    "setting": "vc",
    "value": true
  },
  {
    "setting": "vd",
    "value": true
  },
  {
    "setting": "ve",
    "value": true
  },
  {
    "setting": "vf",
    "value": true
  },
  {
    "setting": "vg",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "partners": [
          "none"
        ],
        "intls": [
          "us",
          "uk",
          "de",
          "fr",
          "it",
          "xa",
          "xe",
          "ar",
          "au",
          "be",
          "br",
          "ca",
          "cl",
          "co",
          "es",
          "gr",
          "hk",
          "id",
          "ie",
          "in",
          "mx",
          "my",
          "nz",
          "pe",
          "ph",
          "ro",
          "se",
          "sg",
          "tw",
          "ve",
          "vn",
          "za"
        ],
        "langs": [
          "en",
          "fr",
          "de",
          "es",
          "it",
          "el",
          "sv",
          "vi",
          "zh",
          "ms",
          "id",
          "pt",
          "ar",
          "nl",
          "ro"
        ]
      },
      {
        "value": true,
        "partners": [
          "asdf"
        ],
        "langs": [
          "en",
          "fr",
          "de",
          "es",
          "it",
          "el",
          "sv",
          "vi",
          "zh",
          "ms",
          "id",
          "pt",
          "ar",
          "nl",
          "ro"
        ]
      }
    ],
    "setting": "vh",
    "value": false
  },
  {
    "setting": "vi",
    "value": true
  },
  {
    "setting": "vj",
    "value": false
  },
  {
    "setting": "vk",
    "value": true
  },
  {
    "setting": "vl",
    "value": true
  },
  {
    "setting": "vm",
    "value": false
  },
  {
    "setting": "vn",
    "value": true
  },
  {
    "setting": "vo",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucket01"
        ]
      },
      {
        "value": false,
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "vp",
    "value": false
  },
  {
    "setting": "vq",
    "value": true
  },
  {
    "setting": "vr",
    "value": true
  },
  {
    "setting": "vs",
    "value": true
  },
  {
    "setting": "vt",
    "value": true
  },
  {
    "setting": "vu",
    "value": true
  },
  {
    "setting": "vw",
    "value": false
  },
  {
    "setting": "vx",
    "value": true
  },
  {
    "setting": "vy",
    "value": true
  },
  {
    "setting": "vz",
    "value": true
  },
  {
    "setting": "ua",
    "value": true
  },
  {
    "setting": "ub",
    "value": false
  },
  {
    "setting": "uc",
    "value": true
  },
  {
    "setting": "ud",
    "value": false
  },
  {
    "setting": "ue",
    "value": false
  },
  {
    "setting": "uf",
    "value": true
  },
  {
    "setting": "ug",
    "value": false
  },
  {
    "setting": "uh",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      }
    ],
    "setting": "ui",
    "value": false
  },
  {
    "setting": "uj",
    "value": true
  },
  {
    "setting": "uk",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "settingA": [
          "1400",
          "1428"
        ],
        "percentage": 20
      }
    ],
    "setting": "ul",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucketC1",
          "bucket01",
          "bucketT01",
          "bucket30",
          "bucketC01",
          "bucket16",
          "bucket17"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketT031",
          "bucketC01"
        ],
        "percentage": 1
      }
    ],
    "setting": "um",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "un",
    "value": true
  },
  {
    "setting": "uo",
    "value": true
  },
  {
    "setting": "up",
    "value": true
  },
  {
    "setting": "uq",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      }
    ],
    "setting": "ur",
    "value": false
  },
  {
    "setting": "us",
    "value": false
  },
  {
    "setting": "ut",
    "value": false
  },
  {
    "setting": "uv",
    "value": false
  },
  {
    "setting": "uw",
    "value": false
  },
  {
    "setting": "ux",
    "value": true
  },
  {
    "setting": "uy",
    "value": false
  },
  {
    "setting": "uz",
    "value": true
  },
  {
    "setting": "wa",
    "value": true
  },
  {
    "setting": "wb",
    "value": true
  },
  {
    "setting": "wc",
    "value": true
  },
  {
    "setting": "wd",
    "value": true
  },
  {
    "setting": "we",
    "value": false
  },
  {
    "setting": "wf",
    "value": false
  },
  {
    "setting": "wg",
    "value": true
  },
  {
    "setting": "wh",
    "value": false
  },
  {
    "setting": "wi",
    "value": false
  },
  {
    "setting": "wj",
    "value": false
  },
  {
    "setting": "wk",
    "value": false
  },
  {
    "setting": "wl",
    "value": true
  },
  {
    "setting": "wm",
    "value": true
  },
  {
    "setting": "wn",
    "value": true
  },
  {
    "setting": "wo",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "prod",
          "pilot"
        ]
      }
    ],
    "setting": "wp",
    "value": false
  },
  {
    "setting": "wq",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      }
    ],
    "setting": "wr",
    "value": false
  },
  {
    "setting": "ws",
    "value": true
  },
  {
    "setting": "wt",
    "value": true
  },
  {
    "setting": "wu",
    "value": true
  },
  {
    "setting": "wv",
    "value": true
  },
  {
    "setting": "wx",
    "value": true
  },
  {
    "setting": "wy",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      }
    ],
    "setting": "wz",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      }
    ],
    "setting": "xa",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "intls": [
          "au",
          "ca",
          "de",
          "es",
          "fr",
          "in",
          "it",
          "uk",
          "us"
        ]
      },
    ],
    "setting": "xb",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket01",
          "bucket02"
        ]
      }
    ],
    "setting": "xc",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket02"
        ]
      }
    ],
    "setting": "xd",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket01"
        ]
      }
    ],
    "setting": "xe",
    "value": false
  },
  {
    "setting": "xf",
    "value": true
  },
  {
    "setting": "xg",
    "value": true
  },
  {
    "setting": "xh",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "langs": [
          "en",
          "es",
          "fr",
          "de",
          "it"
        ]
      }
    ],
    "setting": "xi",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "partners": [
          "sdfhsdf"
        ]
      }
    ],
    "setting": "xj",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      }
    ],
    "setting": "xk",
    "value": false
  },
  {
    "setting": "xl",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucket04",
          "bucket07",
          "bucketC1"
        ]
      }
    ],
    "setting": "xm",
    "value": true
  },
  {
    "setting": "xn",
    "value": true
  },
  {
    "setting": "xo",
    "value": true
  },
  {
    "setting": "xp",
    "value": true
  },
  {
    "setting": "xq",
    "value": true
  },
  {
    "setting": "xr",
    "value": true
  },
  {
    "setting": "xs",
    "value": true
  },
  {
    "setting": "xt",
    "value": true
  },
  {
    "setting": "xu",
    "value": false
  },
  {
    "setting": "xv",
    "value": false
  },
  {
    "setting": "xw",
    "value": false
  },
  {
    "setting": "xy",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      }
    ],
    "setting": "xz",
    "value": false
  },
  {
    "setting": "ya",
    "value": true
  },
  {
    "setting": "yb",
    "value": true
  },
  {
    "setting": "yc",
    "value": true
  },
  {
    "setting": "yd",
    "value": false
  },
  {
    "setting": "ye",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "ages": [
          "minor"
        ]
      }
    ],
    "setting": "yf",
    "value": true
  },
  {
    "setting": "yg",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucketC01"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketT01"
        ],
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "yh",
    "value": false
  },
  {
    "setting": "yi",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucket31"
        ]
      }
    ],
    "setting": "yj",
    "value": true
  },
  {
    "setting": "yk",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "setting": "yl"
      }
    ],
    "setting": "ym",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket16"
        ]
      }
    ],
    "setting": "yn",
    "value": false
  },
  {
    "setting": "yo",
    "value": true
  },
  {
    "setting": "yp",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "langs": [
          "en-US"
        ],
        "percentage": 50
      }
    ],
    "setting": "yq",
    "value": false
  },
  {
    "setting": "yr",
    "value": false
  },
  {
    "setting": "ys",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "bb"
      }
    ],
    "setting": "yt",
    "value": true
  },
  {
    "setting": "yu",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "xx"
      },
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ],
        "setting": "aa"
      }
    ],
    "setting": "yv",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "stages": [
          "dev"
        ]
      }
    ],
    "setting": "yw",
    "value": true
  },
  {
    "setting": "yx",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "langs": [
          "bg-BG",
          "bn-IN",
          "cs-CZ",
          "da-DK",
          "de-AT",
          "de-CH",
          "de-DE",
          "el-GR",
          "en-AU",
          "en-CA",
          "en-GB",
          "en-IN",
          "en-MY",
          "en-NZ",
          "en-PH",
          "en-SG",
          "en-US",
          "es-AR",
          "es-CL",
          "es-CO",
          "es-ES",
          "es-MX",
          "es-US",
          "et-EE",
          "fi-FI",
          "fil-PH",
          "fr-BE",
          "fr-CA",
          "fr-FR",
          "gu-IN",
          "hi-IN",
          "hr-HR",
          "hu-HU",
          "id-ID",
          "it-IT",
          "kn-IN",
          "ko-KR",
          "lt-LT",
          "lv-LV",
          "ml-IN",
          "mr-IN",
          "ms-MY",
          "nb-NO",
          "nl-BE",
          "nl-NL",
          "pl-PL",
          "pt-BR",
          "pt-PT",
          "ro-RO",
          "ru-RU",
          "sk-SK",
          "sl-SI",
          "sr-Cyrl-RS",
          "sv-SE",
          "ta-IN",
          "te-IN",
          "th-TH",
          "tr-TR",
          "uk-UA",
          "vi-VN",
          "zh-Hans-CN",
          "zh-Hant-HK",
          "zh-Hant-TW"
        ]
      }
    ],
    "setting": "yz",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "avas"
      }
    ],
    "setting": "za",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "setting": "avas"
      }
    ],
    "setting": "zb",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "setting": "asd"
      }
    ],
    "setting": "zc",
    "value": true
  },
  {
    "setting": "zd",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "qa"
        ],
        "langs": [
          "en-US"
        ]
      }
    ],
    "setting": "ze",
    "value": false
  },
  {
    "setting": "zf",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "setting": "sdfsd"
      }
    ],
    "setting": "zg",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "gfsfd"
      }
    ],
    "setting": "zh",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "fsfg"
      }
    ],
    "setting": "zi",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucketT02",
          "bucketC01"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketT01"
        ],
        "langs": [
          "en-US"
        ]
      }
    ],
    "setting": "zj",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucketT01",
          "bucketC01"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketT02"
        ],
        "langs": [
          "en-US"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "setting": "zk"
      }
    ],
    "setting": "zl",
    "value": false
  },
  {
    "setting": "zm",
    "value": true
  },
  {
    "setting": "zn",
    "value": false
  },
  {
    "setting": "zo",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "setting": "asdf"
      }
    ],
    "setting": "zp",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket01"
        ],
        "intls": [
          "us"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketUK01"
        ],
        "intls": [
          "uk"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketDE01"
        ],
        "intls": [
          "de"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketFR01"
        ],
        "intls": [
          "fr"
        ]
      }
    ],
    "setting": "zq",
    "value": true
  },
  {
    "setting": "zr",
    "value": true
  },
  {
    "setting": "zs",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      }
    ],
    "setting": "zt",
    "value": true
  },
  {
    "setting": "zu",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev"
        ]
      }
    ],
    "setting": "zv",
    "value": false
  },
  {
    "setting": "zw",
    "value": true
  },
  {
    "setting": "zx",
    "value": false
  },
  {
    "setting": "zy",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "asdf",
          "abcdefg"
        ]
      },
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": false,
        "ages": [
          "minor"
        ]
      },
      {
        "value": true,
        "intls": [
          "aa",
          "ar",
          "at",
          "au",
          "be",
          "bg",
          "br",
          "ca",
          "cf",
          "ch",
          "cl",
          "co",
          "cz",
          "de",
          "dk",
          "e1",
          "ee",
          "es",
          "fi",
          "fr",
          "gr",
          "hi",
          "hk",
          "hr",
          "hu",
          "id",
          "ie",
          "il",
          "in",
          "it",
          "kr",
          "lt",
          "lv",
          "mx",
          "my",
          "nl",
          "no",
          "nz",
          "pe",
          "ph",
          "pl",
          "ro",
          "rs",
          "ru",
          "se",
          "sg",
          "si",
          "sk",
          "th",
          "tr",
          "tw",
          "ua",
          "uk",
          "us",
          "ve",
          "vn",
          "xa",
          "xe",
          "xp",
          "za"
        ],
        "langs": [
          "ar",
          "da",
          "de",
          "en",
          "es",
          "fi",
          "fr",
          "id",
          "it",
          "ko",
          "ms",
          "pl",
          "pt",
          "ro",
          "ru",
          "th",
          "tr",
          "vi",
          "zh"
        ]
      }
    ],
    "setting": "bba",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": false,
        "ages": [
          "minor"
        ]
      },
      {
        "value": true,
        "intls": [
          "ar",
          "au",
          "ca",
          "cf",
          "cl",
          "co",
          "de",
          "e1",
          "es",
          "fr",
          "hk",
          "id",
          "in",
          "it",
          "mx",
          "nz",
          "pe",
          "tw",
          "uk",
          "us",
          "ve",
          "vn",
          "xp"
        ],
        "langs": [
          "de",
          "en",
          "es",
          "fr",
          "id",
          "it",
          "ko",
          "pt",
          "vi",
          "zh"
        ]
      }
    ],
    "setting": "bbc",
    "value": false
  },
  {
    "setting": "bbd",
    "value": true
  },
  {
    "setting": "bbe",
    "value": true
  },
  {
    "setting": "bbf",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "users": [
          "someone"
        ]
      }
    ],
    "setting": "bbg",
    "value": false
  },
  {
    "setting": "bbh",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": false,
        "buckets": [
          "bucketK01"
        ]
      }
    ],
    "setting": "bbi",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "bbj",
    "value": false
  },
  {
    "setting": "bbk",
    "value": true
  },
  {
    "setting": "bbl",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucketK01"
        ]
      }
    ],
    "setting": "bbm",
    "value": true
  },
  {
    "setting": "bbn",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "03",
          "bucket001",
          "bucket002",
          "bucket003",
          "bucket004",
          "bucket005",
          "bucket01",
          "bucket02",
          "bucket03",
          "bucket04",
          "bucket05"
        ],
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "bbo",
    "value": false
  },
  {
    "setting": "bbp",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucketADPLBB01",
          "bucketSNPT01"
        ]
      },
      {
        "value": false,
        "partners": [
          "abcdefg"
        ]
      }
    ],
    "setting": "bbq",
    "value": false
  },
  {
    "setting": "bbr",
    "value": true
  },
  {
    "setting": "bbs",
    "value": true
  },
  {
    "setting": "bbt",
    "value": false
  },
  {
    "setting": "bbu",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "stages": [
          "dev"
        ]
      }
    ],
    "setting": "bbv",
    "value": true
  },
  {
    "setting": "bbw",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "stages": [
          "dev"
        ]
      }
    ],
    "setting": "bbx",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "stages": [
          "dev"
        ]
      }
    ],
    "setting": "bby",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "stages": [
          "qa",
          "dev"
        ]
      }
    ],
    "setting": "bbz",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket01"
        ],
        "intls": [
          "us"
        ],
        "langs": [
          "en-US"
        ]
      }
    ],
    "setting": "cca",
    "value": false
  },
  {
    "setting": "ccb",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket01"
        ],
        "intls": [
          "us"
        ],
        "langs": [
          "en-US"
        ]
      }
    ],
    "setting": "ccd",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "partners": [
          "all"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucket10",
          "bucket15",
          "bucket20",
          "bucket25",
          "bucket30",
          "bucketLH30"
        ],
        "intls": [
          "us"
        ]
      }
    ],
    "setting": "cce",
    "value": false
  },
  {
    "setting": "ccf",
    "value": false
  },
  {
    "setting": "ccg",
    "value": true
  },
  {
    "except": [
      {
        "value": false,
        "buckets": [
          "bucket01",
          "bucket02"
        ]
      }
    ],
    "setting": "cch",
    "value": true
  },
  {
    "setting": "cci",
    "value": false
  },
  {
    "setting": "ccj",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      }
    ],
    "setting": "cck",
    "value": false
  },
  {
    "setting": "ccl",
    "value": true
  },
  {
    "setting": "ccm",
    "value": true
  },
  {
    "setting": "ccn",
    "value": false
  },
  {
    "except": [
      {
        "value": false,
        "stages": [
          "dev",
          "qa",
          "pilot"
        ]
      },
      {
        "value": false,
        "users": [
          "someone"
        ]
      }
    ],
    "setting": "cco",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      },
      {
        "value": true,
        "buckets": [
          "bucketT1"
        ]
      }
    ],
    "setting": "ccp",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "stages": [
          "dev",
          "qa"
        ]
      },
      {
        "value": true,
        "users": [
          "someone"
        ]
      }
    ],
    "setting": "ccq",
    "value": false
  },
  {
    "setting": "ccr",
    "value": true
  },
  {
    "except": [
      {
        "value": true,
        "percentage": 10
      }
    ],
    "setting": "ccs",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "percentage": 1
      }
    ],
    "setting": "cct",
    "value": false
  },
  {
    "setting": "ccu",
    "value": false
  },
  {
    "except": [
      {
        "value": true,
        "buckets": [
          "bucket09325"
        ]
      }
    ],
    "setting": "ccz",
    "value": false
  }
];
