import styles from './index.less';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>公共头部</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
