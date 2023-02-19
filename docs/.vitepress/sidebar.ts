import {DefaultTheme} from "vitepress";
import {getLectures} from "../../utils";

export const sidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: 'Вступление',
      items: [
        {
          text: "О проекте",
          link: "/about"
        },
        {
          text: "Доступные дисциплины",
          link: "/introduction"
        }
      ]
    },
    {
      text: 'Гайды',
      items: [
        {
          text: 'Как добавить свою лекцию',
          link: '/guides/lecture.md'
        }
      ]
    }
  ],
  '/disciplines/ais': [
    {
      text: 'Введение',
      items: [
        {
          text: 'Описание дисциплины',
          link: '/disciplines/ais/'
        },
        {
          text: 'Слова благодарности',
          link: '/disciplines/ais/contributors'
        }
      ],
    },
    {
      text: "Лекции",
      items: [
        {
          text: "Лекция 1",
          link: "/disciplines/ais/lectures/1"
        }
      ],
    }
  ],
  '/disciplines/db': [
    {
      text: 'Введение',
      items: [
        {
          text: 'Описание дисциплины',
          link: '/disciplines/db/'
        },
        {
          text: 'Слова благодарности',
          link: '/disciplines/db/contributors'
        }
      ],
    },
    {
      text: "Лекции",
      items: getLectures("./docs/disciplines/db/lectures/").sort((a, b) => a - b < 0 ? -1 : 1).map(l => {
        return {
          text: `Лекция ${l}`,
          link: `/disciplines/db/lectures/${l}`
        }
      }),
    }
  ]
};
