import styles from './AppBlock.module.scss'

interface AppBlockTypes {
  children: React.ReactElement | React.ReactElement[];
}

const AppBlock = ({ children }:AppBlockTypes) => {
  return (
    <div className={styles['app-block']}>
      {children}
    </div>
  )
}

export default AppBlock