import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Layout from 'components/Layout';
import { defaultDescription, defaultKeywords } from 'lib/constants';

const layoutProps = {
  title: 'Not Found',
  description: defaultDescription,
  keywords: defaultKeywords,
};

const Paragraph = styled.p.attrs({
  className: 'main__description',
})``;

const NotFoundPage = () => {
  return (
    <Layout {...layoutProps}>
      <div className="main common">
        <section className="main__section">
          <h1 className="main__title">404 - Not Found</h1>
          <Paragraph>
            The page you are looking for does not exist.{' '}
            <Link href="/">Go home</Link>.
          </Paragraph>
        </section>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
