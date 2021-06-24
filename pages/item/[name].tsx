import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

interface Props {
  name: string | undefined;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const notFound = context.params?.name === 'not-found';
  const redirect = context.params?.name === 'redirect';

  if (notFound) {
    return {
      notFound: true
    };
  }

  if (redirect) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }

  const result = {
    props: {
      name: context.params?.name
    }
  };

  return result;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking'
});

const Item = (props: Props) => {
  const { name } = props;
  return (
    <h1>
      {`Item: ${name}`}
    </h1>
  );
};

export default Item;
