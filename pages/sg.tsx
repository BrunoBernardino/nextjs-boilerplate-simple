import React, { useState, useCallback, useContext } from 'react';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import Layout, { LoadingContext } from 'components/Layout';
import Button from 'components/Button';
import {
  defaultTitle,
  defaultDescription,
  defaultKeywords,
} from 'lib/constants';
import api from 'lib/api';

const layoutProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

const Paragraph = styled.p.attrs({
  className: 'main__description',
})``;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await api.get('random-positive-int');
    if (response && response.status === 200) {
      const { number: randomPositiveInt } = response.data as { number: number };
      return { props: { randomPositiveInt } };
    }
  } catch (error) {
    // Do nothing
  }

  return { props: { randomPositiveInt: -1 } };
};

type SgPageProps = {
  randomPositiveInt: number;
};

const PageSection = ({ randomPositiveInt }: SgPageProps) => {
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const [counter, setCounter] = useState(randomPositiveInt);
  const incrementCounter = useCallback(() => {
    showLoading();
    setCounter(counter + 1);
    setTimeout(() => hideLoading(), 1000);
  }, [counter]);

  return (
    <section className="main__section">
      <h1 className="main__title">This page was statically-generated (SG)!</h1>
      <Paragraph>
        The static page is quickly served without data and then updates with
        data requested from the server.
      </Paragraph>
      <Paragraph>
        The button starts as if having been clicked -1 times, and updates as if
        having been clicked {randomPositiveInt} time
        {randomPositiveInt === 1 ? '' : 's'}.
      </Paragraph>
      <Paragraph>
        Clicking the button also shows a loading indicator in the bottom right
        corner for 1 second, and isn't properly canceled when unmounting because
        this is a simple example.
      </Paragraph>
      <Button onClick={incrementCounter}>
        This button has been clicked {counter} time{counter === 1 ? '' : 's'}!
      </Button>
    </section>
  );
};

const SgPage = ({ randomPositiveInt }: SgPageProps) => {
  return (
    <Layout {...layoutProps}>
      <div className="main common">
        <PageSection randomPositiveInt={randomPositiveInt} />
      </div>
    </Layout>
  );
};

export default SgPage;
