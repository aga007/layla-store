import React from 'react';
import Category from '../../components/Category/Category';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import H1 from '../../components/Heading/H1';
import styles from './Home.module.scss';
import { categories } from '../../data/localData/categories';

const Main = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <H1 content='Home' />
        <ul className={styles.home__container}>
          {categories.map(({ image, name, url }) => {
            return (
              <li className={styles.home__item} key={name}>
                <Link to={url}>
                  <Category image={image} name={name} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Main;
