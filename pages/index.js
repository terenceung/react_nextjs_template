import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import BaseLayout from '../components/baseLayout';
import { withTranslation } from '../i18n';



function Home({t}) {
  return (
    <BaseLayout title={'Home'}>
      <div>Home</div>
    </BaseLayout>
  )
}

export default withTranslation()(Home);
