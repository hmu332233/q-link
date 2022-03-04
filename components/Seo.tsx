import Head from 'next/head';
import React from 'react';

type Props = {};

function Seo({}: Props) {
  return (
    <Head>
      <title>Q.Link</title>
      <meta name="description" content="퀴즈로 접근하는 링크, Q.Link입니다!" />
      <meta
        name="keywords"
        content="Q.Link,퀴즈 링크,링크,문제,Quiz Link,Link,Quiz"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Q.Link" />
      <meta
        property="og:description"
        content="퀴즈로 접근하는 링크, Q.Link입니다!"
      />
      {/* <meta property="og:image" content=""/> */}
      <meta property="og:url" content="https://q-link.vercel.app" />
    </Head>
  );
}

export default Seo;
