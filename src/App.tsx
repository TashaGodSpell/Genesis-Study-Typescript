import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/TashaGodSpell.png",
      name: "Gustavo Isidoro",
      role: "Passionate developer",
    },
    content: [
      { type: "paragraph", content: "Fala meu povo 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-12-08 16:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Mike Wazowski",
      role: "Manager",
    },
    content: [
      { type: "paragraph", content: "Fala meu povo 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-12-09 16:00:00"),
  },

  {
    id: 3,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "James P. Sullivan",
      role: "Operator",
    },
    content: [
      { type: "paragraph", content: "Fala meu povo 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-12-07 16:00:00"),
  },
];
export function App() {
  return (
    <div>
      <Header title="Genesis Study" />

      <div className={styles.wrapper}>
        <Sidebar name="Gustavo" job="Developer" />
        <main>
          {posts.map((post, index) => {
            return (<Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />);
          })}
        </main>
      </div>
    </div>
  );
}
