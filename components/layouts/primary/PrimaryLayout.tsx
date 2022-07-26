import Head from 'next/head';
import Header from '../../navigation/header/Header';

import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <div>
      <Head>
        <title>Winter of Tech</title>
      </Head>
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        <Header />
        <main className={styles.main}>{children}</main>
        <div className="m-auto" />
      </div>
    </div>
  );
};

export default PrimaryLayout;
