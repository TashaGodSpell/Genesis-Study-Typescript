import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

interface SidebarProps {
  name: string;
  job: string;
}

export function Sidebar(props: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
      />
      <div className={styles.profile}>

        <Avatar img="https://github.com/TashaGodSpell.png"/>
        <strong>{props.name}</strong>
        <span>{props.job}</span>
      </div>

      <footer>
        <a href="m">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
