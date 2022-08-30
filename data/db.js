const USERS_BBDD = [
  {
    id: "62e94d213125db16e78123fe",
    email: "jc@jc.com",
    password: "12345",
    roles: ["admin"],
    apiKey: "bf35deb5-1438-40b5-a750-99c265b5d9cf",
    profile: {
      dob: "1993-09-03",
      name: "Figueroa Bird",
      about:
        "Nisi ullamco aliquip sint ipsum. Nisi aliquip amet cillum esse exercitation sit minim.",
      address: "34 Beadel Street, Chesterfield, Rhode Island",
      company: "Quantasis",
      location: {
        lat: -1.093567,
        long: 58.894078,
      },
    },
    username: "jccastillo",
    createdAt: "2013-05-13T14:50:31.708Z",
    updatedAt: "2013-05-14T14:50:31.708Z",
  },
  {
    id: "62e94d219ff35e4acb2d13a9",
    email: "andres@jc.com",
    password: "12345",
    roles: ["user"],
    apiKey: "a9c9b63a-0726-485a-8e08-621078d32d6c",
    profile: {
      dob: "1989-01-27",
      name: "Andres R",
      about:
        "Lorem occaecat in minim excepteur laborum ullamco. Nisi ex laborum eu cillum reprehenderit deserunt sunt.",
      address: "17 Pioneer Street, Tilleda, Hawaii",
      company: "Zilch",
      location: {
        lat: -25.332869,
        long: 89.609183,
      },
    },
    username: "andres89",
    createdAt: "2012-10-30T20:58:26.009Z",
    updatedAt: "2012-10-31T20:58:26.009Z",
  },
  {
    id: "62e94d2128360bb98ee82341",
    email: "patel_golden@ronbert.accountants",
    password: "12345",
    roles: ["guest", "owner"],
    apiKey: "49f751c1-644c-4c75-803c-4eeb48756b1a",
    profile: {
      dob: "1993-07-01",
      name: "Patel Golden",
      about:
        "Nostrud elit eiusmod sint non anim magna laborum voluptate culpa eiusmod excepteur et quis. Deserunt reprehenderit magna tempor voluptate veniam consectetur non non pariatur ex.",
      address: "39 Norfolk Street, Riverton, Arkansas",
      company: "Ronbert",
      location: {
        lat: -51.284016,
        long: -146.549028,
      },
    },
    username: "patel93",
    createdAt: "2013-12-03T14:22:34.292Z",
    updatedAt: "2013-12-04T14:22:34.292Z",
  },
  {
    id: "62e94d210fea9741ea0e0cfa",
    email: "cecilia_case@snowpoke.cg",
    roles: ["member", "admin"],
    apiKey: "a77d0b05-4b51-4e11-b90d-a6fe8c2fd98e",
    profile: {
      dob: "1993-12-19",
      name: "Cecilia Case",
      about:
        "Est exercitation aliqua adipisicing excepteur elit laboris do culpa labore laboris. Deserunt velit et aute consectetur reprehenderit do deserunt nulla.",
      address: "43 Prospect Street, Hegins, North Dakota",
      company: "Snowpoke",
      location: {
        lat: 12.229349,
        long: 128.953801,
      },
    },
    username: "cecilia93",
    createdAt: "2012-11-11T20:39:56.021Z",
    updatedAt: "2012-11-12T20:39:56.021Z",
  },
  {
    id: "62e94d21a10e8402d5ebc593",
    email: "gates_cruz@zaggle.doosan",
    roles: ["member"],
    apiKey: "0b44b259-68ab-4136-8fd2-181d7d58dc59",
    profile: {
      dob: "1994-09-10",
      name: "Gates Cruz",
      about:
        "Minim exercitation deserunt esse et. Fugiat commodo voluptate esse adipisicing cillum irure proident excepteur ex.",
      address: "94 Seabring Street, Campo, Montana",
      company: "Zaggle",
      location: {
        lat: 78.988588,
        long: 173.361811,
      },
    },
    username: "gates94",
    createdAt: "2011-10-10T06:51:27.871Z",
    updatedAt: "2011-10-11T06:51:27.871Z",
  },
  {
    id: "62e94d21431e123bcd784b60",
    email: "sharp_nichols@zensure.fm",
    roles: ["guest", "admin"],
    apiKey: "0b8ee690-9009-4615-a537-b626d26a5b9e",
    profile: {
      dob: "1990-05-30",
      name: "Sharp Nichols",
      about:
        "Minim amet minim tempor consequat reprehenderit. Sint cupidatat sint deserunt enim aliqua.",
      address: "75 Stillwell Avenue, Chautauqua, Utah",
      company: "Zensure",
      location: {
        lat: 14.385855,
        long: -106.176365,
      },
    },
    username: "sharp90",
    createdAt: "2013-03-12T21:01:24.554Z",
    updatedAt: "2013-03-13T21:01:24.554Z",
  },
  {
    id: "62e94d21cd85dc94e9752bcb",
    email: "stafford_newton@zenco.club",
    roles: ["owner", "admin"],
    apiKey: "4dcfb278-7f7f-4c3f-a099-8a7e1feb4dab",
    profile: {
      dob: "1993-06-18",
      name: "Stafford Newton",
      about:
        "Amet voluptate non pariatur aliqua aliquip irure. Enim enim aliqua do in deserunt anim veniam eiusmod ut exercitation.",
      address: "94 Columbus Place, Enlow, New Mexico",
      company: "Zenco",
      location: {
        lat: 31.943897,
        long: 119.745574,
      },
    },
    username: "stafford93",
    createdAt: "2010-04-13T09:56:45.548Z",
    updatedAt: "2010-04-14T09:56:45.548Z",
  },
  {
    id: "62e94d2102799b86c7b156ea",
    email: "navarro_roberson@zilphur.id",
    roles: ["member"],
    apiKey: "ca5c311d-49cd-481d-bc1a-0d99c0c459dc",
    profile: {
      dob: "1993-07-16",
      name: "Navarro Roberson",
      about:
        "Ullamco aliqua laborum consequat sunt occaecat non Lorem. Est aute veniam consequat duis ut irure nisi sit dolor deserunt sunt nostrud.",
      address: "38 Garnet Street, Muir, Maryland",
      company: "Zilphur",
      location: {
        lat: -63.756694,
        long: -175.710063,
      },
    },
    username: "navarro93",
    createdAt: "2010-12-13T22:54:12.910Z",
    updatedAt: "2010-12-14T22:54:12.910Z",
  }
]

module.exports = { USERS_BBDD }