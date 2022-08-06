import { Header } from './components/Header'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Matheus Carvalho"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi modi fugit repellat optio voluptatem quisquam! Soluta reprehenderit voluptas aperiam quam totam sunt, nihil veritatis minus rerum cupiditate mollitia adipisci."
          />
          <Post
            author="Lucas Eduardo"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo necessitatibus laboriosam, eum, ratione vitae ullam error dignissimos vero consequuntur aliquid nulla in aliquam. Iure exercitationem ex eligendi facilis pariatur doloribus."
          />
        </main>
      </div>
    </>
  )
}

